#!/usr/bin/env python3
"""Generate database.js from PD_Guide_Database.xlsx.

PD_Guide_Database.xlsx is the master source for product-facing data. Toolkit-owned
BIOS, Code, Troubleshooting Guide and decision logic remain in JavaScript.

Requirements: Python 3 and Node.js. No third-party Python packages are required.
"""
from __future__ import annotations

import json
import re
import subprocess
import sys
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET

ROOT = Path(__file__).resolve().parent
XLSX = ROOT / "PD_Guide_Database.xlsx"
OUTPUT = ROOT / "database.js"
VERSION = "5.2.4"
NS = {
    "m": "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
    "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
}
PRODUCT_SHEETS = {
    "Thinkpad": "thinkpad",
    "Ideapad": "ideapad",
    "Desktop": "desktop",
    "Tiny": "tiny",
    "AIO": "aio",
}
REQUIRED_SHEETS = set(PRODUCT_SHEETS) | {"Dropdown_Master", "Related_Guide_Master", "README"}
PRODUCT_HEADERS = [
    "LEVEL 1",
    "SYMPTOM / GUIDE",
    "CHECKLIST",
    "Dropdown ID",
    "Email TH",
    "Email EN",
    "Related Guide Key",
]
CONTROL_TOKENS = {"blank", "text input"}
NO_PHYSICAL_DAMAGE_LEVELS = {"windows", "battery", "network", "storage", "audio", "camera"}
EXTERNAL_FRU_SHEETS = {"Desktop", "Tiny", "AIO"}
EXTERNAL_FRU_LEVELS = {"monitor", "adapter", "keyboard", "mouse"}
REFERENCE_FILES = {
    "thinkpad": ("ThinkPad.txt", "ThinkPad"),
    "ideapad": ("IdeaPad.txt", "IdeaPad"),
    "desktop": ("ThinkCentre Desktop.txt", "ThinkCentre Desktop"),
    "tiny": ("ThinkCentre Tiny.txt", "ThinkCentre Tiny"),
    "aio": ("AIO.txt", "IdeaCentre AIO"),
}
REFERENCE_SCOPE_NOTES = {
    "thinkpad": "Notebook master. IdeaPad follows this structure unless hardware behavior differs.",
    "ideapad": "Notebook-family variant. Keep only genuine IdeaPad-specific hardware differences.",
    "desktop": "Desktop-family master. Keep desktop-specific hardware differences only where present in the Master Database.",
    "tiny": "Desktop-family variant. Keep Tiny/TIO-specific hardware differences only where present in the Master Database.",
    "aio": "Desktop-family AIO variant. Keep integrated-display/camera differences only where present in the Master Database.",
}


def col_index(ref: str) -> int:
    match = re.match(r"[A-Z]+", ref)
    if not match:
        raise ValueError(f"Invalid cell reference: {ref}")
    n = 0
    for ch in match.group(0):
        n = n * 26 + ord(ch) - 64
    return n - 1


def read_xlsx(path: Path) -> dict[str, list[list[str | None]]]:
    """Read raw cell values from an XLSX using only the standard library."""
    with zipfile.ZipFile(path) as z:
        shared: list[str] = []
        if "xl/sharedStrings.xml" in z.namelist():
            root = ET.fromstring(z.read("xl/sharedStrings.xml"))
            for si in root.findall("m:si", NS):
                shared.append("".join(t.text or "" for t in si.iterfind(".//m:t", NS)))

        workbook = ET.fromstring(z.read("xl/workbook.xml"))
        rels = ET.fromstring(z.read("xl/_rels/workbook.xml.rels"))
        relmap = {r.attrib["Id"]: r.attrib["Target"] for r in rels}
        sheets: dict[str, list[list[str | None]]] = {}

        sheet_root = workbook.find("m:sheets", NS)
        if sheet_root is None:
            return sheets

        for sheet in sheet_root:
            name = sheet.attrib["name"]
            target = relmap[sheet.attrib[f"{{{NS['r']}}}id"]].lstrip("/")
            if not target.startswith("xl/"):
                target = "xl/" + target
            xml = ET.fromstring(z.read(target))
            rows: list[list[str | None]] = []
            for row in xml.findall(".//m:sheetData/m:row", NS):
                values: dict[int, str | None] = {}
                for cell in row.findall("m:c", NS):
                    idx = col_index(cell.attrib["r"])
                    cell_type = cell.attrib.get("t")
                    value_node = cell.find("m:v", NS)
                    inline = cell.find("m:is", NS)
                    value: str | None = None
                    if cell_type == "s" and value_node is not None:
                        value = shared[int(value_node.text or "0")]
                    elif cell_type == "inlineStr" and inline is not None:
                        value = "".join(t.text or "" for t in inline.iterfind(".//m:t", NS))
                    elif value_node is not None:
                        value = value_node.text
                    values[idx] = value
                if values:
                    arr: list[str | None] = [None] * (max(values) + 1)
                    for idx, value in values.items():
                        arr[idx] = value
                    rows.append(arr)
            sheets[name] = rows
        return sheets


def extract_template(path: Path) -> dict:
    helper = r'''
const fs=require('fs'),vm=require('vm');
const p=process.argv[1];
const src=fs.readFileSync(p,'utf8')+'\n;globalThis.__OUT={LEVELS,MODEL_STRUCTURE_SOURCE};';
const ctx={}; vm.createContext(ctx); vm.runInContext(src,ctx);
process.stdout.write(JSON.stringify(ctx.__OUT));
'''
    proc = subprocess.run(
        ["node", "-e", helper, str(path)],
        check=True,
        capture_output=True,
        text=True,
    )
    return json.loads(proc.stdout)


def norm(value: object) -> str:
    return str(value or "").strip().casefold()


def clean(value: object) -> str:
    return str(value or "").strip()


def split_pipe(value: object) -> list[str]:
    return [part.strip() for part in str(value or "").split("|") if part.strip()]


def slugify(value: str) -> str:
    text = value.strip().casefold().replace("&", " and ")
    text = re.sub(r"[^a-z0-9]+", "_", text).strip("_")
    return text or "item"


def unique_key(base: str, existing: set[str]) -> str:
    key = base
    suffix = 2
    while key in existing:
        key = f"{base}_{suffix}"
        suffix += 1
    return key


def parse_dropdown_definition(raw: object) -> dict[str, object]:
    """Convert Dropdown_Master syntax into UI choices and text-input behavior.

    Text Input                -> textbox only
    Blank | Text Input        -> placeholder-only dropdown + textbox
    No|Yes                    -> dropdown only
    No|Yes | Text Input       -> dropdown + textbox
    ""                        -> no dropdown and no textbox
    """
    text = clean(raw)
    if not text:
        return {"choices": [], "text": False, "placeholder": False}

    separator = "|" if "|" in text else ","
    tokens = [part.strip() for part in text.split(separator) if part.strip()]
    lowered = [norm(token) for token in tokens]
    has_text = "text input" in lowered
    has_blank = "blank" in lowered
    choices: list[str] = []
    seen: set[str] = set()
    for token in tokens:
        token_norm = norm(token)
        if token_norm in CONTROL_TOKENS or token_norm in seen:
            continue
        seen.add(token_norm)
        choices.append(token)
    return {"choices": choices, "text": has_text, "placeholder": has_blank}


def build_dropdowns(sheets: dict[str, list[list[str | None]]]) -> dict[str, dict[str, object]]:
    dropdowns: dict[str, dict[str, object]] = {}
    for row in sheets["Dropdown_Master"][1:]:
        row = list(row) + [None] * (3 - len(row))
        dropdown_id, _name, options = row[:3]
        dropdown_id = clean(dropdown_id)
        if not dropdown_id:
            continue
        dropdowns[dropdown_id] = parse_dropdown_definition(options)
    return dropdowns


def build_related_guides(sheets: dict[str, list[list[str | None]]]) -> dict[str, str]:
    related: dict[str, str] = {}
    for row in sheets["Related_Guide_Master"][1:]:
        row = list(row) + [None] * (3 - len(row))
        key, display_name, _source = row[:3]
        key = clean(key)
        display_name = clean(display_name)
        if key:
            related[key] = display_name
    return related


def validate_workbook(sheets: dict[str, list[list[str | None]]]) -> tuple[list[str], list[str]]:
    errors: list[str] = []
    warnings: list[str] = []

    missing = sorted(REQUIRED_SHEETS - set(sheets))
    if missing:
        errors.append("Missing required sheet(s): " + ", ".join(missing))
        return errors, warnings

    dropdown_rows = sheets["Dropdown_Master"]
    dropdowns: dict[str, dict[str, object]] = {}
    dropdown_ids: set[str] = set()
    for excel_row, row in enumerate(dropdown_rows[1:], start=2):
        row = list(row) + [None] * (3 - len(row))
        dropdown_id, name, options = map(clean, row[:3])
        if not any((dropdown_id, name, options)):
            continue
        if not dropdown_id:
            errors.append(f"Dropdown_Master row {excel_row}: missing Dropdown ID")
            continue
        if dropdown_id in dropdown_ids:
            errors.append(f"Dropdown_Master row {excel_row}: duplicate Dropdown ID {dropdown_id}")
        dropdown_ids.add(dropdown_id)
        if not options:
            errors.append(f"Dropdown_Master row {excel_row}: {dropdown_id} has no Options value")
        spec = parse_dropdown_definition(options)
        dropdowns[dropdown_id] = spec
        if not spec["choices"] and not spec["text"] and not spec["placeholder"]:
            errors.append(f"Dropdown_Master row {excel_row}: {dropdown_id} has no usable dropdown/text behavior")

    related_rows = sheets["Related_Guide_Master"]
    related: dict[str, str] = {}
    related_ids: set[str] = set()
    related_names: set[str] = set()
    for excel_row, row in enumerate(related_rows[1:], start=2):
        row = list(row) + [None] * (3 - len(row))
        key, display_name, source = map(clean, row[:3])
        if not any((key, display_name, source)):
            continue
        if not key or not display_name:
            errors.append(f"Related_Guide_Master row {excel_row}: key and display name are required")
            continue
        if key in related_ids:
            errors.append(f"Related_Guide_Master row {excel_row}: duplicate key {key}")
        if norm(display_name) in related_names:
            errors.append(f"Related_Guide_Master row {excel_row}: duplicate display name {display_name}")
        related_ids.add(key)
        related_names.add(norm(display_name))
        related[key] = display_name
        if source and source != "TROUBLESHOOTING_GUIDE.md":
            warnings.append(f"Related_Guide_Master row {excel_row}: unexpected source file {source}")

    for sheet_name in PRODUCT_SHEETS:
        rows = sheets[sheet_name]
        if not rows:
            errors.append(f"{sheet_name}: sheet is empty")
            continue
        header = [clean(value) for value in (list(rows[0]) + [None] * 7)[:7]]
        if header != PRODUCT_HEADERS:
            errors.append(f"{sheet_name}: header mismatch. Expected {PRODUCT_HEADERS!r}, got {header!r}")

        seen_rows: dict[tuple[str, str, str], int] = {}
        grouped_rows: dict[tuple[str, str], list[tuple[int, str]]] = {}
        for excel_row, row in enumerate(rows[1:], start=2):
            row = list(row) + [None] * (7 - len(row))
            level_name, symptom_name, checklist, dropdown_id, email_th, email_en, related_cell = map(clean, row[:7])
            if not any((level_name, symptom_name, checklist, dropdown_id, email_th, email_en, related_cell)):
                continue
            if not level_name or not symptom_name or not checklist:
                errors.append(
                    f"{sheet_name} row {excel_row}: LEVEL 1, SYMPTOM / GUIDE and CHECKLIST are required"
                )
                continue
            if dropdown_id and dropdown_id not in dropdowns:
                errors.append(f"{sheet_name} row {excel_row}: unknown Dropdown ID {dropdown_id}")
            if not email_th:
                warnings.append(f"{sheet_name} row {excel_row}: Email TH is blank")
            if not email_en:
                warnings.append(f"{sheet_name} row {excel_row}: Email EN is blank")
            if re.match(r"^\s*(?:ข้อ\s*)?\d+\s*[.\)\-:]", email_th, re.I):
                warnings.append(f"{sheet_name} row {excel_row}: Email TH starts with a manual item number")
            if re.match(r"^\s*\d+\s*[.\)\-:]", email_en):
                warnings.append(f"{sheet_name} row {excel_row}: Email EN starts with a manual item number")

            duplicate_key = (norm(level_name), norm(symptom_name), norm(checklist))
            if duplicate_key in seen_rows:
                errors.append(
                    f"{sheet_name} row {excel_row}: duplicate checklist '{checklist}' "
                    f"for {level_name} > {symptom_name}; first found at row {seen_rows[duplicate_key]}"
                )
            else:
                seen_rows[duplicate_key] = excel_row

            level_norm = norm(level_name)
            checklist_norm = norm(checklist)
            grouped_rows.setdefault((level_name, symptom_name), []).append((excel_row, checklist))
            if level_norm in NO_PHYSICAL_DAMAGE_LEVELS and checklist_norm == "physical damage":
                errors.append(
                    f"{sheet_name} row {excel_row}: Physical Damage is not allowed in {level_name} checklists"
                )
            if level_norm == "monitor" and checklist_norm == "other issue":
                errors.append(
                    f"{sheet_name} row {excel_row}: Other Issue is not allowed in Monitor checklists"
                )
            if checklist_norm in {"swap ssd", "swap ram", "swap ssd / hdd", "swap psu"}:
                errors.append(
                    f"{sheet_name} row {excel_row}: {checklist} is no longer allowed in customer-facing checklists"
                )
            if level_norm == "adapter" and norm(symptom_name) in {"adapter", "power cord"}:
                errors.append(
                    f"{sheet_name} row {excel_row}: Adapter symptom must use 'Adapter Not Work' or 'Power Cord Not Work'"
                )

            for related_key in split_pipe(related_cell):
                if related_key not in related:
                    errors.append(f"{sheet_name} row {excel_row}: unknown Related Guide Key {related_key}")

        for (level_name, symptom_name), checklist_rows in grouped_rows.items():
            labels = [norm(label) for _row_number, label in checklist_rows]
            fru_positions = [index for index, label in enumerate(labels) if label == "fru p/n"]

            if fru_positions and fru_positions[-1] != len(labels) - 1:
                errors.append(
                    f"{sheet_name}: {level_name} > {symptom_name} FRU P/N must be the final checklist item"
                )

            if sheet_name in EXTERNAL_FRU_SHEETS and norm(level_name) in EXTERNAL_FRU_LEVELS:
                if len(fru_positions) != 1:
                    errors.append(
                        f"{sheet_name}: {level_name} > {symptom_name} must contain exactly one FRU P/N row"
                    )

    readme_rows = sheets.get("README", [])
    readme_text = "\n".join(clean(cell) for row in readme_rows for cell in row if clean(cell))
    versions = re.findall(r"v\d+\.\d+\.\d+", readme_text, re.I)
    stale = sorted({v for v in versions if v.casefold() != f"v{VERSION}".casefold()})
    if stale:
        warnings.append("README sheet contains stale version reference(s): " + ", ".join(stale))

    return errors, warnings


def ensure_level_and_symptom(levels: dict, level_name: str, symptom_name: str) -> tuple[str, str]:
    level_by_name = {norm(value.get("name")): key for key, value in levels.items()}
    level_key = level_by_name.get(norm(level_name))
    if level_key is None:
        level_key = unique_key(slugify(level_name), set(levels))
        levels[level_key] = {"name": level_name, "symptoms": {}}
    else:
        levels[level_key]["name"] = level_name
        levels[level_key].setdefault("symptoms", {})

    symptoms = levels[level_key]["symptoms"]
    symptom_by_name = {norm(value.get("name")): key for key, value in symptoms.items()}
    symptom_key = symptom_by_name.get(norm(symptom_name))
    if symptom_key is None:
        symptom_key = unique_key(slugify(symptom_name), set(symptoms))
        symptoms[symptom_key] = {"name": symptom_name, "questions": {}}
    else:
        symptoms[symptom_key]["name"] = symptom_name
        symptoms[symptom_key].setdefault("questions", {})
    return level_key, symptom_key


def full_model_structure(levels: dict, model_source: dict[str, list[dict[str, object]]]) -> dict[str, list[dict[str, object]]]:
    """Return the same visible model hierarchy that the browser receives at runtime."""
    output = json.loads(json.dumps(model_source, ensure_ascii=False))
    for product, rows in output.items():
        existing = {norm(row.get("levelName")) for row in rows}
        for level_key in ("bios", "error", "manual"):
            level = levels.get(level_key)
            if not level or norm(level.get("name")) in existing:
                continue
            rows.append({
                "levelName": clean(level.get("name")),
                "symptomNames": [clean(item.get("name")) for item in level.get("symptoms", {}).values()],
            })
    return output


def render_reference_text(product: str, title: str, rows: list[dict[str, object]]) -> str:
    lines = [
        f"GLOBAL MAPPING SOURCE (v{VERSION})",
        "- Generated from PD_Guide_Database.xlsx and Toolkit-owned knowledge structure.",
        "- Do not edit the hierarchy in this file manually; run generate_database.py instead.",
        "- After changing Excel or Toolkit-owned knowledge, run generate_database.py and validate_database.py in the same release.",
        "",
        "---",
        "",
        title,
        "",
    ]
    for row in rows:
        level_name = clean(row.get("levelName"))
        symptoms = [clean(value) for value in row.get("symptomNames", []) if clean(value)]
        if not level_name:
            continue
        lines.append(level_name)
        for index, symptom in enumerate(symptoms):
            branch = "└──" if index == len(symptoms) - 1 else "├──"
            lines.append(f"{branch} {symptom}")
        lines.append("")
    lines.extend([
        "=== GENERATED STRUCTURE SOURCE ===",
        "PD_Guide_Database.xlsx is the source of truth for product-facing structure and checklist data.",
        "Toolkit-owned BIOS, Code, Troubleshooting Guide content, Generate Note, and Dispatch logic remain in JavaScript/Markdown.",
        f"Structure version: v{VERSION}",
        "",
        f"[v{VERSION} MODEL SCOPE NOTE]",
        REFERENCE_SCOPE_NOTES[product],
        "",
    ])
    return "\n".join(lines)


def write_reference_texts(levels: dict, model_source: dict[str, list[dict[str, object]]]) -> int:
    reference_dir = ROOT / "Reference_Text"
    reference_dir.mkdir(exist_ok=True)
    full_structure = full_model_structure(levels, model_source)
    written = 0
    for product, (filename, title) in REFERENCE_FILES.items():
        path = reference_dir / filename
        path.write_text(render_reference_text(product, title, full_structure[product]), encoding="utf-8")
        written += 1
    return written


def generate() -> dict[str, int]:
    if not XLSX.exists() or not OUTPUT.exists():
        raise SystemExit("PD_Guide_Database.xlsx and database.js must be in the same folder as this script.")

    sheets = read_xlsx(XLSX)
    errors, warnings = validate_workbook(sheets)
    for warning in warnings:
        print(f"WARNING: {warning}", file=sys.stderr)
    if errors:
        for error in errors:
            print(f"ERROR: {error}", file=sys.stderr)
        raise SystemExit(f"Validation failed with {len(errors)} error(s). database.js was not changed.")

    data = extract_template(OUTPUT)
    levels = data["LEVELS"]
    dropdowns = build_dropdowns(sheets)
    related_guides = build_related_guides(sheets)

    # Remove all generated product question lists before rebuilding from Excel.
    for level in levels.values():
        for symptom in level.get("symptoms", {}).values():
            questions = symptom.get("questions")
            if isinstance(questions, dict):
                for product in PRODUCT_SHEETS.values():
                    questions.pop(product, None)

    model_source: dict[str, list[dict[str, object]]] = {}
    question_count = 0
    for sheet_name, product in PRODUCT_SHEETS.items():
        ordered_levels: list[str] = []
        ordered_symptoms: dict[str, list[str]] = {}

        for row in sheets[sheet_name][1:]:
            row = list(row) + [None] * (7 - len(row))
            level_name, symptom_name, checklist, dropdown_id, email_th, email_en, related_cell = map(clean, row[:7])
            if not level_name or not symptom_name or not checklist:
                continue

            level_key, symptom_key = ensure_level_and_symptom(levels, level_name, symptom_name)
            if level_key not in ordered_levels:
                ordered_levels.append(level_key)
                ordered_symptoms[level_key] = []
            if symptom_key not in ordered_symptoms[level_key]:
                ordered_symptoms[level_key].append(symptom_key)

            if dropdown_id:
                spec = dropdowns[dropdown_id]
                choices = list(spec["choices"])
                if choices:
                    options_list = ["-- Select --", *choices]
                elif spec["placeholder"]:
                    options_list = ["-- Select --"]
                else:
                    options_list = []
                has_text = bool(spec["text"])
            else:
                options_list = []
                has_text = False

            related_names = [related_guides[key] for key in split_pipe(related_cell)]
            question = {
                "label": checklist,
                "optionsList": options_list,
                "text": has_text,
                "diag": False,
                "emailTH": email_th,
                "emailEN": email_en,
                "relatedGuide": " | ".join(related_names),
            }
            levels[level_key]["symptoms"][symptom_key].setdefault("questions", {}).setdefault(product, []).append(question)
            question_count += 1

        model_source[product] = [
            {
                "levelName": levels[level_key]["name"],
                "symptomNames": [
                    levels[level_key]["symptoms"][symptom_key]["name"]
                    for symptom_key in ordered_symptoms[level_key]
                ],
            }
            for level_key in ordered_levels
        ]

    metadata = {
        "version": VERSION,
        "source": XLSX.name,
        "productSheets": len(PRODUCT_SHEETS),
        "checklistRows": question_count,
        "dropdowns": len(dropdowns),
        "relatedGuides": len(related_guides),
    }

    js = (
        f"// AUTO-GENERATED from PD_Guide_Database.xlsx for v{VERSION}. Edit Excel first, then regenerate this file.\n"
        "const DATABASE_META = " + json.dumps(metadata, ensure_ascii=False, separators=(",", ":")) + ";\n\n"
        "const LEVELS = " + json.dumps(levels, ensure_ascii=False, separators=(",", ":")) + ";\n\n"
        "const RELATED_GUIDE_MASTER = " + json.dumps(related_guides, ensure_ascii=False, separators=(",", ":")) + ";\n\n"
        "const MODEL_STRUCTURE_SOURCE = " + json.dumps(model_source, ensure_ascii=False, separators=(",", ":")) + ";\n\n"
        "const MODEL_STRUCTURE = Object.fromEntries(\n"
        "  Object.entries(MODEL_STRUCTURE_SOURCE).map(([product, levelRows]) => [\n"
        "    product,\n"
        "    levelRows.map(levelRow => {\n"
        "      const level = Object.keys(LEVELS).find(key => String(LEVELS[key].name || '').trim().toLowerCase() === String(levelRow.levelName || '').trim().toLowerCase());\n"
        "      if(!level) return null;\n"
        "      const symptoms = levelRow.symptomNames.map(symptomName => Object.keys(LEVELS[level].symptoms || {}).find(key => String(LEVELS[level].symptoms[key].name || '').trim().toLowerCase() === String(symptomName || '').trim().toLowerCase())).filter(Boolean);\n"
        "      return { level, symptoms };\n"
        "    }).filter(Boolean)\n"
        "  ])\n"
        ");\n\n"
        f"// v{VERSION}: Restore Toolkit-owned Level 1 entries for every product.\n"
        "// BIOS, Code, and Troubleshooting Guide remain Toolkit logic/data and are not controlled by Excel model rows.\n"
        "Object.keys(MODEL_STRUCTURE).forEach(product => {\n"
        "  [\"bios\", \"error\", \"manual\"].forEach(levelKey => {\n"
        "    if(!LEVELS[levelKey]) return;\n"
        "    if(MODEL_STRUCTURE[product].some(item => item.level === levelKey)) return;\n"
        "    MODEL_STRUCTURE[product].push({ level: levelKey, symptoms: Object.keys(LEVELS[levelKey].symptoms || {}) });\n"
        "  });\n"
        "});\n"
    )
    OUTPUT.write_text(js, encoding="utf-8")
    reference_count = write_reference_texts(levels, model_source)
    return {
        "questions": question_count,
        "dropdowns": len(dropdowns),
        "related_guides": len(related_guides),
        "reference_files": reference_count,
    }


def main() -> None:
    stats = generate()
    print(
        f"Generated {OUTPUT.name} from {XLSX.name} for v{VERSION} "
        f"({stats['questions']} checklist rows, {stats['dropdowns']} dropdowns, "
        f"{stats['related_guides']} related guides, {stats['reference_files']} reference files)."
    )


if __name__ == "__main__":
    main()
