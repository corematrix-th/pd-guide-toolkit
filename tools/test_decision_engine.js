#!/usr/bin/env node
'use strict';
const fs=require('fs'), path=require('path'),vm=require('vm'),assert=require('assert');
const root=path.resolve(__dirname,'..');
const source=fs.readFileSync(path.join(root,'assets/js/decision_engine.js'),'utf8');
const ctx={window:{}};vm.createContext(ctx);vm.runInContext(source,ctx);
const evaluate=ctx.window.PDDecisionEngine.evaluate;
const a=obj=>Object.entries(obj).map(([q,v])=>({q,a:v}));
const decision=(model,level,symptom,answers,defaultPart='Mainboard')=>evaluate({model,level,symptom,answers:a(answers),defaultPart});
let checks=0;
function expect(model,level,symptom,answers,result,part){const r=decision(model,level,symptom,answers);assert.strictEqual(r.result,result,JSON.stringify(r));if(part)assert.strictEqual(r.part,part,JSON.stringify(r));checks++;return r;}
const noPower={'Power LED':'No','Charge LED':'No','Emergency Reset':'Same Issue','Swap Other Type-C Port':'Same Issue','Swap Adapter':'Same Issue'};
expect('thinkpad','boot','no_power',noPower,'Dispatch','Mainboard');
expect('ideapad','boot','no_power',noPower,'Dispatch','Mainboard');
expect('thinkpad','boot','no_power',{...noPower,'Any Other Issue':'No'},'Dispatch','Mainboard');
expect('thinkpad','boot','no_power',{...noPower,'Any CID':'Yes'},'CID');
expect('thinkpad','boot','no_power',{...noPower,'Swap Other Type-C Port':'Not Test'},'Suspect','Mainboard');
expect('thinkpad','boot','no_power',{...noPower,'Swap Adapter':'-- Select --'},'Suspect','Mainboard');
expect('thinkpad','boot','no_power',{...noPower,'Swap Adapter':'Working'},'Dispatch','Adapter');
expect('thinkpad','boot','no_power',{...noPower,'Power LED':'Yes'},'Select "Boot → Power On No Display"');
expect('thinkpad','boot','pond',{'Power LED':'Yes','Caps Lock Toggle':'No','External Monitor Test':'Same Issue'},'Dispatch','Mainboard');
expect('thinkpad','boot','pond',{'Power LED':'No','Caps Lock Toggle':'Yes'},'Verify Checklist');
expect('thinkpad','boot','pond',{'Power LED':'No'},'Select "Boot → No Power"');
expect('thinkpad','display','black_screen',{'External Monitor Test':'Same Issue'},'Select "Boot → Power On No Display"');
expect('thinkpad','display','black_screen',{'External Monitor Test':'Working'},'Suspect','LCD Panel / Display Cable');
expect('thinkpad','network','wifi',{'WLAN Status Check':'On','Airplane Mode Check':'Off','Hotspot Test':'Same Issue','Port LAN Test':'Same Issue','Windows Update':'Same Issue','WLAN Driver Update':'Same Issue','Check BIOS Settings':'Not Test'},'Suspect','Network Controller / Mainboard');
expect('thinkpad','network','wifi',{'Hotspot Test':'Same Issue','Port LAN Test':'Same Issue','Check BIOS Settings':'Enabled'},'Suspect','Network Controller / Mainboard');
expect('thinkpad','network','wifi',{'Hotspot Test':'Same Issue','WLAN Driver Update':'Same Issue'},'Suspect','WLAN Card');
expect('thinkpad','network','wifi',{'Swap LAN cable':'Working'},'Dispatch','LAN Cable');
expect('thinkpad','network','wifi',{'WLAN Driver Update':'Working'},'Pending'); // isolated driver update isn't universally FOP without explicit applicable recovery rule
expect('thinkpad','storage','ssd',{'BIOS detects storage':'No'},'Suspect');
expect('thinkpad','fan','fan_error',{'BIOS Update':'Same Issue','Load BIOS Default':'Same Issue'},'Suspect','Fan');
expect('thinkpad','fan','fan_error',{'Lenovo Diagnostics':'Failed'},'Dispatch','Fan');
expect('desktop','boot','no_power',{'Swap Power Cable':'Same Issue','Swap Power Outlet':'Same Issue'},'Suspect','Mainboard');
expect('desktop','boot','no_power',{'Swap PSU':'Working'},'Dispatch','PSU');
expect('thinkpad','network','wifi',{'Any Other Issue':'No'},'Pending');
expect('thinkpad','network','wifi',{'Any CID':'Yes'},'CID');
expect('thinkpad','network','wifi',{'Windows Update':'Working'},'FOP');
expect('thinkpad','network','wifi',{'Lenovo Diagnostics':'Failed'},'Suspect');
expect('thinkpad','network','wifi',{'Hotspot Test':'Same Issue'},'Pending');
// Product-dependent distinctions, CID priority and no unverified dispatch in arbitrary cases.
for(const model of ['thinkpad','ideapad','desktop','tiny','aio']){
 for(const level of ['boot','network','display','storage','port','battery','fan','keyboard','audio','dock']){
  for(const symptom of ['no_power','wifi','black_screen','misc']){
    const r=evaluate({model,level,symptom,answers:a({'Any Other Issue':'No','Windows Update':'Same Issue'}),defaultPart:'Mainboard'});
    assert.notStrictEqual(r.result,'Dispatch',model+level+symptom);checks++;
  }
 }
}
console.log(JSON.stringify({status:'PASS',checks,engineVersion:ctx.window.PDDecisionEngine.version}));
