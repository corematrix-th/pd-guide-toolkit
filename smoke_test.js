#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

class FakeClassList {
  constructor(element){
    this.element = element;
    this.values = new Set();
  }
  add(...names){ names.forEach(name => this.values.add(name)); }
  remove(...names){ names.forEach(name => this.values.delete(name)); }
  contains(name){ return this.values.has(name); }
}

class FakeElement {
  constructor(tagName, document){
    this.tagName = String(tagName || "div").toUpperCase();
    this.ownerDocument = document;
    this.children = [];
    this.parentNode = null;
    this.className = "";
    this.classList = new FakeClassList(this);
    this.textContent = "";
    this._innerHTML = "";
    this._value = "";
    this.placeholder = "";
    this.selectedIndex = 0;
    this.listeners = {};
    this.onclick = null;
    this.style = {};
    this._id = "";
  }
  set id(value){
    this._id = String(value || "");
    if(this._id) this.ownerDocument.registry.set(this._id, this);
  }
  get id(){ return this._id; }
  set innerHTML(value){
    this._innerHTML = String(value || "");
    this.children = [];
  }
  get innerHTML(){ return this._innerHTML; }
  set value(value){
    const next = String(value ?? "");
    if(this.tagName === "SELECT"){
      const index = this.options.findIndex(option => option.value === next);
      if(index >= 0) this.selectedIndex = index;
    }
    this._value = next;
  }
  get value(){
    if(this.tagName === "SELECT"){
      const selected = this.options[this.selectedIndex] || this.options[0];
      return selected ? selected.value : this._value;
    }
    return this._value;
  }
  get options(){
    return this.children.filter(child => child.tagName === "OPTION");
  }
  appendChild(child){
    child.parentNode = this;
    this.children.push(child);
    return child;
  }
  remove(){
    if(!this.parentNode) return;
    this.parentNode.children = this.parentNode.children.filter(child => child !== this);
    this.parentNode = null;
  }
  addEventListener(type, callback){
    (this.listeners[type] ||= []).push(callback);
  }
  dispatchEvent(type){
    (this.listeners[type] || []).forEach(callback => callback({target:this}));
  }
  select(){}
  focus(){}
}

class FakeDocument {
  constructor(){
    this.registry = new Map();
    this.listeners = {};
  }
  createElement(tagName){ return new FakeElement(tagName, this); }
  getElementById(id){ return this.registry.get(id) || null; }
  addEventListener(type, callback){
    (this.listeners[type] ||= []).push(callback);
  }
  fire(type){
    (this.listeners[type] || []).forEach(callback => callback());
  }
}

function assert(condition, message){
  if(!condition) throw new Error(message);
}

function descendants(root){
  const out = [];
  const walk = node => {
    for(const child of node.children || []){
      out.push(child);
      walk(child);
    }
  };
  walk(root);
  return out;
}

const document = new FakeDocument();
const ids = [
  "product", "search", "searchClearBtn", "topClearBtn", "level1", "symptom", "currentSelection",
  "mainTitle", "checklistProgressText", "checklistProgress", "checklistProgressBar", "checklist", "manualBox",
  "recTitle", "recommendation", "suggestion", "note", "generateBtn", "emailThBtn", "emailEnBtn",
  "clearBtn", "guideModal", "modalTitle", "modalBody", "modalCloseBtn",
  "tabTroubleshooting", "tabCode", "tabUserGuide", "tabLaborMapping", "globalSearchPanel",
  "mainControlbar", "laborMappingView", "laborSearch", "laborSearchClearBtn", "laborResultSummary", "laborResults",
  "troubleshootingView", "referenceView", "referenceCategoryColumn", "referenceCategories", "referenceItemsColumn", "referenceListTitle",
  "referenceItems", "referenceCurrentSelection", "referenceDetailHeading", "referenceDetailTitle", "referenceDetailBody",
  "referenceInfoTitle", "referenceMeta", "referenceInfoHint"
];
ids.forEach(id => {
  const tag = id === "product" ? "select"
    : id === "search" || id === "laborSearch" ? "input"
    : id === "note" || id === "manualBox" ? "textarea"
    : id.endsWith("Btn") || id.startsWith("tab") ? "button"
    : "div";
  const element = document.createElement(tag);
  element.id = id;
});

const product = document.getElementById("product");
[
  ["thinkpad", "ThinkPad"],
  ["ideapad", "IdeaPad"],
  ["desktop", "Desktop"],
  ["tiny", "Tiny"],
  ["aio", "AIO"]
].forEach(([value, label]) => {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = label;
  product.appendChild(option);
});
product.selectedIndex = 0;

document.getElementById("search").value = "";
document.getElementById("note").value = "";

const context = {
  console,
  document,
  descendants,
  assert,
  window: { addEventListener(){} },
  alert(){},
  setTimeout,
  clearTimeout,
};
vm.createContext(context);

const root = __dirname;
const indexHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
assert(/Visitors\s*:.*visitorCount.*Views\s*:.*viewCount.*Online\s*:.*onlineCount/s.test(indexHtml), "Website statistics are missing from index.html");
assert(/PD_FIREBASE_CONFIG/.test(indexHtml), "Firebase site-statistics configuration is missing");
assert(/siteStats\/global/.test(indexHtml), "Global site-statistics path is missing");
assert(/\.info\/connected/.test(indexHtml), "Firebase presence connection monitor is missing");
assert(/browserPresenceRef/.test(indexHtml), "Firebase presence is not scoped to a persistent browser/profile ID");
assert(/onlineUsers\/\$\{visitorUuid\}/.test(indexHtml), "Firebase presence path is not grouped by visitorUuid");
assert(/push\(browserPresenceRef\)/.test(indexHtml), "Firebase tab sessions are not nested under the browser/profile presence node");
assert(/onDisconnect\(nextPresenceRef\)\.remove\(\)/.test(indexHtml), "Firebase presence cleanup is not registered before session write");
assert(/PD_SITE_STATS_STATUS/.test(indexHtml), "Background site-statistics status object is missing");
assert(/Initialization attempt/.test(indexHtml), "Site-statistics retry/error reporting is missing");
assert(/id="onlineDot" class="online-dot"/.test(indexHtml), "Realtime Online status dot is missing");
assert(/id="searchClearBtn"/.test(indexHtml), "Search clear button is missing");
assert(/id="checklistProgressText"/.test(indexHtml) && /id="checklistProgressBar"/.test(indexHtml), "Checklist progress UI is missing");
assert(/class="action-primary"/.test(indexHtml), "Generate Note primary action styling is missing");
assert((indexHtml.match(/class="action-secondary"/g) || []).length === 2, "Email secondary action styling is missing");
assert(/id="clearBtn" class="action-clear"/.test(indexHtml), "Clear outline action styling is missing");
assert((indexHtml.match(/<svg viewBox="0 0 24 24"/g) || []).length >= 5, "Action/search icons are missing");
assert(/id="tabTroubleshooting"/.test(indexHtml) && /id="tabCode"/.test(indexHtml) && /id="tabUserGuide"/.test(indexHtml) && /id="tabLaborMapping"/.test(indexHtml), "v5.2.5 module navigation is missing");
assert(/id="tabTroubleshooting"[\s\S]*?<span class="module-label">SYMPTOMS<\/span>[\s\S]*?<\/button>/.test(indexHtml) && /id="tabCode"[\s\S]*?<span class="module-label">ERROR POST<\/span>[\s\S]*?<\/button>/.test(indexHtml) && /id="tabUserGuide"[\s\S]*?<span class="module-label">GUIDE<\/span>[\s\S]*?<\/button>/.test(indexHtml) && /id="tabLaborMapping"[\s\S]*?<span class="module-label">LABOR MAPPING<\/span>[\s\S]*?<\/button>/.test(indexHtml), "v5.2.5 module labels must be SYMPTOMS / ERROR POST / GUIDE / LABOR MAPPING");
assert(/id="globalSearchPanel"/.test(indexHtml), "Global Search panel is missing");
assert(/id="laborMappingView"/.test(indexHtml) && /id="laborSearch"/.test(indexHtml) && /id="laborResults"/.test(indexHtml), "Labor Mapping view/search is missing");
assert(/labor_mapping\.js/.test(indexHtml), "Labor Mapping runtime script is missing");
assert(/id="referenceCategoryColumn"/.test(indexHtml) && /id="referenceCategories"/.test(indexHtml) && /id="referenceItemsColumn"/.test(indexHtml) && /id="referenceItems"/.test(indexHtml) && /id="referenceDetailBody"/.test(indexHtml), "Code/User Guide reference layout is missing");
assert(/id="referenceInfoTitle"/.test(indexHtml), "Reference info/related heading is missing");
assert(/Version 5\.2\.5/.test(indexHtml), "Visible version is not v5.2.5");

const styleCss = fs.readFileSync(path.join(root, "style.css"), "utf8");
assert(/\.module-tab\{[\s\S]*?min-height:26px;[\s\S]*?font-size:10px;/.test(styleCss), "Module navigation should stay compact");
assert(/\.module-tab\{[\s\S]*?font-weight:700;/.test(styleCss), "Module labels should retain clear bold text");
assert(/class="module-icon"/.test(indexHtml) && /\.module-icon\{/.test(styleCss), "Module navigation icons are missing");
assert(!/!important/.test(styleCss), "style.css still contains !important overrides");
assert(!/V4\.5|V4\.6/.test(styleCss), "Legacy V4.x CSS override blocks remain");
assert(/--radius:8px/.test(styleCss), "Card radius token is missing");
assert(/\.item\.active[\s\S]*box-shadow:inset 3px 0 0/.test(styleCss), "Selected item emphasis is missing");
assert(/\.check-row:focus-within/.test(styleCss), "Checklist selected/focus state is missing");
assert(/transition:background var\(--transition\)/.test(styleCss), "Hover/click transition feedback is missing");
assert(/\.module-nav\{/.test(styleCss) && /\.module-tab\.active/.test(styleCss), "Module navigation styling is missing");
assert(/\.module-tab\{[\s\S]*?background:#f2f3f3;[\s\S]*?color:#4b5358;/.test(styleCss), "Inactive module navigation should use the light neutral button style");
assert(/\.module-tab\.active,[\s\S]*?background:#6f9eaf;[\s\S]*?color:#fff;/.test(styleCss), "Active module navigation should use the selected blue-gray style");
assert(/\.module-icon\{display:none\}/.test(styleCss), "Minimal module navigation should hide decorative icons");
assert(/\.reference-tree,\.reference-main\{/.test(styleCss) && /reference-tree/.test(indexHtml) && /reference-main/.test(indexHtml), "Locked Code/User Guide layout styling is missing");
assert(/\.reference-view\.code-mode \.reference-tree,[\s\S]*?\.reference-view\.guide-mode \.reference-tree\{grid-template-columns:1fr\}/.test(styleCss), "Code/User Guide direct-list locked layout styling is missing");
assert(/\.global-search-panel\{/.test(styleCss), "Global Search styling is missing");
assert(/\.labor-mapping-view\{/.test(styleCss) && /\.labor-compare-table\{/.test(styleCss), "Labor Mapping table styling is missing");
assert(/\.labor-compare-table tbody td\{color:#37424d;font-size:11px\}/.test(styleCss), "Labor Mapping result font should be slightly larger");
assert(/\.labor-postal-table thead th:nth-child\(1\)/.test(styleCss) && /\.labor-province-table thead th:nth-child\(4\)/.test(styleCss), "Labor Mapping transposed/province table layouts are missing");
assert(/#mainTitle\{font-size:10px;letter-spacing:\.25px\}/.test(styleCss), "Troubleshooting heading does not match Level 1 / Symptom scale");
assert(/#note\{height:270px;min-height:240px;max-height:270px;resize:none\}/.test(styleCss), "Result / Email detail height should stay compact");

const source = ["database.js", "data.js", "knowledge.js", "labor_mapping.js", "app.js"]
  .map(filename => fs.readFileSync(path.join(root, filename), "utf8"))
  .join("\n\n");

const tests = `
document.fire("DOMContentLoaded");

const defaultRows = descendants(document.getElementById("checklist"));
const visibleControlTokens = defaultRows
  .filter(node => node.tagName === "OPTION")
  .map(node => node.textContent)
  .filter(value => value === "Blank" || value === "Text Input");
assert(visibleControlTokens.length === 0, "Internal dropdown control token is visible in the default UI");
assert(document.getElementById("level1").children.length > 0, "No Level 1 entries rendered");
assert(document.getElementById("symptom").children.length > 0, "No Symptom entries rendered");
assert(document.getElementById("checklistProgressText").textContent === "Checklist 0 / 9 completed", "Initial checklist progress is incorrect");
const firstChecklistSelect = document.getElementById("a0");
assert(firstChecklistSelect && firstChecklistSelect.options.length > 1, "Progress regression target has no selectable answer");
firstChecklistSelect.selectedIndex = 1;
firstChecklistSelect.dispatchEvent("change");
assert(document.getElementById("checklistProgressText").textContent === "Checklist 1 / 9 completed", "Checklist progress did not update after an answer");
assert(document.getElementById("checkRow0").classList.contains("is-complete"), "Completed checklist row is not marked");

const defaultLevelNames = document.getElementById("level1").children.map(node => node.textContent);
assert(!defaultLevelNames.includes("Code"), "Code must not remain as a Troubleshooting Level 1 entry");
assert(!defaultLevelNames.includes("Troubleshooting Guide"), "Troubleshooting Guide must not remain as a Troubleshooting Level 1 entry");
assert(!defaultLevelNames.includes("BIOS"), "BIOS must not remain as a SYMPTOMS Level 1 entry because BIOS Password / Supervisor Password are available under ERROR POST");

document.getElementById("search").value = "__definitely_no_match__";
filterSymptoms();
const noMatchPanel = document.getElementById("globalSearchPanel");
assert(descendants(noMatchPanel).some(node => node.textContent === "No matching results"), "Global Search empty state did not render");

document.getElementById("search").value = "2100";
filterSymptoms();
const searchNodes = descendants(document.getElementById("globalSearchPanel"));
assert(searchNodes.some(node => node.textContent === "POST"), "Global Search did not return an Error Post result");
assert(searchNodes.some(node => node.textContent === "2100 Detection Error on Storage Device"), "Global Search did not find Code 2100");

document.getElementById("search").value = "";
renderAll();

switchModule("code");
assert(document.getElementById("tabCode").className.includes("active"), "Error Post module tab did not activate");
assert(document.getElementById("referenceListTitle").textContent === "ERROR POST", "Error Post list title is incorrect");
assert(document.getElementById("referenceCategoryColumn").classList.contains("hidden"), "Code module must hide Category and show the direct code list");
assert(document.getElementById("referenceCategories").children.length === 0, "Code module should not render Category choices");
const code2100 = document.getElementById("referenceItems").children.find(node => node.textContent === "2100 Detection Error on Storage Device");
assert(code2100, "Code 2100 is missing from the direct Error Post list");
const biosPasswordPost = document.getElementById("referenceItems").children.find(node => node.textContent === "BIOS Password");
const supervisorPasswordPost = document.getElementById("referenceItems").children.find(node => node.textContent === "Supervisor Password");
assert(biosPasswordPost && supervisorPasswordPost, "BIOS Password and Supervisor Password must be available in ERROR POST");
const errorPostNames = document.getElementById("referenceItems").children.map(node => node.textContent);
const biosPasswordIndex = errorPostNames.indexOf("BIOS Password");
const supervisorPasswordIndex = errorPostNames.indexOf("Supervisor Password");
const bootDeviceMissingIndex = errorPostNames.indexOf("Boot Device Missing");
assert(
  biosPasswordIndex >= 0 && supervisorPasswordIndex === biosPasswordIndex + 1 && bootDeviceMissingIndex === supervisorPasswordIndex + 1,
  "ERROR POST order must place BIOS Password / Supervisor Password immediately before Boot Device Missing"
);
code2100.onclick();
assert(document.getElementById("referenceDetailHeading").textContent === "ERROR POST DETAIL", "Error Post detail heading is incorrect");
assert(document.getElementById("referenceInfoTitle").textContent === "RELATED", "Code lower-right panel must be RELATED");
assert(document.getElementById("referenceCurrentSelection").textContent === "ERROR POST → 2100 Detection Error on Storage Device", "Error Post current selection is incorrect");
assert(document.getElementById("referenceDetailTitle").textContent === "2100 Detection Error on Storage Device", "Code detail did not open");
assert(descendants(document.getElementById("referenceDetailBody")).some(node => node.textContent === "DESCRIPTION"), "Code detail Description section is missing");

switchModule("guide");
assert(document.getElementById("tabUserGuide").className.includes("active"), "User Guide module tab did not activate");
assert(document.getElementById("referenceListTitle").textContent === "USER GUIDE", "User Guide list title is incorrect");
assert(document.getElementById("referenceCategoryColumn").classList.contains("hidden"), "User Guide module must hide Category and show the direct guide list");
assert(document.getElementById("referenceCategories").children.length === 0, "User Guide module should not render Category choices");
const guideNames = document.getElementById("referenceItems").children.map(node => node.textContent);
const runtimeGuideNames = Object.keys(KNOWLEDGE_BASE["Troubleshooting Guide"] || {});
assert(guideNames.length === runtimeGuideNames.length, "User Guide direct list does not contain every guide");
runtimeGuideNames.forEach(name => assert(guideNames.includes(name), "User Guide direct list is missing " + name));
assert(guideNames.includes("Sfc /Scannow"), "Sfc /Scannow is missing from the direct User Guide list");
assert(guideNames.includes("Lenovo Vantage Update"), "Lenovo Vantage Update is missing from the direct User Guide list");
assert(guideNames.includes("Fn & Ctrl Key Swap"), "Fn & Ctrl Key Swap is missing from the direct User Guide list");
assert(guideNames.includes("Lock on Leave Function"), "Lock on Leave Function is missing from the direct User Guide list");
assert(guideNames.includes("Disable Audio Enhancements"), "Merged Disable Audio Enhancements guide is missing");
assert(!KNOWLEDGE_BASE["Troubleshooting Guide"]["Disable Audio Enhancements (External Microphone)"], "Duplicate External Microphone guide must be removed");
const batteryReportGuide = document.getElementById("referenceItems").children.find(node => node.textContent === "Battery Report");
assert(batteryReportGuide, "Battery Report is missing from direct User Guide list");
batteryReportGuide.onclick();
assert(document.getElementById("referenceCurrentSelection").textContent === "GUIDE → Battery Report", "User Guide current selection is incorrect");
assert(document.getElementById("referenceDetailTitle").textContent === "Battery Report", "User Guide detail did not open");
assert(descendants(document.getElementById("referenceDetailBody")).some(node => String(node.textContent || "").includes("powercfg /batteryreport")), "Battery Report guide content is missing");

document.getElementById("search").value = "battery report";
filterSymptoms();
assert(descendants(document.getElementById("globalSearchPanel")).some(node => node.textContent === "GUIDE"), "Global Search did not return User Guide results");

// Labor Mapping is intentionally excluded from Search All.
document.getElementById("search").value = "6002389662";
filterSymptoms();
assert(!descendants(document.getElementById("globalSearchPanel")).some(node => String(node.textContent || "").includes("Centercom Ltd")), "Search All must not return Labor Mapping data");
document.getElementById("search").value = "";

switchModule("labor");
assert(document.getElementById("tabLaborMapping").className.includes("active"), "Labor Mapping module tab did not activate");
assert(document.getElementById("mainControlbar").classList.contains("hidden"), "Search All/Product controlbar must be hidden in Labor Mapping");
assert(!document.getElementById("laborMappingView").classList.contains("hidden"), "Labor Mapping view did not open");
assert(LABOR_MAPPING_META.version === "5.2.5", "Labor Mapping runtime version is not v5.2.5");
assert(LABOR_MAPPING_META.rows === 119 && LABOR_MAPPING.length === 119, "Labor Mapping row count is incorrect");
document.getElementById("laborSearch").value = "20000";
renderLaborMapping();
const laborNodes = descendants(document.getElementById("laborResults"));
assert(laborNodes.some(node => node.textContent === "Chon Buri"), "Postal Code 20000 did not find Chon Buri");
assert(laborNodes.some(node => node.textContent === "6002351052"), "Standard / PCARE Labor Vendor ID is incorrect for 20000");
assert(laborNodes.some(node => node.textContent === "IT Advance Service Co Ltd"), "Standard / PCARE vendor is incorrect for 20000");
assert(laborNodes.some(node => node.textContent === "6002389662"), "Premier Support Labor Vendor ID is incorrect for 20000");
assert(laborNodes.some(node => node.textContent === "Centercom Ltd"), "Premier Support vendor is incorrect for 20000");
const laborTexts = laborNodes.map(node => node.textContent);
assert(laborTexts.includes("Support Type") && laborTexts.includes("Labor Vendor ID") && laborTexts.includes("Premier Vendor"), "Postal Code Labor Mapping table headers are incorrect");
assert(laborTexts.includes("Standard / PCARE") && laborTexts.includes("Premier Support"), "Support types must be rendered as table rows");
// 10100-10999 exists twice in the source (Bangkok and Samut Prakan), but both
// rows have identical Standard/PCARE and Premier mappings. The UI should show
// only one result without altering the 119-row source dataset.
document.getElementById("laborSearch").value = "10800";
renderLaborMapping();
assert(document.getElementById("laborResults").children.length === 1, "Postal Code 10800 should collapse identical duplicate Labor Mapping results");
const bangkokDuplicateNodes = descendants(document.getElementById("laborResults"));
assert(bangkokDuplicateNodes.some(node => node.textContent === "Krung Thep Maha Nakh"), "Postal Code 10800 should retain the first matching source row for display");
assert(!bangkokDuplicateNodes.some(node => node.textContent === "Samut Prakan"), "Postal Code 10800 should not display an identical duplicate mapping twice");
document.getElementById("laborSearch").value = "Surat Thani";
renderLaborMapping();
assert(document.getElementById("laborResults").children.length === 1, "Province search should render one consolidated table per Province");
const suratNodes = descendants(document.getElementById("laborResults"));
assert(suratNodes.filter(node => node.textContent === "Standard / PCARE").length === 7, "Surat Thani must retain all 7 Standard / PCARE source ranges");
assert(suratNodes.filter(node => node.textContent === "Premier Support").length === 7, "Surat Thani must retain all 7 Premier Support source ranges");
assert(suratNodes.some(node => node.textContent === "84000 – 84130") && suratNodes.some(node => node.textContent === "84140"), "Surat Thani source Postal Code ranges must remain unmerged");
document.getElementById("laborSearch").value = "84140";
renderLaborMapping();
const samuiNodes = descendants(document.getElementById("laborResults"));
assert(samuiNodes.some(node => node.textContent === "vServePlus Koh Samui"), "Postal Code 84140 must retain Koh Samui Standard mapping");
assert(samuiNodes.some(node => node.textContent === "Centercom-Samui"), "Postal Code 84140 must retain Samui Premier mapping");
clearLaborSearch();
switchModule("troubleshooting");

const thinkpadStructure = MODEL_STRUCTURE.thinkpad;
let relatedTarget = null;
for(const row of thinkpadStructure){
  for(const symptomKey of row.symptoms){
    const questions = (LEVELS[row.level].symptoms[symptomKey].questions || {}).thinkpad || [];
    if(questions.some(question => question.relatedGuide)){
      relatedTarget = {level: row.level, symptom: symptomKey};
      break;
    }
  }
  if(relatedTarget) break;
}
assert(relatedTarget, "No ThinkPad Related Guide test target found");
selectedLevel = relatedTarget.level;
selectedSymptom = relatedTarget.symptom;
renderAll();
const relatedBox = document.getElementById("relatedGuideInline");
assert(relatedBox && descendants(relatedBox).some(node => node.className === "guide-chip"), "Related Guide chip did not render");

const adapterLevel = Object.keys(LEVELS).find(key => LEVELS[key].name === "Adapter");
const adapterSymptom = Object.keys(LEVELS[adapterLevel].symptoms)
  .find(key => LEVELS[adapterLevel].symptoms[key].name === "Adapter Not Work");
selectedLevel = adapterLevel;
selectedSymptom = adapterSymptom;
renderAll();
const checklistRows = document.getElementById("checklist").children.filter(node => node.className === "check-row");
const fruRow = checklistRows.find(row => row.children[0] && row.children[0].textContent === "FRU P/N");
assert(fruRow, "FRU P/N row did not render");
const fruSelect = fruRow.children.find(node => node.tagName === "SELECT");
const fruInput = fruRow.children.find(node => node.tagName === "INPUT");
assert(fruSelect && fruSelect.options.length === 1 && fruSelect.options[0].textContent === "-- Select --", "FRU P/N dropdown is not placeholder-only");
assert(fruInput, "FRU P/N text input did not render");

el("product").value = "desktop";
const keyboardLevel = Object.keys(LEVELS).find(key => LEVELS[key].name === "Keyboard");
const keyboardSymptom = Object.keys(LEVELS[keyboardLevel].symptoms)
  .find(key => LEVELS[keyboardLevel].symptoms[key].name === "USB Keyboard Not Detect");
selectedLevel = keyboardLevel;
selectedSymptom = keyboardSymptom;
renderAll();
const keyboardRows = document.getElementById("checklist").children.filter(node => node.className === "check-row");
const keyboardLabels = keyboardRows.map(row => row.children[0] && row.children[0].textContent);
const keyboardFruIndex = keyboardLabels.indexOf("FRU P/N");
assert(keyboardFruIndex >= 0, "Desktop USB Keyboard checklist has no FRU P/N row");
assert(keyboardFruIndex === keyboardLabels.length - 1, "Desktop USB Keyboard FRU P/N is not the final checklist item");

assert(formatNoteLine("FRU P/N", "01fr208") === "- FRU P/N - 01FR208", "FRU P/N detail is not uppercased in Generate Note");
assert(formatNoteLine("Specific Keys Listed", "a,b,c") === "- Specific Keys Listed - A,B,C", "Specific Keys Listed detail is not uppercased in Generate Note");
assert(formatNoteLine("Specific keys listed", "x,y,z") === "- Specific Keys Listed - X,Y,Z", "Specific Keys Listed case variant is not normalized");

const diagnostics = collectDiagnostics();
assert(diagnostics.status === "PASS", "Runtime diagnostics did not pass: " + diagnostics.errors.join(" | "));
assert(diagnostics.meta.version === "5.2.5", "Diagnostics/database version is not v5.2.5");
assert(diagnostics.laborRows === 119, "Diagnostics Labor Mapping row count is incorrect");
assert(diagnostics.checklistRows === 2285, "Diagnostics checklist-row count is incorrect");
const backgroundDiagnostics = runBackgroundDiagnostics();
assert(backgroundDiagnostics.status === "PASS", "Background diagnostics did not pass");
assert(!document.getElementById("diagBtn"), "Diagnostics button must not be present in the user UI");

// v5.2.5 data hygiene: SSD/RAM swap checks were removed from all customer-facing checklists.
for(const [product, rows] of Object.entries(MODEL_STRUCTURE)){
  for(const row of rows){
    for(const symptomKey of row.symptoms || []){
      const questions = (((LEVELS[row.level] || {}).symptoms || {})[symptomKey] || {}).questions || {};
      const labels = (questions[product] || []).map(item => String(item.label || "").trim().toLowerCase());
      assert(!labels.includes("swap ssd"), product + ": Swap SSD must not appear in customer-facing checklists");
      assert(!labels.includes("swap ram"), product + ": Swap RAM must not appear in customer-facing checklists");
      assert(!labels.includes("swap ssd / hdd"), product + ": Swap SSD / HDD must not appear in customer-facing checklists");
      assert(!labels.includes("swap psu"), product + ": Swap PSU must not appear in customer-facing checklists");
    }
  }
}
for(const product of Object.keys(MODEL_STRUCTURE)){
  const adapterRow = MODEL_STRUCTURE[product].find(item => item.level === adapterLevel);
  if(!adapterRow) continue;
  const names = adapterRow.symptoms.map(key => LEVELS[adapterLevel].symptoms[key].name);
  assert(!names.includes("Adapter"), product + ": legacy Adapter symptom name must not be visible");
  assert(!names.includes("Power Cord"), product + ": legacy Power Cord symptom name must not be visible");
}

el("product").value = "thinkpad";
selectedLevel = "boot";
selectedSymptom = "no_power";
let dispatchCase = smartBootRule([{q:"Adapter test on other machine", a:"Same Issue"}]);
assert(dispatchCase && dispatchCase.result === "Dispatch" && dispatchCase.part === "Adapter", "No Power adapter cross-test dispatch regression");
dispatchCase = smartBootRule([{q:"Swap Adapter", a:"Working"}]);
assert(dispatchCase && dispatchCase.result === "Dispatch" && dispatchCase.part === "Adapter", "No Power known-good adapter dispatch regression");

selectedSymptom = "pond";
dispatchCase = smartBootRule([
  {q:"Power LED", a:"Yes"},
  {q:"Caps Lock Toggle", a:"No"},
  {q:"External Monitor test", a:"Same Issue"}
]);
assert(dispatchCase && dispatchCase.result === "Dispatch" && dispatchCase.part === "Mainboard", "Power On No Display mainboard dispatch regression");

el("product").value = "thinkpad";
selectedLevel = "boot";
selectedSymptom = "no_power";
renderAll();
const noPowerQuestions = getQuestions();
const swapAdapterIndex = noPowerQuestions.findIndex(row => row.label === "Swap Adapter");
const adapterTestIndex = noPowerQuestions.findIndex(row => row.label === "Adapter Test on Other Machine");
assert(swapAdapterIndex >= 0, "Generate Note regression target Swap Adapter not found");
assert(adapterTestIndex >= 0, "Boot > No Power Adapter Test on Other Machine not found");
assert(swapAdapterIndex === adapterTestIndex - 1, "Boot > No Power Swap Adapter must be immediately before Adapter Test on Other Machine");
el("a" + swapAdapterIndex).value = "Working";
generateNote();
assert(!document.getElementById("note").value.includes("Conclusion:"), "Generate Note must not include Conclusion");

el("product").value = "thinkpad";

selectedLevel = "boot";
selectedSymptom = "no_power";
renderAll();
const noPowerRows = document.getElementById("checklist").children.filter(node => node.className === "check-row");
const otherIssueRow = noPowerRows.find(row => row.children[0] && row.children[0].textContent === "Other Issue");
assert(otherIssueRow, "Other Issue row did not render");
const otherSelect = otherIssueRow.children.find(node => node.tagName === "SELECT");
const otherInput = otherIssueRow.children.find(node => node.tagName === "INPUT");
assert(JSON.stringify(otherSelect.options.map(option => option.textContent)) === JSON.stringify(["-- Select --", "No", "Yes"]), "Other Issue dropdown choices are incorrect");
assert(otherInput, "Other Issue text input did not render");

sendEmailEN();
const email = document.getElementById("note").value;
assert(email.includes("Dear Customer,"), "Email EN header was not generated");
assert(email.includes("1. Check whether the Power LED is on."), "Email EN checklist numbering or content is incorrect");

let badRuntimeOptions = 0;
for(const level of Object.values(LEVELS)){
  for(const symptom of Object.values(level.symptoms || {})){
    for(const questions of Object.values(symptom.questions || {})){
      if(!Array.isArray(questions)) continue;
      for(const question of questions){
        badRuntimeOptions += (question.optionsList || []).filter(value => value === "Blank" || value === "Text Input").length;
      }
    }
  }
}
assert(badRuntimeOptions === 0, "Generated runtime contains visible dropdown control tokens");

const noPhysicalLevels = new Set(["windows", "battery", "network", "storage", "audio", "camera"]);
const externalFruProducts = new Set(["desktop", "tiny", "aio"]);
const externalFruLevels = new Set(["monitor", "adapter", "keyboard", "mouse"]);
for(const [productKey, structureRows] of Object.entries(MODEL_STRUCTURE)){
  for(const structureRow of structureRows){
    const level = LEVELS[structureRow.level];
    const levelName = String(level.name || "").trim().toLowerCase();
    for(const symptomKey of structureRow.symptoms){
      const symptom = level.symptoms[symptomKey];
      const questions = (symptom.questions || {})[productKey];
      if(!Array.isArray(questions)) continue;
      const labels = questions.map(question => String(question.label || "").trim().toLowerCase());
      if(noPhysicalLevels.has(levelName)){
        assert(!labels.includes("physical damage"), productKey + " > " + level.name + " > " + symptom.name + " still contains Physical Damage");
      }
      if(levelName === "monitor"){
        assert(!labels.includes("other issue"), productKey + " > Monitor > " + symptom.name + " still contains Other Issue");
      }
      const fruIndexes = labels.map((label, index) => label === "fru p/n" ? index : -1).filter(index => index >= 0);
      if(fruIndexes.length){
        assert(fruIndexes[fruIndexes.length - 1] === labels.length - 1, productKey + " > " + level.name + " > " + symptom.name + " FRU P/N is not last");
      }
      if(externalFruProducts.has(productKey) && externalFruLevels.has(levelName)){
        assert(fruIndexes.length === 1, productKey + " > " + level.name + " > " + symptom.name + " must contain one FRU P/N");
      }
    }
  }
}

console.log(JSON.stringify({
  status: "PASS",
  level1Count: document.getElementById("level1").children.length,
  defaultChecklistRows: noPowerRows.length,
  relatedGuideRendered: true,
  fruPlaceholderOnly: true,
  desktopKeyboardFruLast: true,
  uppercaseDetailOutput: true,
  diagnosticsPass: true,
  dispatchRegression: true,
  generateNoteRegression: true,
  statsRestored: true,
  uiPolishRegression: true,
  moduleNavigation: true,
  globalSearch: true,
  codeLibrary: true,
  userGuideLibrary: true,
  laborMapping: true,
  checklistProgress: true,
  searchEmptyState: true,
  cssCleanup: true,
  checklistScopeRules: true,
  otherIssueOptions: otherSelect.options.map(option => option.textContent),
  emailGenerated: true
}));
`;

try {
  vm.runInContext(source + "\n" + tests, context, {filename: "pd-guide-smoke-test.vm.js"});
} catch (error) {
  console.error(`SMOKE TEST FAILED: ${error.stack || error.message}`);
  process.exit(1);
}
