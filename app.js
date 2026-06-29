
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
    charging: ["typec", "runtime", "swollen", "slow_charge", "not_detect"],
    touchpad: ["cursor", "click", "jump", "track"],
    camera: ["face_recognition", "lock_on_leave"],
    keyboard: ["backlight", "fn", "left_ctrl"],
    network: ["wwan", "sim"],
    error: ["e0190"]
  },
  aio: {
    charging: ["typec", "runtime", "swollen", "slow_charge", "not_detect"],
    touchpad: ["cursor", "click", "jump", "track"],
    camera: ["lock_on_leave"],
    keyboard: ["backlight", "fn", "left_ctrl"],
    network: ["wwan", "sim"],
    error: ["e0190"]
  },
  ideapad: {
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
  // FRU P/N should only be requested for external replaceable items.
  if(selectedLevel === "mouse") return true; // External Mouse
  if(selectedLevel === "adapter_power") return true; // Adapter / Power cord
  if(selectedLevel === "monitor") return true; // Monitor
  const part = (current().defaultPart || "").toLowerCase();
  return part.includes("external mouse") || part.includes("external keyboard") || part.includes("adapter") || part.includes("power cord") || part.includes("monitor");
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
  if(sym.questions && sym.questions[product]) qs = sym.questions[product];
  else if(sym.common) qs = sym.common;
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
  if(selectedLevel === "error" && sym.description){
    const div = document.createElement("div");
    div.className = "error-description";
    div.textContent = "คำอธิบาย : " + sym.description;
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

function calculate(){
  const sym = withDisplayQuestions(current());
  const ans = answers();

  for(const r of ans){
    if(r.a.startsWith("Failed")){
      const detail = r.a.replace("Failed", "").replace(":", "").trim();
      return {result:"Dispatch", part: detail || sym.defaultPart};
    }
  }

  if(sym.defaultResult === "Escalate L2") return {result:"Escalate L2", part:sym.defaultPart || "-"};
  if(sym.defaultResult === "CID") return {result:"CID", part:sym.defaultPart || "-"};

  for(const r of ans){
    if((r.q.includes("Swap Adapter") || r.q.includes("Adapter test")) && r.a === "Work fine") return {result:"Dispatch", part:"Adapter"};
    if((r.q.includes("AC power cord") || r.q.includes("power cable") || r.q.includes("power cord")) && r.a === "Work fine") return {result:"Dispatch", part:"Power Cord"};
    if((r.q.includes("Swap HDMI") || r.q.includes("Swap HDMI/DP")) && r.a === "Work fine") return {result:"Dispatch", part:"HDMI / DP Cable"};
    if(r.q.includes("Swap LAN cable") && r.a === "Work fine") return {result:"Dispatch", part:"LAN Cable"};
    if(r.q.includes("Swap USB device") && r.a === "Work fine") return {result:"Dispatch", part:"USB Device"};
    if(r.q.includes("Swap USB port") && r.a === "Work fine") return {result:"Dispatch", part:"USB Port"};
    if(r.q.includes("External Monitor") && r.a === "Work fine") return {result:"Dispatch", part:"LCD Panel"};
    if(r.q.includes("External Monitor") && r.a === "Same issue") return {result:"Dispatch", part:"Mainboard"};
    if(r.q.includes("Monitor tested on another machine") && r.a === "Same issue") return {result:"Dispatch", part:"Monitor"};
    if(r.q.includes("Monitor tested on another machine") && r.a === "Work fine") return {result:"Dispatch", part:"PC / Graphics Output"};
    if(r.q.includes("Swap monitor test") && r.a === "Work fine") return {result:"Dispatch", part:"Monitor"};
    if((r.q.includes("USB keyboard") || r.q.includes("Swap keyboard") || r.q.includes("Keyboard test with other machine") || r.q.includes("On-Screen Keyboard")) && r.a === "Work fine") return {result:"Dispatch", part:"Keyboard"};
    if(r.q.includes("USB keyboard") && r.a === "Same issue") return {result:"Dispatch", part:"Mainboard"};
    if(r.q.includes("Swap SSD / HDD test") && r.a === "Work fine") return {result:"Dispatch", part:"SSD / HDD"};
    if(r.q.includes("Swap SSD test") && r.a === "Work fine") return {result:"Dispatch", part:"SSD"};
    if(r.q.includes("Swap HDD test") && r.a === "Work fine") return {result:"Dispatch", part:"HDD"};
    if(r.q.includes("Swap RAM test") && r.a === "Work fine") return {result:"Dispatch", part:"RAM"};
    if(r.q.includes("Swap Smart Card test") && r.a === "Work fine") return {result:"Dispatch", part:"Smart Card Reader"};
    if(r.q.includes("Swap SIM test") && r.a === "Work fine") return {result:"Dispatch", part:"SIM Tray / WWAN Card"};
    if((r.q.includes("Swap mouse") || r.q.includes("Mouse test on another machine")) && r.a === "Work fine") return {result:"Dispatch", part:"Mouse Replacement"};
    if((r.q.includes("External mouse test") || r.q.includes("External mouse works")) && (r.a === "Work fine" || r.a === "Yes")) return {result:"Dispatch", part:sym.defaultPart || "Touchpad / ClickPad"};
    if((r.q.includes("Headphone test") || r.q.includes("Swap headphone")) && r.a === "Work fine") return {result:"Dispatch", part:"Speaker"};
    if(r.q.includes("External mic test") && r.a === "Work fine") return {result:"Dispatch", part:"Microphone"};
    if(r.q.includes("Swap Bluetooth device") && r.a === "Work fine") return {result:"Dispatch", part:"Bluetooth Device / WLAN Card"};
    if((r.q.includes("Swap SD Card") || r.q.includes("SD Card test")) && r.a === "Work fine") return {result:"Dispatch", part:"SD Card Reader"};
    if(r.q.includes("Novo Button") && r.a === "Yes") return {result:"Dispatch", part:"Power Button / Top Cover"};
  }

  return {result:sym.defaultResult || "Dispatch", part:sym.defaultPart || "-"};
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
  const rec = calculate();
  const box = el("recommendation");
  box.innerHTML = `Result : ${rec.result}<br>Part : ${rec.part}`;
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
  return `- ${label.toLowerCase()} - ${String(answer).toLowerCase()}`;
}

function generateText(){
  if(isManual()) return current().guide;
  const lines = [current().name, ""];

  answers().forEach(r => {
    if(r.a && r.a !== "-- Select --") lines.push(formatNoteLine(r.q, r.a));
  });

  const extra = getAdditionalDetail();
  if(extra){
    extra.split(/\r?\n/).map(x => x.trim()).filter(Boolean).forEach(x => lines.push(`- ${x}`));
  }

  const rec = calculate();
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
    "LED on power button": "ตรวจสอบว่าไฟแสดงสถานะบริเวณปุ่ม Power ติดหรือไม่",
    "LED beside Type-C port": "ตรวจสอบว่าไฟแสดงสถานะบริเวณช่องชาร์จ Type-C ติดหรือไม่",
    "LED beside charging port": "ตรวจสอบว่าไฟแสดงสถานะบริเวณช่องชาร์จติดหรือไม่",
    "Power LED": "ตรวจสอบว่าไฟแสดงสถานะของตัวเครื่องติดหรือไม่",
    "Fan spinning": "ตรวจสอบว่าพัดลมหมุนหรือไม่",
    "Swap Adapter test": "ทดสอบสลับ Adapter",
    "Swap other Type-C port test": "ทดสอบสลับพอร์ตชาร์จ Type-C",
    "Adapter test with another machine": "นำ Adapter ไปทดสอบกับเครื่องอื่น",
    "Adapter test with other machine": "นำ Adapter ไปทดสอบกับเครื่องอื่น",
    "Emergency Reset Hole": "ทดสอบ Emergency Reset โดยใช้คลิปหนีบกระดาษ (Paper Clip) กดรู Emergency Reset ค้างประมาณ 5–10 วินาที แล้วเปิดเครื่องใหม่",
    "Power Reset": "ถอด Adapter ออก กดปุ่ม Power ค้างประมาณ 15–20 วินาที จากนั้นเปิดเครื่องใหม่",
    "Novo Button": "ทดสอบกดปุ่ม Novo Button เพื่อตรวจสอบว่าเครื่องตอบสนองหรือไม่",
    "External Monitor test": "ทดสอบต่อใช้งานกับจอภายนอก (External Monitor)",
    "Clean / Reseat RAM": "ทดสอบถอดทำความสะอาดและใส่ RAM ใหม่",
    "Beep code / pattern": "ตรวจสอบจำนวนเสียง Beep หรือรูปแบบเสียง Beep ที่เกิดขึ้น",
    "Can boot into BIOS": "ตรวจสอบว่าสามารถเข้า BIOS ได้หรือไม่",
    "Can boot into Safe Mode": "ตรวจสอบว่าสามารถเข้า Safe Mode ได้หรือไม่",
    "Windows Startup Repair": "ทดสอบ Startup Repair ของ Windows",
    "Lenovo Diagnostics": "ทดสอบ Lenovo Diagnostics และแจ้งผล Pass หรือ Failed",
    "Lenovo Diagnostics Storage": "ทดสอบ Lenovo Diagnostics ในส่วน Storage และแจ้งผล Pass หรือ Failed",
    "Lenovo Diagnostics Battery": "ทดสอบ Lenovo Diagnostics ในส่วน Battery และแจ้งผล Pass หรือ Failed",
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
    "USB keyboard test": "ทดสอบใช้งานด้วย USB Keyboard ภายนอก",
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
    "Battery Report collected": "รบกวนดึง Battery Report เพื่อตรวจสอบเพิ่มเติม",
    "Battery Health in Lenovo Vantage": "ตรวจสอบ Battery Health ผ่าน Lenovo Vantage",
    "Battery swollen confirmed": "ตรวจสอบว่า Battery มีอาการบวมหรือไม่",
    "Photo provided": "รบกวนแนบรูปถ่ายเพิ่มเติมเพื่อตรวจสอบ",
    "Stop using device advised": "หาก Battery บวม รบกวนหยุดใช้งานเครื่องชั่วคราวเพื่อความปลอดภัย",
    "Power Reset / Emergency Reset": "ทดสอบ Power Reset / Emergency Reset เพื่อเคลียร์ไฟของตัวเครื่อง",
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
    "Power Reset": "ถอด Adapter ออก กดปุ่ม Power ค้างประมาณ 15–20 วินาที จากนั้นเปิดเครื่องใหม่",
    "Device Manager shows USB error": "ตรวจสอบใน Device Manager ว่ามี USB error หรือไม่",
    "Video clip provided": "รบกวนแนบคลิปวิดีโอขณะเกิดอาการเพิ่มเติม"
  };
  return map[label] || label;
}

function customerStepEN(label){
  const map = {
    "LED on power button": "Check whether the LED on the power button is on.",
    "LED beside Type-C port": "Check whether the LED beside the Type-C charging port is on.",
    "Swap Adapter test": "Test with another working Adapter.",
    "Swap other Type-C port test": "Test with another Type-C charging port.",
    "Adapter test with another machine": "Test the Adapter with another machine.",
    "Emergency Reset Hole": "Perform Emergency Reset using a paper clip for about 5–10 seconds.",
    "Power Reset": "Disconnect the Adapter, press and hold the Power button for about 15–20 seconds, then power on again.",
    "External Monitor test": "Test with an external monitor.",
    "Camera Shutter": "Check whether the Camera Shutter is closed.",
    "Device Manager shows Camera": "Check if the Camera device appears in Device Manager.",
    "Windows Camera App": "Test the camera using the Windows Camera application.",
    "Uninstall Camera Driver and Restart": "Uninstall the Camera driver and restart the machine.",
    "BIOS Camera enabled": "Check whether Camera is enabled in BIOS.",
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
    ensureSelectionAvailable();
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
