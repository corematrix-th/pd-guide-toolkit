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
  "product", "search", "topClearBtn", "level1", "symptom", "currentSelection",
  "mainTitle", "checklist", "manualBox", "recTitle", "recommendation", "suggestion",
  "note", "generateBtn", "emailThBtn", "emailEnBtn", "clearBtn", "guideModal",
  "modalTitle", "modalBody", "modalCloseBtn"
];
ids.forEach(id => {
  const tag = id === "product" ? "select"
    : id === "search" ? "input"
    : id === "note" || id === "manualBox" ? "textarea"
    : id.endsWith("Btn") ? "button"
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
assert(!/Visitors\s*:|Views\s*:|Online\s*:/.test(indexHtml), "Website statistics text still exists in index.html");
assert(!/firebase|siteStats|visitorCount|viewCount|onlineCount/i.test(indexHtml), "Website statistics/Firebase code still exists in index.html");

const source = ["database.js", "data.js", "knowledge.js", "app.js"]
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
  .find(key => LEVELS[adapterLevel].symptoms[key].name === "Adapter");
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
  statsRemoved: true,
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
