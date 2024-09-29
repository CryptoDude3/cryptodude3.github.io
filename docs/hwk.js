var editorinfo = {};
var props = {"Factory":[
{name:"cash",title:"Set Cash",action:function(s){editorinfo.userdata.cash=s;},crash:"true"}
],"Tower":[
{name:"stage",title:"Set Stage",action:function(s){editorinfo.userdata.stage=s;},crash:"true"},
{name:"alive",title:"Set Alive(0 is false 1 is true)",action:function(s){editorinfo.userdata.alive=parseInt(s)?true:false;}}
],"Defense2":[
{name:"round",title:"Set Round",action:function(s){editorinfo.userdata.round=s;},crash:"true"},
{name:"alive",title:"Set Alive(0 is false 1 is true)",action:function(s){editorinfo.userdata.alive=parseInt(s)?true:false;}}
],"Defense":[
{name:"round",title:"Set Round",action:function(s){editorinfo.userdata.round=s;}},
{name:"alive",title:"Set Alive(0 is false 1 is true)",action:function(s){editorinfo.userdata.alive=parseInt(s)?true:false;}}
],"Kingdom":[
{name:"guests",title:"Set Guests",action:function(s){editorinfo.userdata.guests=s;},crash:"true"},
],"Cafe":[
{name:"day",title:"Set Day",action:function(s){editorinfo.userdata.day=s;},crash:"true"},
{name:"alive",title:"Set Alive(0 is false 1 is true)",action:function(s){editorinfo.userdata.alive=parseInt(s)?true:false;}}
],"Brawl":[
{name:"level",title:"Set Level",action:function(s){editorinfo.userdata.level=s;},crash:"true"}
]};
var globalprops = [
{title:"Set Incorrects",getVal:function(){var i = 0;Object.values(editorinfo.userdata.incorrects).forEach(e=>{i+=e;});return i;},action:function(s){editorinfo.userdata.incorrects=generateObject(parseInt(s));}},
{title:"Set Corrects",getVal:function(){var i = 0;Object.values(editorinfo.userdata.corrects).forEach(e=>{i+=e;});return i;},action:function(s){editorinfo.userdata.corrects=generateObject(parseInt(s));}}
];
if(localStorage.hwkid){document.querySelector("#hwkurl").value=localStorage.hwkid;}
async function edit(){
if(editorinfo.fetching){errorBar("Homework is being fetched, please wait...");}
var hwkid = getHwkId(document.querySelector("#hwkurl").value);
editorinfo.fetching = true;
updateStatus("Fetching homework...");
var hwk = await getHomework(hwkid);
editorinfo.fetching = false;
if(hwk){console.log(hwk);if(hwk.results.length<1){errorBar("No Users Found!");return;}localStorage.hwkid = hwkid;editorinfo.hwk = hwk;editorinfo.connected = true;editorinfo.selectedUser=hwk.results[0].name;renderEditor(hwk);if(hwk.results.length<1){errorBar("Can't edit if there are no players!");return;}updateStatus("Fetched");}
else{updateStatus("Ready");}
}
async function joinhwk(hwid,name){
var token = await fetch("https://blooket.schoolcheats.net/api/proxy/play.blooket.com/api/playersessions/homework",{"body": JSON.stringify({hwId:hwid}),"method": "POST","credentials": "include"
}).then(e=>e.json());
await fetch("https://blooket.schoolcheats.net/api/proxy/towerofdoom.blooket.com/api/homeworks/join", {
  "body": JSON.stringify({t:token.t,name:name}),
  "method": "PUT",
  "credentials": "include"
});
return token.t;}
async function setData(userid,data){var f = await fetch("https://blooket.schoolcheats.net/api/proxy/towerofdoom.blooket.com/api/results",{"body": JSON.stringify({t:userid,data:data}),"method": "PUT","mode": "cors","credentials": "include"
});if(f.status===200){return true;}else{return false;}}
function getUser(username){
if(!editorinfo.connected){errorBar("Editor isn't connected!");}
var user = editorinfo.hwk.results.filter(e=>e.name===username);
if(user.length<1){errorBar("No user found with name "+username+"!");return;}
var usr = user[0];
return usr;
}
async function updateUser(username,data){
var user = getUser(username);
if(!user){return;}
if(await setData(pwnId(user._id),data)){
editorinfo.hwk.results[editorinfo.hwk.results.map(e=>e.name).indexOf(username)].data = data;
} else {errorBar("Updating user failed!");}
}
async function getHomework(hwid){var res = await fetch(`results?id=${hwid}`);if(res.status===404){errorBar("Homework not found!");return;}else if(res.status===401){errorBar("Bot is not logged in! Send ducklife a DM!");return;}else if(res.status===400){errorBar("Homework not found!");return;}else if(res.status!=200){errorBar("Server returned unexpected " + res.status + "!");}return res.json();}
//data is like {corrects:{1:54},incorrects:{1:6},alive:true}

function getHwkId(url){var t = new URLSearchParams(url.split("?")[1]);if(t.get("hwId")){
return t.get("hwId");}else{return url;}}
function pwnId(token){return (BigInt(`0x${token}`)-BigInt(1)).toString(16)};
updateStatus("Ready");

function renderEditor(hwk){
var gm = hwk.metaData.settings.type;
console.log("Game type: "+gm);
editorinfo.gm = gm;
var c = document.getElementById("ctrlpanel");
var cpanel = document.createElement("div");
cpanel.className = "ctrlpanel";
var codep = document.getElementById("cc");
codep.style.display="none";c.appendChild(createNormText("Editor Successful! Type: " + gm));
c.appendChild(createUserList(editorinfo.hwk.results.map(e=>e.name)));
c.appendChild(cpanel);
var b = document.createElement("button");
b.innerHTML = "Save";
b.addEventListener("click",function(){saveData(b);});
c.appendChild(b);
c.appendChild(createNormText(`View as Host: <a href="https://dashboard.blooket.com/homework/${editorinfo.hwk.metaData._id}" target="_blank">here</a>`));
renderProps(editorinfo.selectedUser);
}
function renderProps(e){
editorinfo.selectedUser = e;
editorinfo.userdata = editorinfo.hwk.results[editorinfo.hwk.results.map(e=>e.name).indexOf(e)].data;
var cpanel = document.querySelector(".ctrlpanel");
cpanel.innerHTML="";
var pcon = createPropsContainer();
if(props[editorinfo.gm]){
props[editorinfo.gm].forEach(e=>{
cpanel.appendChild(createInp(e.title,e.action,editorinfo.userdata[e.name]));
});}
globalprops.forEach(e=>{
cpanel.appendChild(createInp(e.title,e.action,e.getVal()));
});
}
async function saveData(a){
a.innerHTML = "Saving data...";
await updateUser(editorinfo.selectedUser,editorinfo.userdata);
a.innerHTML = "Save";
}
/*
var a = [];for(var i = 0;i<editorinfo.hwk.metaData.questions.length;i++){a.push(i);}function pickRandom(){var ind = Math.floor(Math.random()*a.length),rv=a[ind];a.splice(ind,1);return rv;}
*/
function shuffle(r){for(var a=r.length-1;a>0;a--){var f=Math.floor(Math.random()*(a+1));[r[a],r[f]]=[r[f],r[a]]}return r}
function gena(l){var a=[];for(var i=0;i<l;i++){a[i]=i}return shuffle(a);}
function generateObject(c){
    if(c>50000){errorBar("Using unsafe method!");return {1:c};}
    var robj = {};
    var qlen = editorinfo.hwk.metaData.questions.length;
    var fa = gena(qlen);
    var amt = Math.floor(c/qlen);
    if(amt>0){
    for(var i = 0;i<qlen;i++){robj[fa[i].toString()]=amt;}
    for(var i = 0;i<(c%qlen);i++){robj[fa[i].toString()]+=1;}}else{
    for(var i = 0;i<(c%qlen);i++){robj[fa[i].toString()]=1;}
    }
    return robj;
}
//DOM Functions:
function createUserList(users){var div = document.createElement("div");div.className="ucontainer";div.appendChild(createNormText("Select User: "));var iv = document.createElement("select");iv.className="userselect";users.sort().forEach(e=>{var opt = document.createElement("option");opt.innerText=e;iv.appendChild(opt);});iv.addEventListener("change",function(e){renderProps(e.srcElement.value);});div.appendChild(iv);return div;}
function createNormText(text){var a = document.createElement("div");a.className="normtext";a.innerHTML=text;return a;}
function createPropsContainer(){
var a = document.createElement("div");
a.className="cheatcontainer";
return a;
}
function updateStatus(text){var s = document.getElementById("status");s.innerText="Status: "+text;}
function createButton(text,clickaction){var button = document.createElement("button");button.innerText=text;button.addEventListener("click",function(){clickaction(button);});return button;}
function renderCheats(gm){
var c = document.getElementById("ctrlpanel");
var codep = document.getElementById("cc");
codep.style.display="none";c.appendChild(createNormText("Editor Running! Type: " + gm));
if(cheats[gm]){c.appendChild(createNormText("Cheats: ")); var chc = createCheatContainer();
cheats[gm].forEach(e=>{
switch(e.type){case "button":chc.appendChild(createButton(e.name,e.action));break;case "input":chc.appendChild(createInp(e.name,e.action));break;case "select":chc.appendChild(createSel(e.name,e.computed,e.action));break;case "staticsel":chc.appendChild(createStaticSel(e.name,e.values,e.action));break;default:console.log("Unsupported!");break;}
});
c.appendChild(chc);}
c.appendChild(createNormText("Global Cheats:"));
c.appendChild(createGlobalContainer());
}
function finishG(){var cp = document.getElementById("ctrlpanel");
var cc = document.getElementById("cc");
cp.innerHTML="";cc.style.display="block";errorBar("Game Ended!");}
function createInp(text,action,val){var inp = document.createElement("div");inp.className="inputcontainer";var ti = document.createElement("div");ti.innerText=text+":";inp.appendChild(ti);var iv = document.createElement("input");iv.addEventListener("change",function(e){action(e.srcElement.value);});iv.value = val;inp.appendChild(iv);inp.addEventListener("click",function(e){if(e.target===iv){return;}action(iv.value);});return inp;}
//cpval is computed value function, call it to compute select options in array form

function createSel(text,cpval,action){var inp = document.createElement("div");inp.className="inputcontainer";var ti = document.createElement("div");ti.innerText=text+":";inp.appendChild(ti);var iv = document.createElement("select");iv.innerHTML="<option>Click to update</option>";
iv.addEventListener("click",function(e){var rvals = cpval(iv);if(rvals){iv.innerHTML="";rvals.sort().forEach(e=>{var opt = document.createElement("option");opt.innerText=e;iv.appendChild(opt);});}});
inp.appendChild(iv);inp.addEventListener("click",function(e){if(e.target===iv){return;}action(iv.value);});return inp;}

function createGlobalContainer(){
var chc = createCheatContainer();
global.forEach(e=>{
switch(e.type){case "button":chc.appendChild(createButton(e.name,e.action));break;case "input":chc.appendChild(createInp(e.name,e.action));break;case "select":chc.appendChild(createSel(e.name,e.computed,e.action));break;case "staticsel":chc.appendChild(createStaticSel(e.name,e.values,e.action));break;default:console.log("Unsupported!");break;}
});
return chc;
}
function createStaticSel(text,vals,action){var inp = document.createElement("div");inp.className="inputcontainer";var ti = document.createElement("div");ti.innerText=text+":";inp.appendChild(ti);var iv = document.createElement("select");vals.sort().forEach(e=>{var opt = document.createElement("option");opt.innerText=e;iv.appendChild(opt);});inp.appendChild(iv);inp.addEventListener("click",function(e){if(e.target===iv){return;}action(iv.value);});return inp;}
function findGameCode(str) {
  const regex = /\b\d{7}\b/;
  const match = str.match(regex);
  if (match) {
    return match[0];
  } else {
    return null;
  }
}
