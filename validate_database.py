#!/usr/bin/env python3
"""Pre-release validator for PD Guide Toolkit master data and runtime files."""
from __future__ import annotations

import json
import re
import subprocess
import sys
from pathlib import Path

from generate_database import (
    EXTERNAL_FRU_LEVELS,
    EXTERNAL_FRU_SHEETS,
    NO_PHYSICAL_DAMAGE_LEVELS,
    OUTPUT,
    PRODUCT_SHEETS,
    REFERENCE_FILES,
    ROOT,
    VERSION,
    XLSX,
    full_model_structure,
    read_xlsx,
    render_reference_text,
    validate_workbook,
)

JS_FILES = ["database.js", "data.js", "knowledge.js", "app.js"]
VERSION_FILES = [
    "README.txt",
    "index.html",
    "generate_database.py",
    "docs/AI_HANDOVER_GUIDE.md",
    "docs/DEVELOPMENT_RULES.md",
    "docs/FULL_AUDIT.md",
    "docs/RELEASE_REPORT.md",
]


def load_runtime() -> dict:
    helper = r'''
const fs=require('fs'),vm=require('vm');
const p=process.argv[1];
const src=fs.readFileSync(p,'utf8')+'\n;globalThis.__OUT={DATABASE_META,LEVELS,MODEL_STRUCTURE_SOURCE,RELATED_GUIDE_MASTER};';
const ctx={}; vm.createContext(ctx); vm.runInContext(src,ctx);
process.stdout.write(JSON.stringify(ctx.__OUT));
'''
    proc = subprocess.run(
        ["node", "-e", helper, str(OUTPUT)],
        check=True,
        capture_output=True,
        text=True,
    )
    return json.loads(proc.stdout)


def validate_runtime() -> tuple[list[str], list[str]]:
    errors: list[str] = []
    warnings: list[str] = []
    runtime = load_runtime()
    metadata = runtime.get("DATABASE_META", {})
    levels = runtime["LEVELS"]
    structure = runtime["MODEL_STRUCTURE_SOURCE"]
    related_master = runtime.get("RELATED_GUIDE_MASTER", {})
    related_names = {str(name).strip().casefold() for name in related_master.values()}

    if str(metadata.get("version", "")) != VERSION:
        errors.append(f"Runtime DATABASE_META version mismatch: {metadata.get('version')} != {VERSION}")
    if str(metadata.get("source", "")) != XLSX.name:
        errors.append(f"Runtime DATABASE_META source mismatch: {metadata.get('source')} != {XLSX.name}")

    for product in PRODUCT_SHEETS.values():
        if product not in structure:
            errors.append(f"Runtime MODEL_STRUCTURE_SOURCE is missing product {product}")

    for level_key, level in levels.items():
        level_name_norm = str(level.get("name", "")).strip().casefold()
        for symptom_key, symptom in level.get("symptoms", {}).items():
            questions = symptom.get("questions", {})
            if not isinstance(questions, dict):
                continue
            for product, rows in questions.items():
                labels = [str(row.get("label", "")).strip().casefold() for row in rows]
                if level_name_norm in NO_PHYSICAL_DAMAGE_LEVELS and "physical damage" in labels:
                    errors.append(
                        f"Runtime forbidden Physical Damage: {product} > {level.get('name')} > {symptom.get('name')}"
                    )
                if level_name_norm == "monitor" and "other issue" in labels:
                    errors.append(
                        f"Runtime forbidden Other Issue: {product} > Monitor > {symptom.get('name')}"
                    )
                fru_positions = [index for index, label in enumerate(labels) if label == "fru p/n"]
                if fru_positions and fru_positions[-1] != len(labels) - 1:
                    errors.append(
                        f"Runtime FRU P/N is not last: {product} > {level.get('name')} > "
                        f"{symptom.get('name')}"
                    )

                external_products = {PRODUCT_SHEETS[name] for name in EXTERNAL_FRU_SHEETS}
                if product in external_products and level_name_norm in EXTERNAL_FRU_LEVELS:
                    if len(fru_positions) != 1:
                        errors.append(
                            f"Runtime FRU P/N count: {product} > {level.get('name')} > "
                            f"{symptom.get('name')} has {len(fru_positions)}"
                        )
                seen: set[str] = set()
                for index, row in enumerate(rows, start=1):
                    label = str(row.get("label", "")).strip()
                    label_norm = label.casefold()
                    if label_norm in seen:
                        errors.append(
                            f"Runtime duplicate checklist: {product} > {level.get('name')} > "
                            f"{symptom.get('name')} > {label}"
                        )
                    seen.add(label_norm)
                    options = row.get("optionsList", [])
                    bad_controls = [value for value in options if str(value).strip().casefold() in {"blank", "text input"}]
                    if bad_controls:
                        errors.append(
                            f"Runtime internal dropdown token visible: {product} > {level.get('name')} > "
                            f"{symptom.get('name')} > {label}: {bad_controls}"
                        )
                    if options and options[0] != "-- Select --":
                        errors.append(
                            f"Runtime dropdown has no placeholder first: {product} > {level.get('name')} > "
                            f"{symptom.get('name')} > {label}"
                        )
                    related = str(row.get("relatedGuide", "")).strip()
                    for name in [x.strip() for x in related.split("|") if x.strip()]:
                        if name.casefold() not in related_names:
                            errors.append(
                                f"Runtime unresolved related guide: {product} > {level.get('name')} > "
                                f"{symptom.get('name')} > {label}: {name}"
                            )

    return errors, warnings


def validate_reference_texts() -> list[str]:
    """Reference_Text is a generated human-readable mirror of the visible runtime structure."""
    errors: list[str] = []
    runtime = load_runtime()
    full_structure = full_model_structure(runtime["LEVELS"], runtime["MODEL_STRUCTURE_SOURCE"])
    for product, (filename, title) in REFERENCE_FILES.items():
        path = ROOT / "Reference_Text" / filename
        if not path.exists():
            errors.append(f"Missing reference structure file: Reference_Text/{filename}")
            continue
        expected = render_reference_text(product, title, full_structure[product]).replace("\r\n", "\n").strip()
        actual = path.read_text(encoding="utf-8", errors="replace").replace("\r\n", "\n").strip()
        if actual != expected:
            errors.append(
                f"Reference_Text/{filename} is out of sync with database.js. "
                "Run python generate_database.py to regenerate it."
            )
    return errors


def validate_javascript() -> list[str]:
    errors: list[str] = []
    for filename in JS_FILES:
        path = ROOT / filename
        proc = subprocess.run(["node", "--check", str(path)], capture_output=True, text=True)
        if proc.returncode:
            errors.append(f"JavaScript syntax error in {filename}: {proc.stderr.strip()}")
    return errors



def validate_smoke_test() -> list[str]:
    errors: list[str] = []
    script = ROOT / "smoke_test.js"
    if not script.exists():
        return ["Missing smoke_test.js"]
    proc = subprocess.run(["node", str(script)], capture_output=True, text=True)
    if proc.returncode:
        errors.append(f"Headless DOM smoke test failed: {(proc.stderr or proc.stdout).strip()}")
    return errors

def validate_versions() -> list[str]:
    warnings: list[str] = []
    expected = VERSION
    for relative in VERSION_FILES:
        path = ROOT / relative
        if not path.exists():
            warnings.append(f"Missing version-tracked file: {relative}")
            continue
        text = path.read_text(encoding="utf-8", errors="replace")
        versions = set(re.findall(r"(?<!\d)(?:v|Version\s+)?(\d+\.\d+\.\d+)", text, re.I))
        current_markers = {v for v in versions if v == expected}
        if not current_markers:
            warnings.append(f"{relative}: no {expected} version marker found")
    return warnings


def validate_guides() -> list[str]:
    errors: list[str] = []
    sheets = read_xlsx(XLSX)
    headings = set()
    guide_path = ROOT / "docs" / "TROUBLESHOOTING_GUIDE.md"
    for line in guide_path.read_text(encoding="utf-8").splitlines():
        if line.startswith("# "):
            headings.add(line[2:].strip().casefold())
    for row in sheets["Related_Guide_Master"][1:]:
        row = list(row) + [None] * (3 - len(row))
        key = str(row[0] or "").strip()
        display = str(row[1] or "").strip()
        if key and display and display.casefold() not in headings:
            errors.append(f"Related guide {key} points to missing heading: {display}")
    return errors


def main() -> None:
    if not XLSX.exists() or not OUTPUT.exists():
        raise SystemExit("PD_Guide_Database.xlsx and database.js are required.")

    sheets = read_xlsx(XLSX)
    errors, warnings = validate_workbook(sheets)
    errors.extend(validate_javascript())
    errors.extend(validate_guides())
    errors.extend(validate_smoke_test())
    errors.extend(validate_reference_texts())

    if not errors:
        runtime_errors, runtime_warnings = validate_runtime()
        errors.extend(runtime_errors)
        warnings.extend(runtime_warnings)
    warnings.extend(validate_versions())

    for warning in warnings:
        print(f"WARNING: {warning}")
    for error in errors:
        print(f"ERROR: {error}")

    if errors:
        print(f"FAILED: {len(errors)} error(s), {len(warnings)} warning(s).")
        raise SystemExit(1)
    print(f"PASS: master workbook and runtime validated for v{VERSION} ({len(warnings)} warning(s)).")


if __name__ == "__main__":
    main()
