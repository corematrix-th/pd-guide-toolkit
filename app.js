
function gaTrack(eventName, params = {}){
  if(typeof gtag !== "function") return;
  gtag("event", eventName, params);
}

function getLevelName(){
  return LEVELS[selectedLevel] ? LEVELS[selectedLevel].name : selectedLevel;
}

function getSymptomName(){
  return current() ? current().name : selectedSymptom;
}

function getProductModelGroupForMapping(){
  const key = (typeof getProductKey === "function") ? getProductKey() : "thinkpad";
  if(key === "ideapad") return "ideapad";
  return "f10";
}

function getModelSpecificDiagnosticsText(label, lang){
  const normalized = String(label || "").trim();
  const diagLabels = new Set([
    "Run Lenovo Diagnostics",
    "Lenovo Diagnostics",
    "Lenovo Diagnostics Storage",
    "Lenovo Diagnostics Battery"
  ]);
  if(!diagLabels.has(normalized)) return "";

  const modelGroup = getProductModelGroupForMapping();
  const isStorage = normalized === "Lenovo Diagnostics Storage";
  const isBattery = normalized === "Lenovo Diagnostics Battery";

  if(lang === "en"){
    const prefix = isStorage
      ? "Run Lenovo Diagnostics to check storage."
      : (isBattery ? "Run Lenovo Diagnostics to check the battery." : "Run Lenovo Diagnostics.");
    const steps = modelGroup === "ideapad"
      ? "Press the Novo Button → select UEFI Diagnostics → Run All → Quick, then check whether the result is Pass or Failed."
      : "Press F10 repeatedly while turning on the machine → select Run All → Quick → Quick Unattended, then check whether the result is Pass or Failed.";
    return prefix + "\n" + steps;
  }

  const prefix = isStorage
    ? "ทดสอบ Run Lenovo Diagnostics เพื่อตรวจสอบ Storage"
    : (isBattery ? "ทดสอบ Run Lenovo Diagnostics เพื่อตรวจสอบ Battery" : "ทดสอบ Run Diagnostics");
  const steps = modelGroup === "ideapad"
    ? "กด Novo Button → เลือก UEFI Diagnostics → Run All → Quick จากนั้นตรวจสอบว่า Pass หรือ Failed"
    : "กด F10 รัว ๆ ขณะเปิดเครื่อง → เลือก Run All → Quick → Quick Unattended จากนั้นตรวจสอบว่า Pass หรือ Failed";
  return prefix + "\n" + steps;
}

function getModelSpecificDiagnosticsGuideText(){
  const modelGroup = getProductModelGroupForMapping();
  if(modelGroup === "ideapad"){
    return "Lenovo Diagnostics\n\nทดสอบ Run Diagnostics\n\n1. กด Novo Button\n2. เลือก UEFI Diagnostics\n3. เลือก Run All\n4. เลือก Quick\n5. รอจนการทดสอบเสร็จสิ้น\n6. ตรวจสอบว่าผลการทดสอบเป็น Pass หรือ Failed";
  }
  return "Lenovo Diagnostics\n\nทดสอบ Run Diagnostics\n\n1. เปิดเครื่องและกด F10 รัว ๆ\n2. เลือก Run All\n3. เลือก Quick\n4. เลือก Quick Unattended\n5. รอจนการทดสอบเสร็จสิ้น\n6. ตรวจสอบว่าผลการทดสอบเป็น Pass หรือ Failed";
}

function getGuideTextForCurrentModel(guide){
  if(!guide) return "";
  return guide.guide || "";
}

function getChecklistMappingText(label, lang){
  const modelSpecific = getModelSpecificDiagnosticsText(label, lang);
  if(modelSpecific) return modelSpecific;
  if(typeof GLOBAL_CHECKLIST_MAPPING === "undefined") return "";
  const canonical = {
    "LED beside charging port":"Charge LED",
    "LED beside Type-C port":"Charge LED",
    "LED beside port":"Charge LED",
    "LED on power button":"Power LED",
    "Can Access Windows":"Can access Windows",
    "Check Task Manager usage":"Check Task Manager Usage",
    "Check Temperature":"Check temperature / Overheat",
    "Re-install Windows":"Re-install Windows",
    "Re-install Windows":"Re-install Windows",
    "Lenovo Vantage update":"Lenovo Vantage Update",
    "BIOS update":"BIOS Update",
    "Dump File collected":"Event Viewer / Dump file collected",
    "Dump file collected":"Event Viewer / Dump file collected",
    "Minidump collected":"Event Viewer / Dump file collected",
    "Stop code / Error code":"Stop code / Error code collected",
    "Fan Check":"Fan Check",
    "Caps Lock LED works":"Caps Lock Toggle",
    "Run Lenovo Diagnostics":"Run Lenovo Diagnostics",
    "Lenovo Diagnostics":"Run Lenovo Diagnostics",
    "Load BIOS default":"Load BIOS Default",
    "Graphics Driver Update":"Graphics Driver Update",
    "Update Graphics Driver":"Graphics Driver Update",
    "Wi-Fi Driver Update":"WLAN Driver Update",
    "Wifi Driver Update":"WLAN Driver Update",
    "WIFI Driver Update":"WLAN Driver Update",
    "WLAN Driver Update":"WLAN Driver Update",
    "Camera Driver Update / Lenovo Vantage":"Camera Driver Update",
    "Fingerprint Driver Update / Lenovo Vantage":"Fingerprint Driver Update",
    "USB Driver Update / Lenovo Vantage":"USB Driver Update"
  };
  const key = GLOBAL_CHECKLIST_MAPPING[label] ? label : (canonical[label] || label);
  const item = GLOBAL_CHECKLIST_MAPPING[key];
  if(!item) return "";

  // v5.0.0: External Monitor test uses Mapping as the single source of truth,
  // but the Thai/English wording must be selected by symptom context.
  // No Display / No Image / Black Screen asks whether an image appears.
  // Display-quality symptoms ask whether the same issue appears on the external monitor.
  if(key === "External Monitor test"){
    const noDisplayKeys = new Set(["black", "black_login", "no_display", "no_image", "blank", "no_signal"]);
    const symptomKey = String(typeof selectedSymptom !== "undefined" ? selectedSymptom : "").toLowerCase();
    const symptomName = String((typeof current === "function" && current() && current().name) ? current().name : "").toLowerCase();
    const isNoDisplay = noDisplayKeys.has(symptomKey) || /no display|no image|black screen|blank screen/.test(symptomName);
    if(lang === "th") return isNoDisplay ? (item.th_no_display || item.th || "") : (item.th_display_issue || item.th || "");
    if(lang === "en") return isNoDisplay ? (item.en_no_display || item.en || item.th_no_display || "") : (item.en_display_issue || item.en || item.th_display_issue || "");
  }

  if(lang === "th") return item.th || "";
  if(lang === "en") return item.en || item.th || "";
  return item.th || "";
}


function getProductKey(){
  const productEl = el("product");
  return productEl ? productEl.value : "thinkpad";
}

function ensureSelectionAvailable(){
  const visibleLevels = getVisibleLevelKeys();
  if(!visibleLevels.includes(selectedLevel)){
    selectedLevel = visibleLevels[0];
  }
  const visibleSymptoms = getVisibleSymptomKeys(selectedLevel);
  if(!visibleSymptoms.includes(selectedSymptom)){
    selectedSymptom = visibleSymptoms[0];
  }
}

let selectedLevel = "boot";
let selectedSymptom = "no_power";

function el(id){ return document.getElementById(id); }
function forceConclusionRed(){
  const r = el("recommendation");
  if(!r) return;
  r.className = "recommendation recommendation-dispatch";
}

function current(){ return LEVELS[selectedLevel].symptoms[selectedSymptom]; }
function isManual(){ return LEVELS[selectedLevel].manual === true; }
function isKnowledgeLevel(){ return selectedLevel === "bios" || selectedLevel === "error" || selectedLevel === "manual"; }
function getKnowledgeText(){
  const section = selectedLevel === "bios" ? "BIOS" : selectedLevel === "error" ? "Code" : "Troubleshooting Guide";
  const item = (typeof KNOWLEDGE_BASE !== "undefined" && KNOWLEDGE_BASE[section]) ? KNOWLEDGE_BASE[section][current().name] : null;
  if(!item) return "No information available.";
  if(section === "Troubleshooting Guide") return item.content || "";
  const causes = Array.isArray(item.possibleCause) ? item.possibleCause.map(x => `• ${x}`).join("\n") : (item.possibleCause || "");
  const actions = Array.isArray(item.recommendedAction) ? item.recommendedAction.map(x => `• ${x}`).join("\n") : (item.recommendedAction || "");
  return `Description\n${item.description || ""}\n\nPossible Cause\n${causes}\n\nRecommended Action\n${actions}`;
}

function withDisplayQuestions(sym){
  if(!sym.display) return sym;
  const common = [
    {label:"Check BIOS", options:"swap"},
    {label:"Move LCD lid", options:"select"},
    {label:"External Monitor test", options:"swap"},
    {label:"Graphics Driver Update", options:"select"},
    {label:"Physical damage / Liquid spilled", options:"yesno"},
    {label:"Other issue", options:"yesno", text:true}
  ];
  return {...sym, common};
}

function isFruPnAllowed(){
  // FRU P/N is requested only for optional external accessories when appropriate.
  const product = getProductKey();
  if(selectedLevel === "adapter_power") return true; // Adapter / Power Cord
  if(selectedLevel === "mouse") return true; // External Mouse
  if(selectedLevel === "keyboard" && (product === "desktop" || product === "tiny" || product === "aio")) return true; // External Keyboard
  const part = (current().defaultPart || "").toLowerCase();
  return part.includes("external mouse") || part.includes("external keyboard") || part.includes("adapter") || part.includes("power cord");
}


// v5.0.0 Final Normalization: canonical checklist labels + runtime de-duplication
// Excel-only data rule (v5.1.9)
// LEVEL 1, SYMPTOM / GUIDE, CHECKLIST, Drop Down, Email TH, Email EN,
// and Related Guide are rendered directly from database.js, which is generated
// from PD_Guide_Database.xlsx. No checklist-name normalization, insertion,
// removal, reordering, or fallback mapping is allowed here.

// v4.8.7 Software / Driver / BIOS Update mapping
function getOptions(code){
  return APP_OPTIONS[code] || APP_OPTIONS.select;
}

function renderLevel1(){
  const box = el("level1");
  box.innerHTML = "";
  getVisibleLevelKeys().forEach(key => {
    const div = document.createElement("div");
    div.className = "item" + (key === selectedLevel ? " active" : "");
    div.textContent = LEVELS[key].name;
    div.onclick = () => {
      selectedLevel = key;
      selectedSymptom = getVisibleSymptomKeys(key)[0];
      gaTrack("level1_selected", {
        level1: LEVELS[key].name
      });
      gaTrack("symptom_selected", {
        level1: LEVELS[key].name,
        symptom: LEVELS[key].symptoms[selectedSymptom].name
      });
      renderAll();
    };
    box.appendChild(div);
  });
}

function renderSymptoms(){
  const box = el("symptom");
  box.innerHTML = "";
  getVisibleSymptomKeys(selectedLevel).forEach(key => {
    const div = document.createElement("div");
    div.className = "item" + (key === selectedSymptom ? " active" : "");
    div.textContent = LEVELS[selectedLevel].symptoms[key].name;
    div.onclick = () => {
      selectedSymptom = key;
      gaTrack("symptom_selected", {
        level1: getLevelName(),
        symptom: getSymptomName()
      });
      renderSymptoms();
      renderMain();
    };
    box.appendChild(div);
  });
}

function updateCurrentSelection(){
  const product = el("product").options[el("product").selectedIndex].text;
  const text = isManual() ? current().name : `${product} → ${LEVELS[selectedLevel].name} → ${current().name}`;
  el("currentSelection").innerHTML = `<b>Current Selection:</b> ${text}`;
}


function getManualGuide(key){
  const manuals = LEVELS.manual && LEVELS.manual.symptoms ? LEVELS.manual.symptoms : {};
  return manuals[key] || null;
}

function openGuideModal(key){
  const guide = getManualGuide(key);
  if(!guide) return;
  gaTrack("related_guide_open", {
    guide: guide.name,
    level1: getLevelName(),
    symptom: getSymptomName()
  });
  el("modalTitle").textContent = guide.name;
  el("modalBody").textContent = getGuideTextForCurrentModel(guide);
  el("guideModal").classList.remove("hidden");
}

function closeGuideModal(){
  el("guideModal").classList.add("hidden");
}

function renderRelatedGuide(){
  const rightBox = el("rightRelatedGuide") || el("relatedGuide");
  if(rightBox){
    rightBox.innerHTML = "";
    rightBox.classList.add("hidden");
  }

  const old = document.getElementById("relatedGuideInline");
  if(old) old.remove();

  if(isManual()) return;

  const keys = getRelatedGuideKeys();
  const valid = keys.map(key => [key, getManualGuide(key)]).filter(x => x[1]);
  if(!valid.length) return;

  const wrapper = document.createElement("div");
  wrapper.id = "relatedGuideInline";
  wrapper.className = "related-guide-inline";

  const title = document.createElement("div");
  title.className = "section-title related-title";
  title.textContent = "RELATED GUIDE";
  wrapper.appendChild(title);

  const box = document.createElement("div");
  box.className = "related-guide";
  valid.forEach(([key, guide]) => {
    const chip = document.createElement("span");
    chip.className = "guide-chip";
    chip.textContent = shortGuideName(guide.name);
    chip.onclick = () => openGuideModal(key);
    box.appendChild(chip);
  });
  wrapper.appendChild(box);

  const checklist = el("checklist");
  if(checklist) checklist.appendChild(wrapper);
}

function shortGuideName(name){
  return name
    .replace("Lenovo Vantage Update","Vantage")
    .replace("Lenovo Diagnostics","Diagnostics")
    .replace("Microsoft Office Activation","Office Activation")
    .replace("Re-install Windows","Re-install Windows")
    .replace("Bypass Windows 11 OOBE","Windows 11 Bypass");
}

function shouldShowAdditionalDetail(){
  return !isManual() && selectedLevel !== "error";
}

function getAdditionalDetail(){
  const box = el("additionalDetail");
  return box ? box.value.trim() : "";
}

function renderErrorDescription(){
  const checklist = el("checklist");
  const sym = current();
  if((selectedLevel === "error" || selectedLevel === "bios") && sym.description){
    const div = document.createElement("div");
    div.className = "error-description";
    div.textContent = "Description : " + sym.description;
    checklist.appendChild(div);
  }
}


function renderMain(){
  updateCurrentSelection();
  el("note").value = "";
  const checklist = el("checklist");
  const manualBox = el("manualBox");

  if(isKnowledgeLevel()){
    el("mainTitle").textContent = isKnowledgeLevel() ? "INFORMATION" : "TROUBLESHOOTING CHECKLIST";
    el("recTitle").textContent = "INFORMATION";
    el("recommendation").innerHTML = current().name;
    el("recommendation").className = "recommendation recommendation-dispatch";
    checklist.innerHTML = "";
    manualBox.textContent = getKnowledgeText();
    manualBox.classList.remove("hidden");
    el("suggestion").classList.add("hidden");
    return;
  }

  el("mainTitle").textContent = "TROUBLESHOOTING CHECKLIST";
  el("recTitle").textContent = "CONCLUSION";
  manualBox.classList.add("hidden");
  checklist.innerHTML = "";
  renderErrorDescription();

  getQuestions().forEach((q, i) => {
    const row = document.createElement("div");
    row.className = "check-row";
    let html = `<div class="check-label">${q.label}</div>`;
    const options = getQuestionOptions(q);
    if(options.length){
      html += `<select id="a${i}" onchange="updateRecommendation()">`;
      options.forEach(opt => html += `<option value="${opt}">${opt}</option>`);
      html += "</select>";
    }else{
      html += "<div></div>";
    }
    // Excel-only rule: show a text box only when the Drop Down cell contains Text Input.
    html += q.text ? `<input id="t${i}" oninput="updateRecommendation()" placeholder="detail">` : "<div></div>";
    row.innerHTML = html;
    checklist.appendChild(row);
  });
  if(shouldShowAdditionalDetail()){
    const detail = document.createElement("textarea");
    detail.id = "additionalDetail";
    detail.className = "detail-box";
    detail.placeholder = "Additional Detail";
    checklist.appendChild(detail);
  }
  renderRelatedGuide();
  updateRecommendation();
  forceConclusionRed();
}

function answers(){
  if(isManual()) return [];
  return getQuestions().map((q, i) => {
    const sel = el(`a${i}`);
    const txt = el(`t${i}`);
    let a = sel ? sel.value : "-- Select --";

    if(q.text && Array.isArray(q.optionsList) && q.optionsList.length <= 1){
      a = txt && txt.value.trim() ? txt.value.trim() : "-- Select --";
      return {q:q.label, a:a};
    }

    if(txt && txt.value.trim()){
      if(a === "Failed") a = `Failed : ${txt.value.trim()}`;
      else a = txt.value.trim();
    }
    return {q:q.label, a:a};
  });
}

function isAnsweredValue(a){
  return !!a && a !== "-- Select --";
}

function isTailChecklist(label){
  return label === "Physical damage / Liquid spilled" || label === "Other issue" || label === "FRU P/N";
}

// v4.8.6 revision: Checklist Priority Rule
// Not Test must not block Dispatch unless the item is truly required to choose a part.
// Optional/Recommended items add confidence only.
function isOptionalChecklist(label){
  
const optionalLabels = [
    "Lenovo Vantage Update",
    "Driver Update", "Driver / Windows Update", "Driver / Firmware Update",
    "Audio Driver Update", "Camera Driver Update", "Fingerprint Driver Update", "Touchpad Driver Update", "TrackPoint Driver Update", "Hotkey Driver Update", "Graphics Driver Update", "Thunderbolt Driver Update", "LAN Driver Update", "WLAN Driver Update", "Bluetooth Driver Update", "Chipset / Power Driver Update", "RST / RSTe Driver Update",
    "BIOS Update",
    "Load BIOS Default",
    "Can Access Windows", "Lenovo Diagnostics", "Check Temperature", "Fan Check", "Check Task Manager Usage", "Check Power Mode",
    "Physical damage / Liquid spilled", "Other issue", "FRU P/N"
  ];

  return optionalLabels.includes(label) || isTailChecklist(label);
}

function isRequiredChecklist(label){
  return !isOptionalChecklist(label);
}

function decisionProgress(ans){
  const required = ans.filter(r => isRequiredChecklist(r.q));
  const answered = required.filter(r => isAnsweredValue(r.a) && r.a !== "Not Test");
  return {required: required.length, answered: answered.length};
}

function hasAnyChecklistAnswer(ans){
  return ans.some(r => isAnsweredValue(r.a));
}

function hasEnoughDecisionEvidence(ans){
  const p = decisionProgress(ans);
  if(p.required === 0) return hasAnyChecklistAnswer(ans);
  // Escalate/default conclusions are last-resort results.
  // They may appear only after all or almost all decision checklist items are answered.
  const needed = Math.max(1, Math.ceil(p.required * 0.8));
  return p.answered >= needed;
}

function pendingConclusion(){
  return {
    result: "Pending",
    part: "-",
    recommendation: ""
  };
}

function normalizeConclusion(rec){
  if(!rec) return rec;
  if(rec.result === "FOP" || rec.result === "Escalate L2" || rec.result === "Pending") rec.part = "-";
  return rec;
}

function answerValue(ans, label){
  const hit = ans.find(x => x.q === label);
  return hit ? hit.a : undefined;
}

function storageEliminationRule(ans){
  if(selectedLevel !== "storage") return null;
  let part = null;
  let swapLabel = null;
  if(selectedSymptom === "ssd") { part = "SSD"; swapLabel = "Swap SSD"; }
  if(selectedSymptom === "hdd") { part = "HDD"; swapLabel = "Swap HDD"; }
  if(!part) return null;

  const bios = answerValue(ans, "BIOS detects storage");
  const swap = answerValue(ans, swapLabel);
  if(swap === "Same Issue") return {result:"Dispatch", part:"Mainboard"};
  if(swap === "Working") return {result:"Dispatch", part:part};
  if(bios === "No") return {result:"Dispatch", part:part};
  return null;
}

function monitorEliminationRule(ans){
  if(selectedLevel !== "monitor") return null;
  const cable = answerValue(ans, "Swap HDMI / DisplayPort cable");
  const monitorOther = answerValue(ans, "Monitor test on other machine");
  const swapMonitor = answerValue(ans, "Swap Monitor");
  const powerCord = answerValue(ans, "Swap Power Cord");

  if(selectedSymptom === "abnormal_line"){
    if(cable === "Working") return {result:"Dispatch", part:"HDMI / DP Cable"};
    if(monitorOther === "Same Issue") return {result:"Dispatch", part:"Monitor"};
    if(swapMonitor === "Working") return {result:"Dispatch", part:"Monitor"};
    if(monitorOther === "Working" || swapMonitor === "Same Issue") return {result:"Dispatch", part:"Mainboard / Graphics Output"};
  }

  if(selectedSymptom === "no_power"){
    if(powerCord === "Working") return {result:"Dispatch", part:"Power Cord"};
    if(swapMonitor === "Working") return {result:"Dispatch", part:"Monitor"};
    if(swapMonitor === "Same Issue") return {result:"FOP", part:"Power source / Environment"};
  }
  return null;
}


function dockEliminationRule(ans){
  if(selectedLevel !== "dock") return null;
  const val = label => answerValue(ans, label);

  // Dock decision logic must be conservative.
  // Dispatch only when a checklist result clearly identifies the failed item.
  // Same Issue after Swap Dock must NOT dispatch Docking or Mainboard.
  const dispatchOnWorkFine = [
    ["Swap USB-A Port", "Docking"],
    ["Swap HDMI / DisplayPort cable", "HDMI / DisplayPort Cable"],
    ["Swap DisplayPort cable", "DisplayPort Cable"],
    ["Swap HDMI cable", "HDMI Cable"],
    ["Swap LAN cable", "LAN Cable"],
    ["Swap Adapter", "Adapter"],
    ["Swap USB-C cable", "USB-C Cable"],
    ["Swap Dock", "Docking"]
  ];

  for(const [label, part] of dispatchOnWorkFine){
    if(val(label) === "Working") return {result:"Dispatch", part};
  }

  // Software/Firmware resolved = FOP with no FRU part.
  if(val("Lenovo Vantage Update") === "Working") return {result:"FOP", part:"-"};
  if(val("Dock Firmware Update") === "Working") return {result:"FOP", part:"-"};

  // Peripheral reference tests that work normally indicate the customer's external device,
  // not the Dock, may be the cause. FOP has no FRU part.
  if(val("USB Mouse / Keyboard test") === "Working") return {result:"FOP", part:"-"};
  if(val("Headphone Test") === "Working") return {result:"FOP", part:"-"};
  if(val("Swap Headphone") === "Working") return {result:"FOP", part:"-"};

  // No Dock fallback here. Global Decision State will show Pending until enough
  // checklist evidence exists, then the symptom default may be used as last resort.
  return null;
}


function cableAndAccessoryRule(ans){
  for(const r of ans){
    const q = String(r.q || "");
    const a = r.a;
    if(a !== "Working" && a !== "Same Issue") continue;

    // Swapping with a known-good cable/accessory and the issue becomes Working = customer cable/accessory is defective.
    if(a === "Working"){
      if(/Swap Power Cord|Swap Power Cable|Swap Power Cord/i.test(q)) return {result:"Dispatch", part:"Power Cord"};
      if(/Swap HDMI cable/i.test(q)) return {result:"Dispatch", part:"HDMI Cable"};
      if(/Swap DisplayPort cable/i.test(q)) return {result:"Dispatch", part:"DisplayPort Cable"};
      if(/Swap HDMI \/ DisplayPort cable|Swap HDMI\/DP/i.test(q)) return {result:"Dispatch", part:"Display Cable"};
      if(/Swap USB-C cable/i.test(q)) return {result:"Dispatch", part:"USB-C Cable"};
      if(/Swap LAN cable/i.test(q)) return {result:"Dispatch", part:"LAN Cable"};
      if(/Swap Adapter/i.test(q)) return {result:"Dispatch", part:"Adapter"};
      if(/Swap Power Outlet/i.test(q)) return {result:"FOP", part:"-"};
      if(/Swap PSU/i.test(q)) return {result:"Dispatch", part:"PSU"};
    }

    // Cross-test on other machine: Same Issue follows the tested customer part.
    if(a === "Same Issue"){
      if(/Adapter test on other machine/i.test(q)) return {result:"Dispatch", part:"Adapter"};
      if(/Monitor test on other machine/i.test(q)) return {result:"Dispatch", part:"Monitor"};
      if(/Mouse test on other machine/i.test(q)) return {result:"Dispatch", part:"Mouse"};
      if(/Keyboard test on other machine/i.test(q)) return {result:"Dispatch", part:"Keyboard"};
    }
  }
  return null;
}

function recoveryActionRule(ans){
  const recoveryLabels = [
    "Power Reset / Emergency Reset", "Power Reset", "Emergency Reset", "Emergency Reset Hole",
    "BIOS Update", "Load BIOS Default", "Windows Update", "Driver Update", "Driver / Windows Update",
    "Lenovo Vantage Update", "Dock Firmware Update", "Clean Cooling System",
    "Windows Startup Repair", "Re-install Windows", "Safe Mode Test"
  ];
  for(const label of recoveryLabels){
    if(isWorking(ans, label)) return {result:"FOP", part:"-"};
  }
  return null;
}

function nextRequiredChecklist(ans){
  const missing = [];
  const addIfMissing = label => { if(isNotTested(ans, label)) missing.push(label); };

  if(selectedLevel === "boot" && selectedSymptom === "no_power"){
    const product = getProductKey();
    if(product === "desktop" || product === "aio"){
      addIfMissing("Swap Power Cable");
      addIfMissing("Swap Power Outlet");
    }else{
      addIfMissing("Adapter test on other machine");
      addIfMissing(product === "thinkpad" ? "Emergency Reset" : "Power Reset");
    }
  }else if(selectedLevel === "boot" && selectedSymptom === "pond"){
    addIfMissing("External Monitor test");
    addIfMissing(getProductKey() === "thinkpad" ? "Emergency Reset" : "Power Reset");
  }else{
    getQuestions().forEach(q => {
      if(isRequiredChecklist(q.label) && isNotTested(ans, q.label) && missing.length < 3) missing.push(q.label);
    });
  }

  return [...new Set(missing)].slice(0,3);
}

function accessorySuggestionForPart(part){
  // Legacy helper disabled by v4.8.6 UI rule.
  // Normal Dispatch/FOP cases must not show Suggested PD.
  return "";
}


// v4.8.3 Smart Dispatch Engine helpers
function isMultiPart(part){
  return typeof part === "string" && /\s\/\s/.test(part);
}

function onePart(part){
  if(!part) return "-";
  let p = String(part).replace(/Thermal Module/gi, "Fan").replace(/Thermal/gi, "Fan");
  if(p.includes("/")) p = p.split("/")[0].trim();
  return p || "-";
}

function continueTroubleshooting(){
  return {result:"", part:""};
}

function selectedAnswer(ans, label){
  const hit = ans.find(x => x.q === label);
  return hit ? hit.a : undefined;
}

function isSame(ans, label){ return selectedAnswer(ans, label) === "Same Issue"; }
function isWorking(ans, label){ return selectedAnswer(ans, label) === "Working"; }
function isNotTested(ans, label){
  const v = selectedAnswer(ans, label);
  return !v || v === "-- Select --" || v === "Not Test";
}
function isYes(ans, label){ return selectedAnswer(ans, label) === "Yes"; }
function isNo(ans, label){ return selectedAnswer(ans, label) === "No"; }
function hasFailed(ans, label){
  const v = selectedAnswer(ans, label) || "";
  return String(v).startsWith("Failed");
}
function hasUnresolvedSoftwareCause(ans){
  const task = selectedAnswer(ans, "Check Task Manager Usage");
  if(["CPU High","RAM High","Disk High","GPU High"].includes(task)) return true;
  if(selectedAnswer(ans, "Check Power Mode") === "High Performance") return true;
  return false;
}


// v4.8.6 Symptom Recommendation Engine
function selectedAny(ans, labels){
  for(const label of labels){
    const v = selectedAnswer(ans, label);
    if(v !== undefined) return v;
  }
  return undefined;
}

function symptomRecommendation(ans){
  const powerLed = selectedAny(ans, ["Power LED", "LED on power button"]);
  const external = selectedAny(ans, ["External Monitor test", "Swap Monitor", "External Monitor"]);
  const caps = selectedAnswer(ans, "Caps Lock Toggle");
  const temp = selectedAnswer(ans, "Check Temperature");
  const fanNoiseEvidence = selectedAnswer(ans, "Clean Cooling System") || selectedAnswer(ans, "Check for Dust and Foreign Objects");

  // Critical inconsistency that applies to any symptom containing these two checks.
  if(powerLed === "No" && caps === "Yes"){
    return {
      rec:{result:"Verify Checklist", part:"-"},
      reason:["Power LED = No", "Caps Lock Toggle = Yes"],
      conflicts:[{aLabel:"Power LED", aValue:"No", bLabel:"Caps Lock Toggle", bValue:"Yes"}],
      recommendation:'Please verify the power status with the customer.'
    };
  }

  // Boot symptom routing.
  if(selectedLevel === "boot" && selectedSymptom === "pond"){
    if(powerLed === "No"){
      return {
        rec:{result:'Select "Boot → No Power"', part:"-"},
        reason:["Power LED = No"],
        recommendation:'Boot → No Power'
      };
    }
    if(external === "Working"){
      return {
        rec:{result:'Select "Display → Black Screen"', part:"-"},
        reason:["External Monitor test = Working"],
        recommendation:'Display → Black Screen'
      };
    }
  }

  if(selectedLevel === "boot" && selectedSymptom === "no_power"){
    if(powerLed === "Yes"){
      return {
        rec:{result:'Select "Boot → Power On No Display"', part:"-"},
        reason:["Power LED = Yes"],
        recommendation:'Boot → Power On No Display'
      };
    }
  }

  // Display routing: if external monitor has the same issue on an internal-display symptom,
  // the case is no longer an internal LCD-only symptom.
  if(selectedLevel === "display" && external === "Same Issue"){
    return {
      rec:{result:'Select "Boot → Power On No Display"', part:"-"},
      reason:["External Monitor test = Same Issue"],
      recommendation:'Boot → Power On No Display'
    };
  }

  // Fan symptom routing examples.
  if(selectedLevel === "fan" && selectedSymptom === "fan_overheat" && temp === "Normal" && fanNoiseEvidence){
    return {
      rec:{result:'Select "Fan → Fan Noise"', part:"-"},
      reason:["Check Temperature = Normal"],
      recommendation:'Fan → Fan Noise'
    };
  }

  return null;
}

function smartFanRule(ans){
  if(selectedLevel !== "fan") return null;
  if(isYes(ans, "Physical damage / Liquid spilled")) return {result:"CID", part:"-"};

  if(selectedSymptom === "fan_error"){
    if(hasFailed(ans, "Lenovo Diagnostics")) return {result:"Dispatch", part:"Fan"};
    // Lenovo Diagnostics is optional/recommended for Fan Error.
    // If BIOS Update and Load BIOS Default do not resolve the error and there is no damage/other issue, dispatch Fan.
    if(isSame(ans, "BIOS Update") && isSame(ans, "Load BIOS Default")) return {result:"Dispatch", part:"Fan"};
    return continueTroubleshooting();
  }

  if(selectedSymptom === "fan_not_spin"){
    if(selectedAnswer(ans, "Fan Check") === "No Spin" && isNo(ans, "Check for Dust and Foreign Objects") && (hasFailed(ans, "Lenovo Diagnostics") || (isSame(ans, "BIOS Update") && isSame(ans, "Load BIOS Default")))){
      return {result:"Dispatch", part:"Fan"};
    }
    if(isYes(ans, "Check for Dust and Foreign Objects")) return {result:"FOP", part:"Clean Fan / Air Vent"};
    return continueTroubleshooting();
  }

  if(selectedSymptom === "fan_noise"){
    if(isYes(ans, "Check for Dust and Foreign Objects") && isWorking(ans, "Clean Cooling System")) return {result:"FOP", part:"-"};
    if(isSame(ans, "Clean Cooling System") && (hasFailed(ans, "Lenovo Diagnostics") || (isSame(ans, "BIOS Update") && isSame(ans, "Load BIOS Default")))) return {result:"Dispatch", part:"Fan"};
    return continueTroubleshooting();
  }

  if(selectedSymptom === "fan_spin_high"){
    if(hasUnresolvedSoftwareCause(ans)) return continueTroubleshooting();
    if(isSame(ans, "BIOS Update") && isSame(ans, "Load BIOS Default") && selectedAnswer(ans, "Check Task Manager Usage") === "Normal" && selectedAnswer(ans, "Check Power Mode") === "Balanced") return {result:"Dispatch", part:"Fan"};
    return continueTroubleshooting();
  }

  if(selectedSymptom === "fan_overheat"){
    if(isYes(ans, "Check for Dust and Foreign Objects")) return {result:"FOP", part:"Clean Fan / Air Vent"};
    if(hasUnresolvedSoftwareCause(ans)) return continueTroubleshooting();
    if(selectedAnswer(ans, "Check Temperature") === "Overheat" && isNo(ans, "Check for Dust and Foreign Objects") && selectedAnswer(ans, "Check Task Manager Usage") === "Normal" && isSame(ans, "BIOS Update") && isSame(ans, "Load BIOS Default")) return {result:"Dispatch", part:"Fan"};
    return continueTroubleshooting();
  }
  return null;
}

function smartDisplayRule(ans){
  if(selectedLevel !== "display") return null;
  if(isWorking(ans, "External Monitor test")) return {result:"Dispatch", part:"LCD Panel"};
  if(isSame(ans, "External Monitor test")) return continueTroubleshooting();
  return null;
}

function smartBootRule(ans){
  if(selectedLevel !== "boot") return null;
  const product = getProductKey();

  if(selectedSymptom === "no_power"){
    // Customer-first No Power logic.
    // Recovery actions that fix the unit = FOP. Swap/cross tests that identify a failed external part = Dispatch that part.
    if(isWorking(ans, "Power Reset / Emergency Reset") || isWorking(ans, "Power Reset")) return {result:"FOP", part:"-"};
    if(isYes(ans, "Physical damage / Liquid spilled")) return {result:"CID", part:"-"};

    // Desktop/AIO power path.
    if(product === "desktop" || product === "aio"){
      if(isWorking(ans, "Swap Power Cable") || isWorking(ans, "Swap Power Cord") || isWorking(ans, "Swap Power Cord")) return {result:"Dispatch", part:"Power Cord"};
      if(isWorking(ans, "Swap Power Outlet")) return {result:"FOP", part:"-"};
      if(isWorking(ans, "Swap PSU")) return {result:"Dispatch", part:"PSU"};
      if(isSame(ans, "Swap Power Cable") && isSame(ans, "Swap Power Outlet")) return {result:"Dispatch", part:"Mainboard"};
      return continueTroubleshooting();
    }

    const adapterOther = selectedAnswer(ans, "Adapter test on other machine");
    const swapAdapter = selectedAnswer(ans, "Swap Adapter");
    const typec = selectedAnswer(ans, "Swap other Type-C port");
    const resetSame = isSame(ans, "Power Reset / Emergency Reset") || isSame(ans, "Power Reset");

    // If another Type-C port works, dispatch the part that owns the port for the model.
    // For current Toolkit models this is Mainboard.
    if(typec === "Working") return {result:"Dispatch", part:"Mainboard"};

    // Customer adapter failed on another machine = adapter evidence.
    if(adapterOther === "Same Issue") return {result:"Dispatch", part:"Adapter"};

    // Customer adapter works on another machine = do not dispatch adapter.
    if(adapterOther === "Working"){
      if((typec === "Same Issue" || typec === "No Other Port" || typec === undefined) && resetSame) return {result:"Dispatch", part:"Mainboard"};
      return continueTroubleshooting();
    }

    // Swapping to a known-good adapter fixes the issue, but only when not contradicted by other adapter evidence.
    if(swapAdapter === "Working") return {result:"Dispatch", part:"Adapter"};

    return continueTroubleshooting();
  }

  if(selectedSymptom === "pond"){
    // Power On No Display is used only when external monitor also has no image.
    // Customer cannot run BIOS/Diagnostics when no display.
    if(isWorking(ans, "Power Reset / Emergency Reset") || isWorking(ans, "Power Reset")) return {result:"FOP", part:"-"};
    if(isYes(ans, "Physical damage / Liquid spilled")) return {result:"CID", part:"-"};

    const powerLed = selectedAnswer(ans, "Power LED");
    const external = selectedAnswer(ans, "External Monitor test") || selectedAnswer(ans, "Swap Monitor");
    const caps = selectedAnswer(ans, "Caps Lock Toggle");
    const resetSame = isSame(ans, "Power Reset / Emergency Reset") || isSame(ans, "Power Reset");

    if(caps === "Yes" && external === "Same Issue") return {result:"Verify Checklist", part:"-"};

    // Evidence-first rule:
    // Power LED = Yes + Caps Lock Toggle = No + External Monitor = Same Issue is enough to dispatch Mainboard.
    // Power Reset is helpful, but must not block dispatch if the evidence is already clear.
    if(powerLed === "Yes" && caps === "No" && external === "Same Issue") return {result:"Dispatch", part:"Mainboard"};
    if(powerLed === "Yes" && external === "Same Issue" && resetSame) return {result:"Dispatch", part:"Mainboard"};
    return continueTroubleshooting();
  }
  return null;
}

function checklistSummaryText(){
  const lines = [formatSymptomTitle(current().name)];
  answers().forEach(r => {
    lines.push(formatNoteLine(r.q, r.a));
  });
  const extra = getAdditionalDetail();
  if(extra){
    extra.split(/\r?\n/).map(x => x.trim()).filter(Boolean).forEach(x => lines.push(`- ${x}`));
  }
  return lines.join("\n");
}

// v4.8.6 Smart Review Engine
function reviewEngine(ans, rec){
  const conflicts = [];
  let override = null;
  const symRec = symptomRecommendation(ans);
  if(symRec){
    if(symRec.conflicts && symRec.conflicts.length){
      return {rec: symRec.rec, conflicts: symRec.conflicts, blockEmail:false};
    }
    return {
      rec: symRec.rec,
      recommendation: true,
      reviewLines: ["Suggestion", "Please select", "", symRec.recommendation]
    };
  }
  const addConflict = (aLabel, aValue, bLabel, bValue) => conflicts.push({aLabel, aValue, bLabel, bValue});

  if(selectedLevel === "boot" && selectedSymptom === "no_power"){
    if(isWorking(ans, "Adapter test on other machine") && rec && rec.part === "Adapter"){
      addConflict("Adapter test on other machine", "Working", "Part", "Adapter");
    }
    if(isWorking(ans, "Swap Adapter") && isWorking(ans, "Adapter test on other machine")){
      addConflict("Swap Adapter", "Working", "Adapter test on other machine", "Working");
    }
  }

  if(selectedLevel === "boot" && selectedSymptom === "pond"){
    const extReview = selectedAnswer(ans, "External Monitor test") || selectedAnswer(ans, "Swap Monitor");
    const extLabel = selectedAnswer(ans, "External Monitor test") ? "External Monitor" : "Swap Monitor";
    if(extReview === "Working"){
      addConflict(extLabel, "Working", "Power On No Display", "Selected");
    }
    if(selectedAnswer(ans, "Power LED") === "No" && selectedAnswer(ans, "Caps Lock Toggle") === "Yes"){
      addConflict("Power LED", "No", "Caps Lock Toggle", "Yes");
    }
    if(selectedAnswer(ans, "Caps Lock Toggle") === "Yes" && extReview === "Same Issue"){
      addConflict("Caps Lock Toggle", "Yes", extLabel, "Same Issue");
    }
  }

  if(override) return {rec: override.rec, reviewLines: override.lines, blockEmail:false, override:true};
  if(conflicts.length){
    return {rec:{result:"Verify Checklist", part:"-"}, conflicts, blockEmail:true};
  }
  return {rec, reviewLines:null, blockEmail:false};
}

function conclusionLine(rec){
  if(!rec || !rec.result) return "Conclusion:";
  if(rec.result === "Dispatch") return `Conclusion: Dispatch ${rec.part || ""}`.trim();
  if(rec.result === "FOP") return "Conclusion: FOP";
  return "Conclusion:";
}

function reviewText(info){
  if(!info) return "";
  const lines = [checklistSummaryText(), ""];
  if(info.conflicts && info.conflicts.length){
    lines.push("Review");
    lines.push("Inconsistent information detected.");
    lines.push("");
    info.conflicts.forEach((c, idx) => {
      if(idx) lines.push("");
      lines.push(`• ${c.aLabel} = ${c.aValue}`);
      lines.push(`  ↔ ${c.bLabel} = ${c.bValue}`);
    });
    lines.push("");
    lines.push("Please verify with the customer.");
    lines.push("");
    lines.push("Conclusion:");
    return lines.join("\n");
  }
  if(info.reviewLines){
    lines.push(...info.reviewLines);
    lines.push("");
    lines.push("Conclusion:");
    return lines.join("\n");
  }
  return "";
}

function sanitizeDecision(rec){
  if(!rec) return rec;
  if(rec.result === "Dispatch"){
    rec.part = onePart(rec.part);
    if(isMultiPart(rec.part) || rec.part === "-" || /Software Troubleshooting/i.test(rec.part)) return continueTroubleshooting();
  }
  if(/Thermal Module|Thermal/i.test(rec.part || "")) rec.part = onePart(rec.part);
  if(!rec.result || rec.result === "FOP" || rec.result === "Escalate L2" || rec.result === "Pending") rec.part = rec.result ? "-" : "";
  return rec;
}

function calculateRaw(){
  const sym = withDisplayQuestions(current());
  const ans = answers();

  const symRec = symptomRecommendation(ans);
  if(symRec) return sanitizeDecision(symRec.rec);

  const recoveryRule = recoveryActionRule(ans);
  if(recoveryRule) return sanitizeDecision(recoveryRule);
  const accessoryRule = cableAndAccessoryRule(ans);
  if(accessoryRule) return sanitizeDecision(accessoryRule);

  const fanRule = smartFanRule(ans);
  if(fanRule) return sanitizeDecision(fanRule);
  const bootRule = smartBootRule(ans);
  if(bootRule) return sanitizeDecision(bootRule);
  const displayRule = smartDisplayRule(ans);
  if(displayRule) return sanitizeDecision(displayRule);

  for(const r of ans){
    if(r.a.startsWith("Failed")){
      const detail = r.a.replace("Failed", "").replace(":", "").trim();
      return sanitizeDecision({result:"Dispatch", part: detail || onePart(sym.defaultPart)});
    }
  }

  // Symptom-specific logic must run before static default results.
  // This is required for Dock: default is safe L2, but Working on a swapped item must still dispatch the identified FRU.
  const storageRule = storageEliminationRule(ans);
  if(storageRule) return storageRule;
  const monitorRule = monitorEliminationRule(ans);
  if(monitorRule) return monitorRule;
  const dockRule = dockEliminationRule(ans);
  if(dockRule) return dockRule;

  for(const r of ans){
    // Cross-test logic: customer part tested on another machine.
    // Working = that part is OK, so do not dispatch it. Same Issue = dispatch that part.
    if(r.q.includes("Adapter test on other machine") && r.a === "Same Issue") return {result:"Dispatch", part:"Adapter"};
    if(r.q.includes("Mouse test on other machine") && r.a === "Same Issue") return {result:"Dispatch", part:"Mouse Replacement"};
    if(r.q.includes("Keyboard test on other machine") && r.a === "Same Issue") return {result:"Dispatch", part:"Keyboard"};
    if(r.q.includes("Monitor test on other machine") && r.a === "Same Issue") return {result:"Dispatch", part:"Monitor"};
    if(r.q.includes("SD Card test on other machine") && r.a === "Same Issue") return {result:"FOP", part:"SD Card"};
  }

  for(const r of ans){
    if(r.q.includes("Swap Adapter") && r.a === "Working") return {result:"Dispatch", part:"Adapter"};
    if(r.q.includes("Swap PSU") && r.a === "Working") return {result:"Dispatch", part:"PSU"};
    if((r.q.toLowerCase().includes("ac power cord") || r.q.toLowerCase().includes("power cable") || r.q.toLowerCase().includes("power cord")) && r.a === "Working") return {result:"Dispatch", part:"Power Cord"};
    if((r.q.includes("Swap HDMI") || r.q.includes("Swap HDMI/DP")) && r.a === "Working") return {result:"Dispatch", part:"HDMI / DP Cable"};
    if(r.q.includes("Swap LAN cable") && r.a === "Working") return {result:"Dispatch", part:"LAN Cable"};
    if(r.q.includes("Swap DisplayPort cable") && r.a === "Working") return {result:"Dispatch", part:"DisplayPort Cable"};
    if(r.q.includes("Swap USB-C cable") && r.a === "Working") return {result:"Dispatch", part:"USB-C Cable"};
    if(r.q.includes("Swap Dock") && r.a === "Working") return {result:"Dispatch", part:"Dock"};
    if(r.q.includes("Swap USB-A Port") && r.a === "Working") return {result:"Dispatch", part:"Dock USB-A Port"};
    if(r.q.includes("Swap USB Device") && r.a === "Working") return {result:"Dispatch", part:"USB Device"};
    if(r.q.includes("Swap USB port") && r.a === "Working") return {result:"Dispatch", part:"USB Port"};
    if(r.q.includes("External Monitor") && r.a === "Working") return {result:"Dispatch", part:"LCD Panel"};
    if(r.q.includes("External Monitor") && r.a === "Same Issue") return {result:"Dispatch", part:"Mainboard"};
    if(r.q.includes("Monitor test on other machine") && r.a === "Working") return {result:"Dispatch", part:"PC / Graphics Output"};
    if(r.q.includes("Swap Monitor") && r.a === "Working") return {result:"Dispatch", part:"Monitor"};
    if((r.q.includes("USB Keyboard") || r.q.includes("Swap Keyboard") || r.q.includes("On-Screen Keyboard")) && r.a === "Working") return {result:"Dispatch", part:"Keyboard"};
    if(r.q.includes("USB Keyboard") && r.a === "Same Issue") return {result:"Dispatch", part:"Mainboard"};
    if(r.q.includes("Swap SSD / HDD") && r.a === "Working") return {result:"Dispatch", part:"SSD / HDD"};
    if(r.q.includes("Swap SSD") && r.a === "Working") return {result:"Dispatch", part:"SSD"};
    if(r.q.includes("Swap HDD") && r.a === "Working") return {result:"Dispatch", part:"HDD"};
    if(r.q.includes("Swap RAM") && r.a === "Working") return {result:"Dispatch", part:"RAM"};
    if(r.q.includes("Swap Smart Card") && r.a === "Working") return {result:"Dispatch", part:"Smart Card Reader"};
    if(r.q.includes("Swap SIM") && r.a === "Working") return {result:"Dispatch", part:"SIM Tray / WWAN Card"};
    if(r.q.includes("Swap Mouse") && r.a === "Working") return {result:"Dispatch", part:"Mouse Replacement"};
    if((r.q.includes("Mouse test") || r.q.includes("Mouse works")) && (r.a === "Working" || r.a === "Yes")) return {result:"Dispatch", part:sym.defaultPart || "Touchpad / ClickPad"};
    if((r.q.includes("Headphone Test") || r.q.includes("Swap Headphone")) && r.a === "Working") return {result:"Dispatch", part:"Speaker"};
    if(r.q.includes("External Mic Test") && r.a === "Working") return {result:"Dispatch", part:"Microphone"};
    if(r.q.includes("Swap Bluetooth Device") && r.a === "Working") return {result:"Dispatch", part:"Bluetooth Device / WLAN Card"};
    if((r.q.includes("Swap SD Card") || r.q.includes("SD Card test")) && r.a === "Working") return {result:"Dispatch", part:"SD Card Reader"};
    if(r.q.includes("Novo Button") && (r.a === "Work Fine" || r.a === "Working" || r.a === "Yes")) return {result:"Dispatch", part:"Power Button / Top Cover"};
  }


  if(!hasEnoughDecisionEvidence(ans)) return pendingConclusion();

  if(sym.defaultResult === "Escalate L2") return {result:"Escalate L2", part:"-"};
  if(sym.defaultResult === "CID") return {result:"CID", part:sym.defaultPart || "-"};

  const fallback = normalizeConclusion({result:sym.defaultResult || "Dispatch", part:sym.defaultPart || "-"});
  if(fallback.result === "Dispatch" && isMultiPart(sym.defaultPart || "")) return continueTroubleshooting();
  return sanitizeDecision(fallback);
}

function calculate(){
  return sanitizeDecision(normalizeConclusion(calculateRaw()));
}

function suggestion(){
  // v4.8.6 UI rule: Suggested PD is hidden in normal cases.
  // Symptom recommendations are shown only in Generate Note through Review/Suggestion text.
  return "";
}

function updateRecommendation(){
  if(isManual()) return;
  const rec = normalizeConclusion(calculate());
  const box = el("recommendation");
  if(rec.result === "Pending"){
    box.innerHTML = `Result : ${rec.result}<br>Part : ${rec.part}`;
  }else{
    box.innerHTML = `Result : ${rec.result}<br>Part : ${rec.part}`;
  }
  box.className = "recommendation";
  const lower = `${rec.result} ${rec.part}`.toLowerCase();
  if(lower.includes("fop")) box.classList.add("rec-fop");
  else if(lower.includes("adapter") || lower.includes("power cord")) box.classList.add("rec-adapter");
  else if(lower.includes("lcd") || lower.includes("camera")) box.classList.add("rec-lcd");
  else if(lower.includes("escalate")) box.classList.add("rec-l2");
  else if(lower.includes("mainboard")) box.classList.add("rec-mainboard");

  const s = suggestion();
  const sbox = el("suggestion");
  if(s){ sbox.textContent = s; sbox.classList.remove("hidden"); }
  else{ sbox.textContent = ""; sbox.classList.add("hidden"); }
  forceConclusionRed();
}


function formatSymptomTitle(text){
  let out = String(text || "").trim().toLowerCase();
  out = out.replace(/\busb\b/g, "USB");
  out = out.replace(/^./, c => c.toUpperCase());
  return out;
}

function formatOutputText(text){
  let out = String(text || "").trim().toLowerCase();
  // RESULT / EMAIL rule: keep only USB and FRU P/N uppercase; keep type-c and bios lowercase.
  out = out.replace(/\busb\b/g, "USB");
  out = out.replace(/\bfru p\/n\b/g, "FRU P/N");
  return out;
}

function formatNoteLine(label, answer){
  const isBlank = !answer || answer === "-- Select --";
  if(label === "FRU P/N"){
    return "- FRU P/N - " + (isBlank ? "" : String(answer).toUpperCase());
  }
  if(label === "Specific keys listed"){
    return `- ${formatOutputText(label)} - ${isBlank ? "" : String(answer).toUpperCase()}`;
  }
  return `- ${formatOutputText(label)} - ${isBlank ? "" : formatOutputText(answer)}`;
}

function nextRequiredActionText(label){
  const map = {
    "External Monitor test": "Connect an external monitor and check the display result.",
    "Swap Monitor": "Test with another monitor.",
    "Adapter test on other machine": "Test the adapter on another machine.",
    "Swap Adapter": "Test with another adapter.",
    "Swap other Type-C port": "Test another Type-C charging port.",
    "Power Reset / Emergency Reset": "Complete Power Reset / Emergency Reset.",
    "Power Reset": "Complete Power Reset.",
    "Emergency Reset": "Complete Emergency Reset.",
    "Swap Power Cable": "Test with another power cable.",
    "Swap Power Cord": "Test with another power cord.",
    "Swap Power Outlet": "Test with another power outlet.",
    "Swap HDMI cable": "Test with another HDMI cable.",
    "Swap USB-C cable": "Test with another USB-C cable.",
    "Swap LAN cable": "Test with another LAN cable.",
    "Swap USB Device": "Test with another USB device.",
    "Swap USB port": "Test another USB port."
  };
  return map[label] || `Complete ${label}.`;
}

function generateText(){
  if(isKnowledgeLevel()) return getKnowledgeText();
  const ans = answers();
  const baseRec = normalizeConclusion(calculate());
  const review = reviewEngine(ans, baseRec);
  if(review && review.rec){
    const box = el("recommendation");
    if(box){
      box.innerHTML = `Result : ${review.rec.result}<br>Part : ${review.rec.part}`;
    }
  }
  // If there is inconsistent information or a wrong-symptom suggestion, show only the Review/Suggestion content.
  if(review && (review.conflicts || review.reviewLines)) return reviewText(review);

  const lines = [checklistSummaryText()];
  const rec = (review && review.rec) || baseRec;
  lines.push("");
  lines.push(conclusionLine(rec));
  return lines.join("\n");
}


function guideFromChecklist(){
  const q = getQuestions().map(x => x.label.toLowerCase());
  let lines = [current().name, "", "รบกวนช่วยทดสอบและตรวจสอบเบื้องต้นตามขั้นตอนดังนี้ครับ"];
  q.forEach((item, i) => lines.push(`${i+1}. ${item}`));
  return lines.join("\n");
}



// v4.8.3 Email TH rule: write customer steps, keep only final result request at the bottom.
function setNote(text){ el("note").value = text; }
function generateNote(){
  gaTrack("generate_note", {
    level1: getLevelName(),
    symptom: getSymptomName()
  });
  setNote(generateText());
  updateRecommendation();
}
function copyGuide(){ setNote(isKnowledgeLevel() ? getKnowledgeText() : guideFromChecklist()); }
function sendEmailTH(){
  gaTrack("email_th", {
    level1: getLevelName(),
    symptom: getSymptomName()
  });
  setNote(emailFromChecklist("TH"));
}
function sendEmailEN(){
  gaTrack("email_en", {
    level1: getLevelName(),
    symptom: getSymptomName()
  });
  setNote(emailFromChecklist("EN"));
}
function copyNote(){
  const n = el("note");
  n.select();
  document.execCommand("copy");
  alert("Copied");
}
function clearAll(){
  el("search").value = "";
  renderMain();
  el("note").value = "";
}

function filterSymptoms(){
  const kw = el("search").value.toLowerCase().trim();
  if(!kw){ renderAll(); return; }
  const box = el("symptom");
  box.innerHTML = "";
  getVisibleLevelKeys().forEach(levelKey => {
    getVisibleSymptomKeys(levelKey).forEach(symKey => {
      const obj = LEVELS[levelKey].symptoms[symKey];
      const hay = `${LEVELS[levelKey].name} ${obj.name}`.toLowerCase();
      if(hay.includes(kw)){
        const div = document.createElement("div");
        div.className = "item";
        div.textContent = `${LEVELS[levelKey].name} > ${obj.name}`;
        div.onclick = () => {
          selectedLevel = levelKey;
          selectedSymptom = symKey;
          el("search").value = "";
          renderAll();
        };
        box.appendChild(div);
      }
    });
  });
}

function renderAll(){
  ensureSelectionAvailable();
  renderLevel1();
  renderSymptoms();
  renderMain();
}

document.addEventListener("DOMContentLoaded", () => {
  el("product").addEventListener("change", () => {
    const productText = el("product").options[el("product").selectedIndex].text;
    gaTrack("product_selected", { product: productText });
    // v4.7.0: force clean state and re-render to prevent missing Level 1 / Symptom items.
    if(el("search")) el("search").value = "";
    ensureSelectionAvailable();
    const visibleSymptoms = getVisibleSymptomKeys(selectedLevel);
    if(visibleSymptoms.length) selectedSymptom = visibleSymptoms[0];
    renderAll();
  });
  el("search").addEventListener("input", filterSymptoms);
  el("topClearBtn").addEventListener("click", clearAll);
  el("generateBtn").addEventListener("click", generateNote);
  el("emailThBtn").addEventListener("click", sendEmailTH);
  el("emailEnBtn").addEventListener("click", sendEmailEN);
  el("clearBtn").addEventListener("click", clearAll);
  el("modalCloseBtn").addEventListener("click", closeGuideModal);
  renderAll();
});


// v4.9.3 Email Writing Rules - Full Audit update
// Customer emails must be concise instructions, not raw checklist labels.
// One checklist item must become one customer-friendly instruction.
// Use short imperative wording and preserve the visible checklist order.

function _cleanLabel(label){
  return String(label || "").trim();
}

function _stripKnownSuffix(text){
  return String(text || "").replace(/\s+Driver$/i, "").replace(/\s+Device$/i, "").trim();
}

// ============================================================================
// v5.1.9 Excel-Only Data Rules
// PD_Guide_Database.xlsx is the sole source of truth for:
// LEVEL 1, SYMPTOM / GUIDE, CHECKLIST, Dropdown ID, Email TH, Email EN,
// and Related Guide Key. Master values are resolved during database.js generation. No legacy mapping, fallback text, injection, removal,
// renumbering, or reordering is allowed for these fields.
// ============================================================================
function getVisibleLevelKeys(){
  const product = getProductKey();
  const structure = (typeof MODEL_STRUCTURE !== "undefined" && MODEL_STRUCTURE[product])
    ? MODEL_STRUCTURE[product]
    : [];
  return structure.map(item => item.level).filter(levelKey => LEVELS[levelKey]);
}

function getVisibleSymptomKeys(levelKey){
  const product = getProductKey();
  const structure = (typeof MODEL_STRUCTURE !== "undefined" && MODEL_STRUCTURE[product])
    ? MODEL_STRUCTURE[product]
    : [];
  const row = structure.find(item => item.level === levelKey);
  return row ? row.symptoms.filter(symptomKey => LEVELS[levelKey] && LEVELS[levelKey].symptoms[symptomKey]) : [];
}

function getQuestions(){
  if(isManual()) return [];
  const sym = current();
  const product = getProductKey();
  if(sym.questions && Array.isArray(sym.questions[product])) return sym.questions[product].slice();
  if(Array.isArray(sym.common)) return sym.common.slice();
  return [];
}

function getQuestionOptions(question){
  return question && Array.isArray(question.optionsList) ? question.optionsList.slice() : [];
}

function getRelatedGuideKeys(){
  if(isManual()) return [];
  const manuals = (LEVELS.manual && LEVELS.manual.symptoms) ? LEVELS.manual.symptoms : {};
  const names = [];
  getQuestions().forEach(row => {
    String(row.relatedGuide || '')
      .split(/\s*\|\s*|\r?\n|\s*;\s*/)
      .map(x => x.trim())
      .filter(Boolean)
      .forEach(name => { if(!names.includes(name)) names.push(name); });
  });
  return names.map(name => Object.keys(manuals).find(key =>
    String(manuals[key].name || '').trim().toLowerCase() === name.toLowerCase()
  )).filter(Boolean);
}

function stripLegacyItemNumber(text){
  return String(text || "")
    .replace(/^\s*(?:ข้อ\s*)?\d+\s*[.\)\-:]\s*/i, "")
    .trim();
}

function emailFromChecklist(lang){
  if(isManual()) return lang === "EN" ? (current().emailEN || "") : (current().emailTH || "");
  const field = lang === "EN" ? "emailEN" : "emailTH";
  const header = lang === "EN"
    ? ["Dear Customer,", "", "Please follow the steps below."]
    : ["เรียน คุณลูกค้า", "", "รบกวนช่วยดำเนินการตามขั้นตอนดังต่อไปนี้"];
  const footer = lang === "EN"
    ? "Once completed, please send us the result and attach any photo or test result if available, so we can proceed with the next step."
    : "หากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับ พร้อมแนบรูปหรือผลการทดสอบ (ถ้ามี) เพื่อให้ทางเราดำเนินการในขั้นตอนถัดไปครับ";
  const body = getQuestions()
    .map(row => stripLegacyItemNumber(row[field]))
    .filter(Boolean)
    .map((line, index) => `${index + 1}. ${line}`);
  const spacedBody = [];
  body.forEach((line, index) => {
    if(index) spacedBody.push("");
    spacedBody.push(line);
  });
  return header.concat([""], spacedBody, ["", footer]).join("\n");
}

