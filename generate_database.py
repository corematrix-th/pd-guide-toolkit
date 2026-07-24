#!/usr/bin/env python3
"""Generate database.js from PD_Guide_Database.xlsx.

The workbook is the master source for product checklist rows. Existing Toolkit-owned
BIOS, Code and Troubleshooting Guide data are preserved from the current database.js
file used as the generation template.

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
VERSION = "5.1.7"
NS = {"m": "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
      "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
      "pr": "http://schemas.openxmlformats.org/package/2006/relationships"}
PRODUCT_SHEETS = {
    "Thinkpad": "thinkpad",
    "Ideapad": "ideapad",
    "Desktop": "desktop",
    "Tiny": "tiny",
    "AIO": "aio",
}


def col_index(ref: str) -> int:
    letters = re.match(r"[A-Z]+", ref).group(0)
    n = 0
    for ch in letters:
        n = n * 26 + ord(ch) - 64
    return n - 1


def read_xlsx(path: Path) -> dict[str, list[list[str | None]]]:
    with zipfile.ZipFile(path) as z:
        shared = []
        if "xl/sharedStrings.xml" in z.namelist():
            root = ET.fromstring(z.read("xl/sharedStrings.xml"))
            for si in root.findall("m:si", NS):
                shared.append("".join(t.text or "" for t in si.iterfind(".//m:t", NS)))

        wb = ET.fromstring(z.read("xl/workbook.xml"))
        rels = ET.fromstring(z.read("xl/_rels/workbook.xml.rels"))
        relmap = {r.attrib["Id"]: r.attrib["Target"] for r in rels}
        sheets = {}
        for s in wb.find("m:sheets", NS):
            name = s.attrib["name"]
            target = relmap[s.attrib[f"{{{NS['r']}}}id"]]
            target = target.lstrip("/")
            if not target.startswith("xl/"):
                target = "xl/" + target
            xml = ET.fromstring(z.read(target))
            rows = []
            max_col = 0
            for row in xml.findall(".//m:sheetData/m:row", NS):
                vals = {}
                for c in row.findall("m:c", NS):
                    idx = col_index(c.attrib["r"])
                    max_col = max(max_col, idx)
                    typ = c.attrib.get("t")
                    v = c.find("m:v", NS)
                    inline = c.find("m:is", NS)
                    value = None
                    if typ == "s" and v is not None:
                        value = shared[int(v.text)]
                    elif typ == "inlineStr" and inline is not None:
                        value = "".join(t.text or "" for t in inline.iterfind(".//m:t", NS))
                    elif v is not None:
                        value = v.text
                    vals[idx] = value
                if vals:
                    arr = [None] * (max(vals) + 1)
                    for i, value in vals.items():
                        arr[i] = value
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
    proc = subprocess.run(["node", "-e", helper, str(path)], check=True, capture_output=True, text=True)
    return json.loads(proc.stdout)


def norm(s) -> str:
    return str(s or "").strip().casefold()


def main() -> None:
    if not XLSX.exists() or not OUTPUT.exists():
        raise SystemExit("PD_Guide_Database.xlsx and database.js must be in the same folder as this script.")

    sheets = read_xlsx(XLSX)
    data = extract_template(OUTPUT)
    levels = data["LEVELS"]

    dropdown_rows = sheets["Dropdown_Master"]
    dropdowns = {}
    for row in dropdown_rows[1:]:
        if len(row) >= 3 and row[0]:
            dropdowns[str(row[0]).strip()] = [x.strip() for x in str(row[2] or "").split("|") if x.strip()]

    level_by_name = {norm(v.get("name")): k for k, v in levels.items()}
    symptom_by_level = {
        lk: {norm(sv.get("name")): sk for sk, sv in lv.get("symptoms", {}).items()}
        for lk, lv in levels.items()
    }

    model_source = {}
    for sheet_name, product in PRODUCT_SHEETS.items():
        rows = sheets[sheet_name]
        # Clear this product's generated question lists before rebuilding them.
        for lv in levels.values():
            for symptom in lv.get("symptoms", {}).values():
                if "questions" in symptom:
                    symptom["questions"].pop(product, None)

        ordered_levels = []
        ordered_symptoms = {}
        for row in rows[1:]:
            row = list(row) + [None] * (7 - len(row))
            level_name, symptom_name, checklist, ddid, email_th, email_en, related = row[:7]
            if not level_name or not symptom_name or not checklist:
                continue
            lk = level_by_name.get(norm(level_name))
            if not lk:
                raise ValueError(f"Unknown Level 1 in {sheet_name}: {level_name}")
            sk = symptom_by_level.get(lk, {}).get(norm(symptom_name))
            if not sk:
                raise ValueError(f"Unknown symptom in {sheet_name}: {level_name} > {symptom_name}")

            options = dropdowns.get(str(ddid or "").strip(), [])
            q = {
                "label": str(checklist).strip(),
                "optionsList": ["-- Select --"] + options,
                "text": "Text Input" in "|".join(options),
                "diag": False,
                "emailTH": str(email_th or "").strip(),
                "emailEN": str(email_en or "").strip(),
                "relatedGuide": str(related or "").strip(),
            }
            levels[lk]["symptoms"][sk].setdefault("questions", {}).setdefault(product, []).append(q)
            if lk not in ordered_levels:
                ordered_levels.append(lk)
                ordered_symptoms[lk] = []
            if sk not in ordered_symptoms[lk]:
                ordered_symptoms[lk].append(sk)

        model_source[product] = [
            {"levelName": levels[lk]["name"],
             "symptomNames": [levels[lk]["symptoms"][sk]["name"] for sk in ordered_symptoms[lk]]}
            for lk in ordered_levels
        ]

    js = (
        f"// AUTO-GENERATED from PD_Guide_Database.xlsx for v{VERSION}. Edit Excel first, then regenerate this file.\n"
        "const LEVELS = " + json.dumps(levels, ensure_ascii=False, indent=2) + ";\n\n"
        "const MODEL_STRUCTURE_SOURCE = " + json.dumps(model_source, ensure_ascii=False, indent=2) + ";\n\n"
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
    print(f"Generated {OUTPUT.name} from {XLSX.name} for v{VERSION}")


if __name__ == "__main__":
    main()
