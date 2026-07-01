
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


const PRODUCT_CAPABILITY_EXCLUDE = {
  desktop: {
    dock: ['usb_a_not_working', 'displayport_not_working', 'hdmi_not_working', 'lan_not_working', 'audio_jack_not_working', 'dock_not_charging', 'dock_not_detected', 'external_monitor_flickering'],
    charging: ["typec", "runtime", "swollen", "slow_charge", "not_detect"],
    touchpad: ["cursor", "click", "jump", "track"],
    camera: ["face_recognition", "lock_on_leave"],
    keyboard: ["backlight", "fn", "left_ctrl"],
    network: ["wwan", "sim"],
    error: ["e0190"]
  },
  aio: {
    dock: ['usb_a_not_working', 'displayport_not_working', 'hdmi_not_working', 'lan_not_working', 'audio_jack_not_working', 'dock_not_charging', 'dock_not_detected', 'external_monitor_flickering'],
    charging: ["typec", "runtime", "swollen", "slow_charge", "not_detect"],
    touchpad: ["cursor", "click", "jump", "track"],
    camera: ["lock_on_leave"],
    keyboard: ["backlight", "fn", "left_ctrl"],
    network: ["wwan", "sim"],
    error: ["e0190"]
  },
  ideapad: {
    dock: ['usb_a_not_working', 'displayport_not_working', 'hdmi_not_working', 'lan_not_working', 'audio_jack_not_working', 'dock_not_charging', 'dock_not_detected', 'external_monitor_flickering'],
    touchpad: ["track"],
    keyboard: ["left_ctrl"],
    camera: ["lock_on_leave"],
    network: ["wwan", "sim", "smart_card_reader"],
    port: ["smart"]
  }
};

function getProductKey(){
  const productEl = el("product");
  return productEl ? productEl.value : "thinkpad";
}

function isSymptomAllowed(levelKey, symptomKey){
  const product = getProductKey();
  const excluded = PRODUCT_CAPABILITY_EXCLUDE[product] || {};
  return !(excluded[levelKey] || []).includes(symptomKey);
}

function getVisibleLevelKeys(){
  return Object.keys(LEVELS).filter(levelKey => {
    if(LEVELS[levelKey].manual === true) return true;
    return getVisibleSymptomKeys(levelKey).length > 0;
  });
}

function getVisibleSymptomKeys(levelKey){
  const level = LEVELS[levelKey];
  if(!level || !level.symptoms) return [];
  if(level.manual === true) return Object.keys(level.symptoms);
  return Object.keys(level.symptoms).filter(symptomKey => isSymptomAllowed(levelKey, symptomKey));
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

function withDisplayQuestions(sym){
  if(!sym.display) return sym;
  const common = [
    {label:"Check BIOS", options:"swap"},
    {label:"Move LCD lid", options:"select"},
    {label:"External Monitor test", options:"swap"},
    {label:"Update Graphics Driver", options:"select"},
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
  if(selectedLevel === "keyboard" && (product === "desktop" || product === "aio")) return true; // External Keyboard
  const part = (current().defaultPart || "").toLowerCase();
  return part.includes("external mouse") || part.includes("external keyboard") || part.includes("adapter") || part.includes("power cord");
}

function normalizeQuestionOrder(list){
  const product = getProductKey();
  const tail = ["Physical damage / Liquid spilled", "Other issue", "FRU P/N"];
  const removeLabels = ["Clean / Reseat RAM", "Video clip provided", "Photo / Video provided", "Photo / Video evidence", "Photo provided"];
  let filtered = list.slice()
    .filter(q => !removeLabels.includes(q.label))
    .filter(q => !(q.label.includes("Video") || q.label.includes("Photo")))
    .map(q => {
      if(product !== "thinkpad" && q.label === "Power Reset / Emergency Reset"){
        return {...q, label:"Power Reset"};
      }
      return q;
    });
  if(!isFruPnAllowed()){
    filtered = filtered.filter(q => q.label !== "FRU P/N");
  }
  const nonTail = filtered.filter(q => !tail.includes(q.label));
  const tailItems = [];
  tail.forEach(label => {
    filtered.filter(q => q.label === label).forEach(q => tailItems.push(q));
  });
  return nonTail.concat(tailItems);
}

function getQuestions(){
  if(isManual()) return [];
  const sym = withDisplayQuestions(current());
  const product = el("product").value;
  let qs = [];
  if(sym.questions && sym.questions[product]) qs = sym.questions[product].slice();
  else if(sym.common) qs = sym.common.slice();

  // v4.7.0: add easy checks for Keyboard > All key only.
  if(selectedLevel === "keyboard" && selectedSymptom === "all"){
    const addFront = [];
    if(!qs.some(q => q.label === "Caps Lock LED works")){
      addFront.push({label:"Caps Lock LED works", options:"yesno", text:false, diag:false});
    }
    const resetLabel = product === "thinkpad" ? "Power Reset / Emergency Reset" : "Power Reset";
    if(!qs.some(q => q.label === "Power Reset / Emergency Reset" || q.label === "Power Reset")){
      addFront.push({label:resetLabel, options:"swap", text:false, diag:false});
    }
    qs = addFront.concat(qs);
  }

  return normalizeQuestionOrder(qs);
}

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
  const text = isManual() ? current().name : `${product} > ${LEVELS[selectedLevel].name} > ${current().name}`;
  el("currentSelection").innerHTML = `<b>Current Selection:</b> ${text}`;
}


function getManualGuide(key){
  const manuals = LEVELS.manual && LEVELS.manual.symptoms ? LEVELS.manual.symptoms : {};
  return manuals[key] || null;
}

function getRelatedGuideKeys(){
  if(isManual()) return [];
  const cfg = (typeof RELATED_GUIDES !== "undefined" && RELATED_GUIDES[selectedLevel]) ? RELATED_GUIDES[selectedLevel] : null;
  if(!cfg) return [];
  return cfg[selectedSymptom] || cfg.default || [];
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
  el("modalBody").textContent = guide.guide;
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
    .replace("Windows Installation","Reinstall Windows")
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

  if(isManual()){
    el("mainTitle").textContent = "TROUBLESHOOTING GUIDE";
    el("recTitle").textContent = "GUIDE";
    el("recommendation").innerHTML = current().name;
    el("recommendation").className = "recommendation recommendation-dispatch";
    checklist.innerHTML = "";
    manualBox.textContent = current().guide;
    manualBox.classList.remove("hidden");
    el("suggestion").classList.add("hidden");
    renderRelatedGuide();
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
    let html = `<div class="check-label">${q.label}</div><select id="a${i}" onchange="updateRecommendation()">`;
    getOptions(q.options).forEach(opt => html += `<option value="${opt}">${opt}</option>`);
    html += "</select>";
    html += (q.text || q.diag) ? `<input id="t${i}" oninput="updateRecommendation()" placeholder="${q.diag ? 'failed part detail' : 'detail'}">` : "<div></div>";
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

    if(q.options === "detail_only"){
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

function decisionProgress(ans){
  const required = ans.filter(r => !isTailChecklist(r.q));
  const answered = required.filter(r => isAnsweredValue(r.a));
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
  if(swap === "Same issue") return {result:"Dispatch", part:"Mainboard"};
  if(swap === "Work fine") return {result:"Dispatch", part:part};
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
    if(cable === "Work fine") return {result:"Dispatch", part:"HDMI / DP Cable"};
    if(monitorOther === "Same issue") return {result:"Dispatch", part:"Monitor"};
    if(swapMonitor === "Work fine") return {result:"Dispatch", part:"Monitor"};
    if(monitorOther === "Work fine" || swapMonitor === "Same issue") return {result:"Dispatch", part:"Mainboard / Graphics Output"};
  }

  if(selectedSymptom === "no_power"){
    if(powerCord === "Work fine") return {result:"Dispatch", part:"Power Cord"};
    if(swapMonitor === "Work fine") return {result:"Dispatch", part:"Monitor"};
    if(swapMonitor === "Same issue") return {result:"FOP", part:"Power source / Environment"};
  }
  return null;
}


function dockEliminationRule(ans){
  if(selectedLevel !== "dock") return null;
  const val = label => answerValue(ans, label);

  // Dock decision logic must be conservative.
  // Dispatch only when a checklist result clearly identifies the failed item.
  // Same issue after Swap Dock must NOT dispatch Docking or Mainboard.
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
    if(val(label) === "Work fine") return {result:"Dispatch", part};
  }

  // Software/Firmware resolved = FOP with no FRU part.
  if(val("Lenovo Vantage Update") === "Work fine") return {result:"FOP", part:"-"};
  if(val("Dock Firmware Update") === "Work fine") return {result:"FOP", part:"-"};

  // Peripheral reference tests that work normally indicate the customer's external device,
  // not the Dock, may be the cause. FOP has no FRU part.
  if(val("USB Mouse / Keyboard test") === "Work fine") return {result:"FOP", part:"-"};
  if(val("Headphone test") === "Work fine") return {result:"FOP", part:"-"};
  if(val("Swap Headphone") === "Work fine") return {result:"FOP", part:"-"};

  // No Dock fallback here. Global Decision State will show Pending until enough
  // checklist evidence exists, then the symptom default may be used as last resort.
  return null;
}

function calculateRaw(){
  const sym = withDisplayQuestions(current());
  const ans = answers();

  for(const r of ans){
    if(r.a.startsWith("Failed")){
      const detail = r.a.replace("Failed", "").replace(":", "").trim();
      return {result:"Dispatch", part: detail || sym.defaultPart};
    }
  }

  // Symptom-specific logic must run before static default results.
  // This is required for Dock: default is safe L2, but Work fine on a swapped item must still dispatch the identified FRU.
  const storageRule = storageEliminationRule(ans);
  if(storageRule) return storageRule;
  const monitorRule = monitorEliminationRule(ans);
  if(monitorRule) return monitorRule;
  const dockRule = dockEliminationRule(ans);
  if(dockRule) return dockRule;

  for(const r of ans){
    // Cross-test logic: customer part tested on another machine.
    // Work fine = that part is OK, so do not dispatch it. Same issue = dispatch that part.
    if(r.q.includes("Adapter test on other machine") && r.a === "Same issue") return {result:"Dispatch", part:"Adapter"};
    if(r.q.includes("Mouse test on other machine") && r.a === "Same issue") return {result:"Dispatch", part:"Mouse Replacement"};
    if(r.q.includes("Keyboard test on other machine") && r.a === "Same issue") return {result:"Dispatch", part:"Keyboard"};
    if(r.q.includes("Monitor test on other machine") && r.a === "Same issue") return {result:"Dispatch", part:"Monitor"};
    if(r.q.includes("SD Card test on other machine") && r.a === "Same issue") return {result:"FOP", part:"SD Card"};
  }

  for(const r of ans){
    if(r.q.includes("Swap Adapter") && r.a === "Work fine") return {result:"Dispatch", part:"Adapter"};
    if(r.q.includes("Swap PSU") && r.a === "Work fine") return {result:"Dispatch", part:"PSU"};
    if((r.q.toLowerCase().includes("ac power cord") || r.q.toLowerCase().includes("power cable") || r.q.toLowerCase().includes("power cord")) && r.a === "Work fine") return {result:"Dispatch", part:"Power Cord"};
    if((r.q.includes("Swap HDMI") || r.q.includes("Swap HDMI/DP")) && r.a === "Work fine") return {result:"Dispatch", part:"HDMI / DP Cable"};
    if(r.q.includes("Swap LAN cable") && r.a === "Work fine") return {result:"Dispatch", part:"LAN Cable"};
    if(r.q.includes("Swap DisplayPort cable") && r.a === "Work fine") return {result:"Dispatch", part:"DisplayPort Cable"};
    if(r.q.includes("Swap USB-C cable") && r.a === "Work fine") return {result:"Dispatch", part:"USB-C Cable"};
    if(r.q.includes("Swap Dock") && r.a === "Work fine") return {result:"Dispatch", part:"Dock"};
    if(r.q.includes("Swap USB-A Port") && r.a === "Work fine") return {result:"Dispatch", part:"Dock USB-A Port"};
    if(r.q.includes("Swap USB Device") && r.a === "Work fine") return {result:"Dispatch", part:"USB Device"};
    if(r.q.includes("Swap USB port") && r.a === "Work fine") return {result:"Dispatch", part:"USB Port"};
    if(r.q.includes("External Monitor") && r.a === "Work fine") return {result:"Dispatch", part:"LCD Panel"};
    if(r.q.includes("External Monitor") && r.a === "Same issue") return {result:"Dispatch", part:"Mainboard"};
    if(r.q.includes("Monitor test on other machine") && r.a === "Work fine") return {result:"Dispatch", part:"PC / Graphics Output"};
    if(r.q.includes("Swap Monitor") && r.a === "Work fine") return {result:"Dispatch", part:"Monitor"};
    if((r.q.includes("USB Keyboard") || r.q.includes("Swap Keyboard") || r.q.includes("On-Screen Keyboard")) && r.a === "Work fine") return {result:"Dispatch", part:"Keyboard"};
    if(r.q.includes("USB Keyboard") && r.a === "Same issue") return {result:"Dispatch", part:"Mainboard"};
    if(r.q.includes("Swap SSD / HDD") && r.a === "Work fine") return {result:"Dispatch", part:"SSD / HDD"};
    if(r.q.includes("Swap SSD") && r.a === "Work fine") return {result:"Dispatch", part:"SSD"};
    if(r.q.includes("Swap HDD") && r.a === "Work fine") return {result:"Dispatch", part:"HDD"};
    if(r.q.includes("Swap RAM") && r.a === "Work fine") return {result:"Dispatch", part:"RAM"};
    if(r.q.includes("Swap Smart Card") && r.a === "Work fine") return {result:"Dispatch", part:"Smart Card Reader"};
    if(r.q.includes("Swap SIM") && r.a === "Work fine") return {result:"Dispatch", part:"SIM Tray / WWAN Card"};
    if(r.q.includes("Swap Mouse") && r.a === "Work fine") return {result:"Dispatch", part:"Mouse Replacement"};
    if((r.q.includes("Mouse test") || r.q.includes("Mouse works")) && (r.a === "Work fine" || r.a === "Yes")) return {result:"Dispatch", part:sym.defaultPart || "Touchpad / ClickPad"};
    if((r.q.includes("Headphone test") || r.q.includes("Swap Headphone")) && r.a === "Work fine") return {result:"Dispatch", part:"Speaker"};
    if(r.q.includes("External mic test") && r.a === "Work fine") return {result:"Dispatch", part:"Microphone"};
    if(r.q.includes("Swap Bluetooth Device") && r.a === "Work fine") return {result:"Dispatch", part:"Bluetooth Device / WLAN Card"};
    if((r.q.includes("Swap SD Card") || r.q.includes("SD Card test")) && r.a === "Work fine") return {result:"Dispatch", part:"SD Card Reader"};
    if(r.q.includes("Novo Button") && r.a === "Yes") return {result:"Dispatch", part:"Power Button / Top Cover"};
  }


  if(!hasEnoughDecisionEvidence(ans)) return pendingConclusion();

  if(sym.defaultResult === "Escalate L2") return {result:"Escalate L2", part:"-"};
  if(sym.defaultResult === "CID") return {result:"CID", part:sym.defaultPart || "-"};

  return normalizeConclusion({result:sym.defaultResult || "Dispatch", part:sym.defaultPart || "-"});
}

function calculate(){
  return normalizeConclusion(calculateRaw());
}

function suggestion(){
  const ans = answers();
  const get = label => (ans.find(x => x.q === label) || {}).a;

  if(selectedLevel === "boot" && selectedSymptom === "no_power"){
    if(get("LED on power button") === "Yes") return "⚠ Suggested PD: Boot > Power on no display (Reason: Power LED = Yes)";
    if(get("Novo Button") === "Yes") return "⚠ Device responds to Novo Button. Please check Power Button / Top Cover.";
  }

  if(selectedLevel === "boot" && selectedSymptom === "pond"){
    if(get("LED on power button") === "No") return "⚠ Suggested PD: Boot > No power (Reason: Power LED = No)";
  }
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


function formatNoteLine(label, answer){
  if(label === "FRU P/N"){
    return "- FRU P/N - " + String(answer).toUpperCase();
  }
  if(label === "Specific keys listed"){
    return `- ${label.toLowerCase()} - ${String(answer).toUpperCase()}`;
  }
  return `- ${label.toLowerCase()} - ${String(answer).toLowerCase()}`;
}

function generateText(){
  if(isManual()) return current().guide;
  const lines = [current().name];

  answers().forEach(r => {
    if(r.a && r.a !== "-- Select --") lines.push(formatNoteLine(r.q, r.a));
  });

  const extra = getAdditionalDetail();
  if(extra){
    extra.split(/\r?\n/).map(x => x.trim()).filter(Boolean).forEach(x => lines.push(`- ${x}`));
  }

  const rec = normalizeConclusion(calculate());
  lines.push("");
  lines.push(`Conclusion: ${rec.result === "Dispatch" ? "Dispatch " + rec.part : rec.result}`);
  return lines.join("\n");
}

function guideFromChecklist(){
  const q = getQuestions().map(x => x.label.toLowerCase());
  let lines = [current().name, "", "รบกวนช่วยทดสอบและตรวจสอบเบื้องต้นตามขั้นตอนดังนี้ครับ"];
  q.forEach((item, i) => lines.push(`${i+1}. ${item}`));
  return lines.join("\n");
}



function customerStepTH(label){
  const map = {
    "Lenovo Diagnostics": "รบกวนรัน Lenovo Diagnostics โดยกดปุ่ม F10 ซ้ำ ๆ ขณะเปิดเครื่อง จากนั้นเลือก Run All > Quick > Quick Unattended และแจ้งผลเป็น Pass หรือ Failed ครับ",
    "Lenovo Diagnostics Storage": "รบกวนรัน Lenovo Diagnostics โดยกดปุ่ม F10 ซ้ำ ๆ ขณะเปิดเครื่อง จากนั้นเลือก Run All > Quick > Quick Unattended และแจ้งผลเป็น Pass หรือ Failed ครับ",
    "Lenovo Diagnostics Battery": "รบกวนรัน Lenovo Diagnostics โดยกดปุ่ม F10 ซ้ำ ๆ ขณะเปิดเครื่อง จากนั้นเลือก Run All > Quick > Quick Unattended และแจ้งผลเป็น Pass หรือ Failed ครับ",
    "Battery Report collected": "รบกวนสร้าง Battery Report โดยเปิด Command Prompt (CMD) พิมพ์คำสั่ง powercfg /batteryreport แล้วกด Enter จากนั้นส่งไฟล์ battery-report.html กลับมาให้ทางเราครับ",
    "Dump File collected": "รบกวนส่งไฟล์ Minidump ที่อยู่ในโฟลเดอร์ C:\\Windows\\Minidump กลับมาให้ทางเราครับ",
    "Dump file collected": "รบกวนส่งไฟล์ Minidump ที่อยู่ในโฟลเดอร์ C:\\Windows\\Minidump กลับมาให้ทางเราครับ",
    "Minidump collected": "รบกวนส่งไฟล์ Minidump ที่อยู่ในโฟลเดอร์ C:\\Windows\\Minidump กลับมาให้ทางเราครับ",
    "Power Reset / Emergency Reset": "รบกวนทำ Power Reset / Emergency Reset เพื่อเคลียร์ไฟของตัวเครื่อง แล้วแจ้งผลว่าอาการเดิมหรือใช้งานได้ปกติครับ",
    "Power Reset": "รบกวนทำ Power Reset โดยปิดเครื่อง ถอดสายชาร์จ จากนั้นกดปุ่ม Power ค้างประมาณ 30 วินาที แล้วเปิดเครื่องใหม่ครับ",
    "Emergency Reset Hole": "รบกวนทำ Emergency Reset โดยใช้เข็มหรือคลิปหนีบกระดาษกดที่รู Emergency Reset ใต้เครื่องค้างประมาณ 10 วินาที แล้วเปิดเครื่องใหม่ครับ",
    "Can boot into Safe Mode": "รบกวนเข้า Safe Mode เพื่อตรวจสอบว่าอาการยังคงเกิดขึ้นหรือไม่ แล้วแจ้งผลกลับมาครับ",
    "Adapter test on other machine": "รบกวนนำ Adapter ของเครื่องไปทดลองใช้งานกับเครื่อง Lenovo รุ่นที่รองรับอีกเครื่องหนึ่ง แล้วแจ้งผลว่าสามารถใช้งานได้ปกติหรือไม่",
    "Swap Adapter": "รบกวนสลับ Adapter ที่ใช้งานได้มาทดสอบกับเครื่อง แล้วแจ้งผลว่าอาการเดิมหรือใช้งานได้ปกติครับ",
    "Swap PSU": "หากสะดวก รบกวนสลับ PSU ที่ใช้งานได้มาทดสอบกับเครื่อง แล้วแจ้งผลว่าอาการเดิมหรือใช้งานได้ปกติครับ",
    "Swap SSD": "หากสะดวกและมี SSD ที่สามารถใช้งานได้ รบกวนสลับทดสอบ แล้วแจ้งผลว่าอาการเดิมหรือใช้งานได้ปกติครับ",
    "Swap HDD": "หากสะดวกและมี HDD ที่สามารถใช้งานได้ รบกวนสลับทดสอบ แล้วแจ้งผลว่าอาการเดิมหรือใช้งานได้ปกติครับ",
    "Swap RAM": "หากสะดวกและมี RAM ที่สามารถใช้งานได้ รบกวนสลับทดสอบ แล้วแจ้งผลว่าอาการเดิมหรือใช้งานได้ปกติครับ",
    "Caps Lock LED works": "ตรวจสอบว่าไฟ Caps Lock ตอบสนองหรือไม่",

    "LED on power button": "ตรวจสอบว่าไฟแสดงสถานะบริเวณปุ่ม Power ติดหรือไม่",
    "LED beside Type-C port": "ตรวจสอบว่าไฟแสดงสถานะบริเวณช่องชาร์จ Type-C ติดหรือไม่",
    "LED beside charging port": "ตรวจสอบว่าไฟแสดงสถานะบริเวณช่องชาร์จติดหรือไม่",
    "Power LED": "ตรวจสอบว่าไฟแสดงสถานะของตัวเครื่องติดหรือไม่",
    "Fan spinning": "ตรวจสอบว่าพัดลมหมุนหรือไม่",
    "Swap Adapter": "รบกวนสลับ Adapter ที่ใช้งานได้มาทดสอบกับเครื่อง แล้วแจ้งผลว่าอาการเดิมหรือใช้งานได้ปกติครับ",
    "Swap other Type-C port": "ทดสอบชาร์จกับพอร์ต Type-C ช่องอื่นของเครื่อง แล้วแจ้งผลว่าอาการเดิมหรือใช้งานได้ปกติครับ",
    "Adapter test on other machine": "นำ Adapter ไปทดสอบกับเครื่องอื่นที่รองรับ แล้วแจ้งผลว่าสามารถใช้งานได้ปกติหรือไม่",
    "Adapter test on other machine": "นำ Adapter ไปทดสอบกับเครื่องอื่นที่รองรับ แล้วแจ้งผลว่าสามารถใช้งานได้ปกติหรือไม่",
    "Emergency Reset Hole": "รบกวนทำ Emergency Reset โดยใช้เข็มหรือคลิปหนีบกระดาษกดที่รู Emergency Reset ใต้เครื่องค้างประมาณ 10 วินาที แล้วเปิดเครื่องใหม่ครับ",
    "Power Reset": "รบกวนทำ Power Reset โดยปิดเครื่อง ถอดสายชาร์จ จากนั้นกดปุ่ม Power ค้างประมาณ 30 วินาที แล้วเปิดเครื่องใหม่ครับ",
    "Novo Button": "ทดสอบกดปุ่ม Novo Button เพื่อตรวจสอบว่าเครื่องตอบสนองหรือไม่",
    "External Monitor test": "ทดสอบต่อใช้งานกับจอภายนอก (External Monitor)",
    "Clean / Reseat RAM": "ทดสอบถอดทำความสะอาดและใส่ RAM ใหม่",
    "Beep code / pattern": "ตรวจสอบจำนวนเสียง Beep หรือรูปแบบเสียง Beep ที่เกิดขึ้น",
    "Can boot into BIOS": "ตรวจสอบว่าสามารถเข้า BIOS ได้หรือไม่",
    "Can boot into Safe Mode": "รบกวนเข้า Safe Mode เพื่อตรวจสอบว่าอาการยังคงเกิดขึ้นหรือไม่ แล้วแจ้งผลกลับมาครับ",
    "Windows Startup Repair": "ทดสอบ Startup Repair ของ Windows",
    "Lenovo Diagnostics": "รบกวนรัน Lenovo Diagnostics โดยกดปุ่ม F10 ซ้ำ ๆ ขณะเปิดเครื่อง จากนั้นเลือก Run All > Quick > Quick Unattended และแจ้งผลเป็น Pass หรือ Failed ครับ",
    "Lenovo Diagnostics Storage": "รบกวนรัน Lenovo Diagnostics โดยกดปุ่ม F10 ซ้ำ ๆ ขณะเปิดเครื่อง จากนั้นเลือก Run All > Quick > Quick Unattended และแจ้งผลเป็น Pass หรือ Failed ครับ",
    "Lenovo Diagnostics Battery": "รบกวนรัน Lenovo Diagnostics โดยกดปุ่ม F10 ซ้ำ ๆ ขณะเปิดเครื่อง จากนั้นเลือก Run All > Quick > Quick Unattended และแจ้งผลเป็น Pass หรือ Failed ครับ",
    "Re-install Windows": "ทดสอบติดตั้ง Windows ใหม่",
    "Windows Update": "ทดสอบอัปเดต Windows เป็นเวอร์ชันล่าสุด",
    "BIOS Update": "ทดสอบอัปเดต BIOS เป็นเวอร์ชันล่าสุด",
    "Driver Update": "ทดสอบอัปเดต Driver ผ่าน Lenovo Vantage",
    "Driver Update / Lenovo Vantage": "ทดสอบอัปเดต Driver ผ่าน Lenovo Vantage",
    "Camera Shutter": "ตรวจสอบว่า Camera Shutter ถูกปิดอยู่หรือไม่",
    "Issue happens on all apps": "ตรวจสอบว่าอาการเกิดขึ้นทุกโปรแกรม หรือเฉพาะบางโปรแกรม",
    "Windows Camera App": "ทดลองเปิดใช้งานกล้องผ่านโปรแกรม Camera ของ Windows",
    "Device Manager shows Camera": "ตรวจสอบใน Device Manager ว่ายังพบอุปกรณ์ Camera หรือไม่",
    "Uninstall Camera Driver and Restart": "ทดสอบถอนติดตั้ง Driver Camera และ Restart เครื่อง",
    "BIOS Camera enabled": "ตรวจสอบว่า Camera ถูก Enable ใน BIOS หรือไม่",
    "Clean camera lens": "ทำความสะอาดบริเวณเลนส์กล้องและทดสอบอีกครั้ง",
    "Photo / Video provided": "รบกวนแนบรูปหรือวิดีโอขณะเกิดอาการเพิ่มเติม",
    "Specific keys listed": "ระบุปุ่มที่กดไม่ติดเพิ่มเติม",
    "USB Keyboard test": "ทดสอบใช้งานด้วย USB Keyboard ภายนอก",
    "FRU P/N": "รบกวนแจ้ง FRU P/N เพิ่มเติม",
    "On-Screen Keyboard test": "ทดสอบใช้งานผ่าน On-Screen Keyboard",
    "Driver / Windows Update": "ทดสอบอัปเดต Windows และ Driver ที่เกี่ยวข้อง",
    "Output device selected correctly": "ตรวจสอบว่าเลือก Output Device ถูกต้องหรือไม่",
    "Input device selected correctly": "ตรวจสอบว่าเลือก Input Device ถูกต้องหรือไม่",
    "Mute checked": "ตรวจสอบว่าเครื่องถูกปิดเสียง (Mute) อยู่หรือไม่",
    "Mic mute checked": "ตรวจสอบว่า Microphone ถูกปิด Mute อยู่หรือไม่",
    "Device Manager shows Audio": "ตรวจสอบใน Device Manager ว่ายังพบอุปกรณ์ Audio หรือไม่",
    "Headphone test": "ทดสอบใช้งานร่วมกับหูฟัง",
    "Voice Recorder test": "ทดสอบบันทึกเสียงผ่านโปรแกรม Voice Recorder",
    "Physical damage / Liquid spilled": "ตรวจสอบว่ามีร่องรอยชำรุด หรือคราบน้ำหรือไม่",
    "Other issue": "ตัวเครื่องมีอาการอื่น ๆ เพิ่มเติมหรือไม่",
    "Can detect Wi-Fi signal": "ตรวจสอบว่าเครื่องสามารถค้นหาสัญญาณ Wi-Fi ได้หรือไม่",
    "Another Wi-Fi / Hotspot test": "ทดสอบเชื่อมต่อ Wi-Fi อื่น หรือ Hotspot จากโทรศัพท์มือถือ",
    "Airplane Mode": "ตรวจสอบว่า Airplane Mode ถูกปิดอยู่หรือไม่",
    "Device Manager shows Wireless Driver": "ตรวจสอบใน Device Manager ว่ายังพบ Wireless Driver หรือไม่",
    "Uninstall Wireless Driver and Restart": "ทดสอบถอนติดตั้ง Wireless Driver และ Restart เครื่อง",
    "Wi-Fi Driver Update": "ทดสอบอัปเดต Driver Wi-Fi",
    "Bluetooth Driver Update": "ทดสอบอัปเดต Driver Bluetooth",
    "Swap Type-C port charge": "ทดสอบสลับพอร์ตชาร์จ Type-C",
    "LED beside port": "ตรวจสอบไฟแสดงสถานะบริเวณพอร์ตชาร์จ",
    "Battery Report collected": "รบกวนสร้าง Battery Report โดยเปิด Command Prompt (CMD) พิมพ์คำสั่ง powercfg /batteryreport แล้วกด Enter จากนั้นส่งไฟล์ battery-report.html กลับมาให้ทางเราครับ",
    "Battery Health in Lenovo Vantage": "ตรวจสอบ Battery Health ผ่าน Lenovo Vantage",
    "Battery swollen confirmed": "ตรวจสอบว่า Battery มีอาการบวมหรือไม่",
    "Photo provided": "รบกวนแนบรูปถ่ายเพิ่มเติมเพื่อตรวจสอบ",
    "Stop using device advised": "หาก Battery บวม รบกวนหยุดใช้งานเครื่องชั่วคราวเพื่อความปลอดภัย",
    "Power Reset / Emergency Reset": "รบกวนทำ Power Reset / Emergency Reset เพื่อเคลียร์ไฟของตัวเครื่อง แล้วแจ้งผลว่าอาการเดิมหรือใช้งานได้ปกติครับ",
    "Disable UEFI IPv4 / IPv6": "ปิด UEFI IPv4 / IPv6 ใน BIOS เพื่อป้องกันเครื่อง Boot ผ่าน Network",
    "Storage Firmware Update": "ทดสอบติดตั้ง Storage Firmware เป็นเวอร์ชันล่าสุด",
    "Intel RST / Storage Driver loaded": "โหลด Intel RST / Storage Driver ระหว่างติดตั้ง Windows",
    "Windows Installation USB recreated": "ทดสอบสร้าง USB Windows Installation ใหม่อีกครั้ง",
    "Fingerprint setup in Windows Hello": "ตรวจสอบการตั้งค่า Fingerprint ใน Windows Hello",
    "Device Manager shows Fingerprint": "ตรวจสอบใน Device Manager ว่ายังพบอุปกรณ์ Fingerprint หรือไม่",
    "Uninstall Fingerprint Driver and Restart": "ทดสอบถอนติดตั้ง Driver Fingerprint และ Restart เครื่อง",
    "Windows Hello Face setup": "ตรวจสอบการตั้งค่า Face Recognition ใน Windows Hello",
    "Lock on leave setting enabled": "ตรวจสอบว่าเปิดใช้งาน Lock on leave function อยู่หรือไม่",
    "Presence Detection setting checked": "ตรวจสอบการตั้งค่า Presence Detection",
    "Smart Card Driver Update": "ทดสอบอัปเดต Driver Smart Card Reader",
    "Input volume level checked": "ตรวจสอบระดับเสียง Input ของ Microphone",
    "High CPU usage checked": "ตรวจสอบว่ามีการใช้งาน CPU สูงผิดปกติหรือไม่",
    "Task Manager checked": "ตรวจสอบ Task Manager เพื่อดูโปรแกรมที่ใช้งานทรัพยากรสูง",
    "Fan area cleaned": "ตรวจสอบและทำความสะอาดบริเวณช่องระบายอากาศ",
    "Check temperature / Overheat": "ตรวจสอบอุณหภูมิและอาการเครื่องร้อนผิดปกติ",
    "Key stuck / sunk": "ตรวจสอบว่ามีปุ่มจม ค้าง หรือกดติดอยู่หรือไม่",
    "Power Reset": "รบกวนทำ Power Reset โดยปิดเครื่อง ถอดสายชาร์จ จากนั้นกดปุ่ม Power ค้างประมาณ 30 วินาที แล้วเปิดเครื่องใหม่ครับ",
    "Device Manager shows USB error": "ตรวจสอบใน Device Manager ว่ามี USB error หรือเครื่องหมายแจ้งเตือนที่เกี่ยวข้องกับ USB หรือไม่",
    "Swap USB Port": "รบกวนสลับทดสอบกับพอร์ต USB ช่องอื่นบนเครื่อง แล้วแจ้งผลว่าอาการเดิมหรือใช้งานได้ปกติครับ",
    "Swap USB Device": "รบกวนสลับใช้งานกับอุปกรณ์ USB ตัวอื่นที่ใช้งานได้ แล้วแจ้งผลว่าอาการเดิมหรือใช้งานได้ปกติครับ",
    "Swap USB-C Port": "รบกวนสลับทดสอบกับพอร์ต USB-C ช่องอื่นบนเครื่อง แล้วแจ้งผลว่าอาการเดิมหรือใช้งานได้ปกติครับ",
    "Swap Smart Card": "รบกวนสลับทดสอบด้วย Smart Card ใบอื่นที่ใช้งานได้ แล้วแจ้งผลว่าอาการเดิมหรือใช้งานได้ปกติครับ",
    "Device Manager shows Smart Card Reader": "ตรวจสอบใน Device Manager ว่ายังพบอุปกรณ์ Smart Card Reader หรือไม่",
    "Swap Mouse": "รบกวนสลับทดสอบด้วย Mouse ตัวอื่นที่ใช้งานได้ แล้วแจ้งผลว่าอาการเดิมหรือใช้งานได้ปกติครับ",
    "Mouse test on other machine": "รบกวนนำ Mouse ตัวเดิมไปทดสอบกับเครื่องอื่น แล้วแจ้งผลว่าสามารถใช้งานได้ปกติหรือไม่",
    "Swap Battery": "รบกวนสลับ Battery ก้อนใหม่หรือ Battery ที่ใช้งานได้กับ Mouse แล้วแจ้งผลว่าอาการเดิมหรือใช้งานได้ปกติครับ",

    "Can access Windows": "ตรวจสอบว่าสามารถเข้าสู่ Windows ได้หรือไม่",
    "BIOS detects storage": "ตรวจสอบว่า BIOS สามารถตรวจพบ SSD/HDD ได้หรือไม่",
    "BIOS detects HDD": "ตรวจสอบว่า BIOS สามารถตรวจพบ HDD ได้หรือไม่",
    "Charge LED": "ตรวจสอบว่าไฟแสดงสถานะการชาร์จติดหรือไม่",
    "Adapter test": "ทดสอบใช้งานกับ Adapter ตัวอื่นที่ใช้งานได้",
    "Adapter works with another cord": "ทดสอบ Adapter ร่วมกับสายไฟอีกเส้นที่ใช้งานได้",
    "Another Router test": "ทดสอบเชื่อมต่อกับ Router ตัวอื่นหรือเครือข่ายอื่น",
    "Auto reboot occurs": "ตรวจสอบว่าเครื่องมีอาการ Restart เองหรือไม่",
    "BIOS Fingerprint enabled": "ตรวจสอบว่า Fingerprint ถูก Enable ใน BIOS หรือไม่",
    "BIOS Hotkey mode": "ตรวจสอบการตั้งค่า Hotkey Mode ใน BIOS",
    "BIOS Keyboard Backlight setting": "ตรวจสอบการตั้งค่า Keyboard Backlight ใน BIOS",
    "BIOS Touchpad enabled": "ตรวจสอบว่า Touchpad ถูก Enable ใน BIOS หรือไม่",
    "BIOS default loaded": "โหลดค่า BIOS Default แล้วทดสอบอีกครั้ง",
    "BSOD occurs": "ตรวจสอบว่าเครื่องมีอาการจอฟ้า (BSOD) หรือไม่",
    "Battery Conservation Mode": "ตรวจสอบว่าเปิด Battery Conservation Mode อยู่หรือไม่",
    "Battery charge level checked": "ตรวจสอบระดับ Battery ว่าสามารถชาร์จเพิ่มขึ้นได้หรือไม่",
    "Battery percentage": "ตรวจสอบเปอร์เซ็นต์ Battery ที่แสดงบน Windows",
    "Bluetooth toggle available": "ตรวจสอบว่ามีปุ่มเปิด/ปิด Bluetooth ใน Windows หรือไม่",
    "Boot order checked": "ตรวจสอบลำดับ Boot ใน BIOS ว่าถูกต้องหรือไม่",
    "CMOS battery / RTC check": "ตรวจสอบ CMOS Battery / RTC ว่าทำงานปกติหรือไม่",
    "Can login with another account": "ทดสอบ Login ด้วยบัญชีผู้ใช้อื่น",
    "Check BIOS": "เข้า BIOS เพื่อตรวจสอบการตั้งค่าที่เกี่ยวข้อง",
    "Check LAN pin / damage": "ตรวจสอบขา LAN และร่องรอยชำรุดบริเวณพอร์ต LAN",
    "Check Task Manager usage": "ตรวจสอบการใช้งาน CPU / RAM / Disk ใน Task Manager",
    "Check storage free space": "ตรวจสอบพื้นที่ว่างของ SSD/HDD ว่ายังเพียงพอหรือไม่",
    "Clean scroll wheel": "ทำความสะอาดบริเวณ Scroll Wheel แล้วทดสอบอีกครั้ง",
    "Clean touchpad surface": "ทำความสะอาดพื้นผิว Touchpad แล้วทดสอบอีกครั้ง",
    "ClickPad enabled": "ตรวจสอบว่า ClickPad ถูก Enable อยู่หรือไม่",
    "Customer knows password": "ตรวจสอบว่าลูกค้าทราบรหัสผ่านที่ใช้งานอยู่หรือไม่",
    "Device Manager shows Bluetooth": "ตรวจสอบใน Device Manager ว่ายังพบอุปกรณ์ Bluetooth หรือไม่",
    "Device Manager shows card reader": "ตรวจสอบใน Device Manager ว่ายังพบอุปกรณ์ Card Reader หรือไม่",
    "Disable Touchpad test": "ทดสอบปิด Touchpad แล้วตรวจสอบว่าอาการยังเกิดขึ้นหรือไม่",
    "Driver / Firmware Update": "ทดสอบอัปเดต Driver และ Firmware ที่เกี่ยวข้องเป็นเวอร์ชันล่าสุด",
    "Enable LAN in BIOS": "ตรวจสอบว่า LAN ถูก Enable ใน BIOS หรือไม่",
    "Error photo provided": "รบกวนแนบรูป Error ที่พบเพิ่มเติม",
    "Event Viewer / Dump file collected": "รบกวนเก็บข้อมูล Event Viewer หรือ Dump file เพิ่มเติมเพื่อตรวจสอบ",
    "External mic test": "ทดสอบใช้งานร่วมกับ Microphone ภายนอก",
    "Mouse test": "ทดสอบใช้งานร่วมกับ Mouse ภายนอก",
    "Mouse works": "ตรวจสอบว่า Mouse ภายนอกสามารถใช้งานได้ปกติหรือไม่",
    "FN & Ctrl Swap": "ตรวจสอบการตั้งค่า FN & Ctrl Swap ใน BIOS หรือ Lenovo Vantage",
    "FN Lock checked": "ตรวจสอบสถานะ FN Lock ว่าเปิดหรือปิดอยู่",
    "Freeze occurs": "ตรวจสอบว่าเครื่องมีอาการค้างหรือไม่",

    "Audio Driver Update": "ทดสอบอัปเดต Audio Driver เป็นเวอร์ชันล่าสุด",
    "Camera Driver Update": "ทดสอบอัปเดต Camera Driver เป็นเวอร์ชันล่าสุด",
    "Camera Driver Update / Lenovo Vantage": "ทดสอบอัปเดต Camera Driver และ Lenovo Vantage เป็นเวอร์ชันล่าสุด",
    "Fingerprint Driver Update / Lenovo Vantage": "ทดสอบอัปเดต Fingerprint Driver และ Lenovo Vantage เป็นเวอร์ชันล่าสุด",
    "SD Card Reader Driver Update": "ทดสอบอัปเดต SD Card Reader Driver เป็นเวอร์ชันล่าสุด",
    "Smart Card Driver Update": "ทดสอบอัปเดต Smart Card Driver เป็นเวอร์ชันล่าสุด",
    "Touchpad Driver Update": "ทดสอบอัปเดต Touchpad Driver เป็นเวอร์ชันล่าสุด",
    "TrackPoint Driver Update": "ทดสอบอัปเดต TrackPoint Driver เป็นเวอร์ชันล่าสุด",
    "USB Driver Update / Lenovo Vantage": "ทดสอบอัปเดต USB Driver และ Lenovo Vantage เป็นเวอร์ชันล่าสุด",
    "Swap Headphone": "ทดลองสลับ Headphone ที่ใช้งานได้",
    "Swap HDMI / DisplayPort cable": "ทดลองสลับสาย HDMI หรือ DisplayPort",
    "Graphics Driver Update": "ทดสอบอัปเดต Driver การ์ดจอเป็นเวอร์ชันล่าสุด",
    "Hotkey Driver Update": "ทดสอบอัปเดต Hotkey Driver เป็นเวอร์ชันล่าสุด",
    "Issue occurs all apps": "ตรวจสอบว่าอาการเกิดขึ้นกับทุกโปรแกรมหรือไม่",
    "Keyboard / Touchpad affected by swollen battery": "ตรวจสอบว่า Keyboard / Touchpad ได้รับผลกระทบจาก Battery บวมหรือไม่",
    "Keyboard Online Test": "ทดสอบ Keyboard ผ่าน Online Keyboard Test",
    "Keyboard backlight hotkey test": "ทดสอบปุ่มลัดสำหรับเปิด/ปิดไฟ Keyboard Backlight",
    "Keyboard test on other machine": "นำ Keyboard ไปทดสอบกับเครื่องอื่น",
    "LAN Driver Update": "ทดสอบอัปเดต Driver LAN เป็นเวอร์ชันล่าสุด",
    "Lenovo Hotkey Features update": "ทดสอบอัปเดต Lenovo Hotkey Features เป็นเวอร์ชันล่าสุด",
    "Lenovo Vantage Update": "ทดสอบอัปเดต Lenovo Vantage เป็นเวอร์ชันล่าสุด",
    "Lenovo Vantage setting": "ตรวจสอบการตั้งค่าที่เกี่ยวข้องใน Lenovo Vantage",
    "Load BIOS default": "โหลดค่า BIOS Default แล้วทดสอบอีกครั้ง",
    "Load default BIOS": "โหลดค่า BIOS Default แล้วทดสอบอีกครั้ง",
    "Microphone enhancement disabled": "ทดสอบปิด Microphone Enhancement แล้วทดสอบอีกครั้ง",
    "Monitor test on other machine": "นำ Monitor ไปทดสอบกับเครื่องอื่น",
    "Network boot disabled": "ตรวจสอบว่าได้ปิด Network Boot แล้วหรือไม่",
    "Noise occurs all apps": "ตรวจสอบว่าเสียงผิดปกติเกิดขึ้นกับทุกโปรแกรมหรือไม่",
    "Noise occurs all the time": "ตรวจสอบว่าเสียงผิดปกติเกิดขึ้นตลอดเวลาหรือไม่",
    "Original Adapter used": "ตรวจสอบว่าใช้งาน Adapter เดิมของเครื่องหรือ Adapter ที่รองรับรุ่นนี้",
    "Password / PIN reset": "ทดสอบ Reset Password / PIN ของ Windows",
    "Pixel location confirmed": "ตรวจสอบตำแหน่ง Pixel ที่ผิดปกติบนหน้าจอ",
    "Proof of ownership checked": "ตรวจสอบหลักฐานความเป็นเจ้าของเครื่องตามขั้นตอน",
    "RTC battery / CMOS check": "ตรวจสอบ RTC Battery / CMOS ว่าทำงานปกติหรือไม่",
    "SD Card test on other machine": "นำ SD Card ไปทดสอบกับเครื่องอื่น",
    "SIM card detected": "ตรวจสอบว่าเครื่องสามารถตรวจพบ SIM Card หรือไม่",
    "SIM detected": "ตรวจสอบว่าเครื่องสามารถตรวจพบ SIM หรือไม่",
    "SIM tray damage": "ตรวจสอบถาด SIM ว่ามีร่องรอยชำรุดหรือไม่",
    "Safe Mode test": "ทดสอบใช้งานใน Safe Mode",
    "Secure Boot disabled": "ทดสอบปิด Secure Boot แล้วตรวจสอบอีกครั้ง",
    "Set date and time in BIOS": "ตั้งค่าวันที่และเวลาใน BIOS ให้ถูกต้อง",
    "Specific hotkey listed": "ระบุปุ่ม Hotkey ที่มีปัญหาเพิ่มเติม",
    "Stop code / Error code collected": "รบกวนแจ้ง Stop Code หรือ Error Code ที่พบเพิ่มเติม",
    "Swap AC Power Cord": "ทดสอบสลับสาย AC Power Cord เส้นอื่นที่ใช้งานได้",
    "Swap Adapter / Power Cable": "ทดสอบสลับ Adapter หรือสาย Power Cable ที่ใช้งานได้",
    "Swap Bluetooth Device": "ทดสอบเชื่อมต่อกับอุปกรณ์ Bluetooth ตัวอื่นที่ใช้งานได้",
    "Swap HDMI cable": "ทดสอบสลับสาย HDMI เส้นอื่นที่ใช้งานได้",
    "Swap HDMI / DisplayPort cable": "ทดสอบสลับสาย HDMI/DP เส้นอื่นที่ใช้งานได้",
    "Swap LAN cable": "ทดสอบสลับสาย LAN เส้นอื่นที่ใช้งานได้",
    "Swap SD Card": "ทดสอบสลับ SD Card ใบอื่นที่ใช้งานได้",
    "Swap SIM": "ทดสอบสลับ SIM Card ใบอื่นที่ใช้งานได้",
    "Swap SSD / HDD": "หากสะดวก รบกวนสลับ SSD/HDD ที่ใช้งานได้มาทดสอบ",
    "Swap Wi-Fi / Hotspot": "ทดสอบเชื่อมต่อ Wi-Fi อื่น หรือ Hotspot จากโทรศัพท์มือถือ",
    "Swap App": "ทดสอบใช้งานผ่านโปรแกรมอื่นที่รองรับ",
    "Swap Headphone": "ทดสอบใช้งานร่วมกับหูฟังตัวอื่นที่ใช้งานได้",
    "Swap Keyboard": "ทดสอบสลับ Keyboard ตัวอื่นที่ใช้งานได้",
    "Swap Monitor": "ทดสอบสลับ Monitor ตัวอื่นที่ใช้งานได้",
    "Swap Power Cable": "ทดสอบสลับสาย Power Cable เส้นอื่นที่ใช้งานได้",
    "Swap Power Cord": "ทดสอบสลับสาย Power Cord เส้นอื่นที่ใช้งานได้",
    "Swap Power Outlet": "ทดสอบเสียบใช้งานกับปลั๊กไฟช่องอื่น",
    "System Restore": "ทดสอบทำ System Restore ย้อนกลับไปก่อนเกิดอาการ",
    "Touchpad enabled in Settings": "ตรวจสอบว่า Touchpad ถูกเปิดใช้งานใน Settings ของ Windows หรือไม่",
    "TrackPoint enabled in BIOS": "ตรวจสอบว่า TrackPoint ถูก Enable ใน BIOS หรือไม่",
    "USB Mouse / Keyboard test": "ทดสอบใช้งานร่วมกับ USB Mouse หรือ USB Keyboard ภายนอก",
    "USB to LAN Adapter test": "ทดสอบใช้งานร่วมกับ USB to LAN Adapter",
    "Uninstall Audio Driver and Restart": "ทดสอบถอนติดตั้ง Audio Driver และ Restart เครื่อง",
    "Uninstall Bluetooth Driver and Restart": "ทดสอบถอนติดตั้ง Bluetooth Driver และ Restart เครื่อง",
    "Volume Mixer checked": "ตรวจสอบ Volume Mixer ว่าระดับเสียงถูกต้องหรือไม่",
    "Volume level checked": "ตรวจสอบระดับเสียงของเครื่องว่าไม่ได้ถูกลดไว้ต่ำเกินไป",
    "WLAN / WWAN card changed before issue": "ตรวจสอบว่ามีการเปลี่ยน WLAN / WWAN Card ก่อนเกิดอาการหรือไม่",
    "WWAN Driver Update": "ทดสอบอัปเดต Driver WWAN เป็นเวอร์ชันล่าสุด",
    "WWAN device in Device Manager": "ตรวจสอบใน Device Manager ว่ายังพบอุปกรณ์ WWAN หรือไม่",
    "Windows Installation": "ทดสอบติดตั้ง Windows ใหม่",
    "Video clip provided": "รบกวนแนบคลิปวิดีโอขณะเกิดอาการเพิ่มเติม",
    "Swap USB-A Port": "ทดลองเปลี่ยนไปใช้งานพอร์ต USB-A ช่องอื่นบน Dock",
    "USB Mouse / Keyboard test": "ทดลองใช้งานด้วย USB Mouse หรือ USB Keyboard",
    "Swap USB-C cable": "ทดลองสลับสาย USB-C",
    "Swap Dock": "ทดลองสลับ Dock",
    "Dock Firmware Update": "อัปเดต Dock Firmware ให้เป็นเวอร์ชันล่าสุด",
    "Lenovo Vantage Update": "อัปเดตผ่าน Lenovo Vantage ให้เป็นเวอร์ชันล่าสุด",
    "Swap DisplayPort cable": "ทดลองสลับสาย DisplayPort",
    "Swap HDMI cable": "ทดลองสลับสาย HDMI",
    "HDMI Port on notebook test": "ทดลองเชื่อมต่อจอภาพผ่านพอร์ต HDMI ของเครื่องคอมพิวเตอร์โดยตรง",
    "Wi-Fi test": "ทดลองเชื่อมต่ออินเทอร์เน็ตผ่าน Wi-Fi",
    "Swap LAN cable": "ทดลองสลับสาย LAN",
    "LAN Port on notebook test": "ทดลองเชื่อมต่อสาย LAN เข้ากับเครื่องคอมพิวเตอร์โดยตรง",
    "Built-in Speaker test": "ทดลองใช้งานลำโพงของเครื่องคอมพิวเตอร์",
    "Headphone test": "ทดลองใช้งานด้วย Headphone",
    "Audio Jack on notebook test": "ทดลองเชื่อมต่อ Headphone กับ Audio Jack ของเครื่องคอมพิวเตอร์โดยตรง",
    "Swap Adapter": "ทดลองสลับ Adapter"
  };
  return map[label] || label;
}

function customerStepEN(label){
  const map = {
    "Lenovo Diagnostics": "Please run Lenovo Diagnostics by pressing F10 repeatedly during startup, then select Run All > Quick > Quick Unattended, and let us know whether the result is Pass or Failed.",
    "Lenovo Diagnostics Storage": "Please run Lenovo Diagnostics by pressing F10 repeatedly during startup, then select Run All > Quick > Quick Unattended, and let us know whether the result is Pass or Failed.",
    "Lenovo Diagnostics Battery": "Please run Lenovo Diagnostics by pressing F10 repeatedly during startup, then select Run All > Quick > Quick Unattended, and let us know whether the result is Pass or Failed.",
    "Battery Report collected": "Please generate a Battery Report by opening Command Prompt (CMD), running the command powercfg /batteryreport, and then send us the generated battery-report.html file.",
    "Dump File collected": "Please send us the Minidump files located in C:\\Windows\\Minidump.",
    "Dump file collected": "Please send us the Minidump files located in C:\\Windows\\Minidump.",
    "Minidump collected": "Please send us the Minidump files located in C:\\Windows\\Minidump.",
    "Emergency Reset Hole": "Please perform an Emergency Reset by inserting a pin or paper clip into the Emergency Reset hole on the bottom of the system, press and hold for approximately 10 seconds, then power the system on again.",
    "Power Reset / Emergency Reset": "Please perform Power Reset / Emergency Reset to clear residual power, then let us know whether the issue remains or works fine.",
    "Power Reset": "Please perform a Power Reset by turning the system off, disconnecting the power source, then press and hold the Power button for approximately 30 seconds before turning the system back on.",
    "Can boot into Safe Mode": "Please boot the system into Safe Mode and let us know whether the issue still occurs.",
    "Adapter test on other machine": "Please test the Adapter with another compatible Lenovo machine and let us know whether it works fine.",
    "Swap Adapter": "Please test the system with another working Adapter and let us know whether the issue remains or works fine.",
    "Swap PSU": "Please test the system with another working PSU and let us know whether the issue remains or works fine.",
    "Swap SSD": "If a known-good SSD is available, please swap it for testing and let us know whether the issue remains or works fine.",
    "Swap HDD": "If a known-good HDD is available, please swap it for testing and let us know whether the issue remains or works fine.",
    "Swap RAM": "If known-good RAM is available, please swap it for testing and let us know whether the issue remains or works fine.",
    "Caps Lock LED works": "Check whether the Caps Lock LED responds.",
    "Swap USB Port": "Please test with another USB port on the machine and let us know whether the issue remains or works fine.",
    "Swap USB Device": "Please test with another known-good USB device and let us know whether the issue remains or works fine.",
    "Swap USB-C Port": "Please test with another USB-C port on the machine and let us know whether the issue remains or works fine.",
    "Swap Smart Card": "Please test with another known-good Smart Card and let us know whether the issue remains or works fine.",
    "Device Manager shows Smart Card Reader": "Please check Device Manager and confirm whether the Smart Card Reader is detected.",
    "Swap Mouse": "Please test with another known-good mouse and let us know whether the issue remains or works fine.",
    "Mouse test on other machine": "Please test the same mouse on another machine and let us know whether it works fine.",
    "Swap Battery": "Please replace the mouse battery with a new or known-good battery and let us know whether the issue remains or works fine.",

    "LED on power button": "Check whether the LED on the power button is on.",
    "LED beside Type-C port": "Check whether the LED beside the Type-C charging port is on.",
    "Swap Adapter": "Please test the system with another working Adapter and let us know whether the issue remains or works fine.",
    "Swap other Type-C port": "Test with another Type-C charging port.",
    "Adapter test on other machine": "Test the Adapter with another machine.",
    "Emergency Reset Hole": "Please perform an Emergency Reset by inserting a pin or paper clip into the Emergency Reset hole on the bottom of the system, press and hold for approximately 10 seconds, then power the system on again.",
    "Power Reset": "Please perform a Power Reset by turning the system off, disconnecting the power source, then press and hold the Power button for approximately 30 seconds before turning the system back on.",
    "External Monitor test": "Test with an external monitor.",

    "Audio Driver Update": "Please update the Audio Driver to the latest version.",
    "Camera Driver Update": "Please update the Camera Driver to the latest version.",
    "Camera Driver Update / Lenovo Vantage": "Please update the Camera Driver and Lenovo Vantage to the latest version.",
    "Fingerprint Driver Update / Lenovo Vantage": "Please update the Fingerprint Driver and Lenovo Vantage to the latest version.",
    "SD Card Reader Driver Update": "Please update the SD Card Reader Driver to the latest version.",
    "Smart Card Driver Update": "Please update the Smart Card Driver to the latest version.",
    "Touchpad Driver Update": "Please update the Touchpad Driver to the latest version.",
    "TrackPoint Driver Update": "Please update the TrackPoint Driver to the latest version.",
    "USB Driver Update / Lenovo Vantage": "Please update the USB Driver and Lenovo Vantage to the latest version.",
    "Swap Headphone": "Please test with another known-good headphone.",
    "Swap HDMI / DisplayPort cable": "Please swap the HDMI or DisplayPort cable.",
    "Camera Shutter": "Check whether the Camera Shutter is closed.",
    "Device Manager shows Camera": "Check if the Camera device appears in Device Manager.",
    "Windows Camera App": "Test the camera using the Windows Camera application.",
    "Uninstall Camera Driver and Restart": "Uninstall the Camera driver and restart the machine.",
    "BIOS Camera enabled": "Check whether Camera is enabled in BIOS.",
    "Swap USB-A Port": "Test another USB-A port on the Dock.",
    "USB Mouse / Keyboard test": "Test with a USB mouse or USB keyboard.",
    "Swap USB-C cable": "Swap the USB-C cable.",
    "Swap Dock": "Swap the Dock.",
    "Dock Firmware Update": "Update the Dock Firmware to the latest version.",
    "Lenovo Vantage Update": "Update through Lenovo Vantage to the latest version.",
    "Swap DisplayPort cable": "Swap the DisplayPort cable.",
    "Swap HDMI cable": "Swap the HDMI cable.",
    "HDMI Port on notebook test": "Test the monitor through the HDMI port on the computer.",
    "Wi-Fi test": "Test the internet connection through Wi-Fi.",
    "Swap LAN cable": "Swap the LAN cable.",
    "LAN Port on notebook test": "Connect the LAN cable directly to the computer.",
    "Built-in Speaker test": "Test the built-in speaker on the computer.",
    "Headphone test": "Test with a headphone.",
    "Audio Jack on notebook test": "Connect the headphone directly to the audio jack on the computer.",
    "Swap Adapter": "Swap the Adapter.",
    "Physical damage / Liquid spilled": "Check for any physical damage or liquid damage.",
    "Other issue": "Please confirm if there are any other issues with the machine."
  };
  return map[label] || label;
}

function emailFromChecklist(lang){
  if(isManual()) return lang === "EN" ? current().emailEN : current().emailTH;

  const q = getQuestions().map(x => x.label);

  if(lang === "EN"){
    let lines = [
      "Please perform the troubleshooting steps below."
    ];
    q.forEach((item, i) => lines.push(`${i+1}. ${customerStepEN(item)}`));
    lines.push("", "Once completed, please let us know the result so we can proceed with the next step.");
    return lines.join("\n");
  }

  let lines = [
    "รบกวนช่วยทดสอบและตรวจสอบเบื้องต้นตามขั้นตอนดังนี้ครับ"
  ];
  q.forEach((item, i) => lines.push(`${i+1}. ${customerStepTH(item)}`));
  lines.push("", "หากดำเนินการเรียบร้อยแล้ว รบกวนแจ้งผลกลับ เพื่อให้ทางเราดำเนินการในขั้นตอนถัดไปครับ");
  return lines.join("\n");
}


function setNote(text){ el("note").value = text; }
function generateNote(){
  gaTrack("generate_note", {
    level1: getLevelName(),
    symptom: getSymptomName()
  });
  setNote(generateText());
  updateRecommendation();
}
function copyGuide(){ setNote(isManual() ? current().guide : guideFromChecklist()); }
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
