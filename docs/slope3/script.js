function searchFor(str){let buffer = new Uint8Array(gameInstance.Module.wasmMemory.buffer);
for(var i = 0;i<buffer.length;i+=2048){
const buf = [...buffer.subarray(i,i+2048)].map(e=>String.fromCharCode(e)).join("");if(buf.includes(str)){console.log(i+buf.indexOf(str));}}}
function read(loc,len){return [...new Uint8Array(gameInstance.Module.wasmMemory.buffer).subarray(loc,loc+len)].map(e=>String.fromCharCode(e)).join("");}

//actual stuff that hacks the game
function read32(loc){return new Uint32Array(gameInstance.Module.wasmMemory.buffer)[loc/4];}
function read16(loc){return new Uint16Array(gameInstance.Module.wasmMemory.buffer)[loc/2];}
function set16(loc,val){return new Uint16Array(gameInstance.Module.wasmMemory.buffer)[loc/2] = val;}
function read8(loc){return new Uint8Array(gameInstance.Module.wasmMemory.buffer)[loc];}
function set8(loc,val){new Uint8Array(gameInstance.Module.wasmMemory.buffer)[loc] = val;}
function set32(loc,val){new Uint32Array(gameInstance.Module.wasmMemory.buffer)[loc/4] = val;}
function setFloat32(loc,val){new Float32Array(gameInstance.Module.wasmMemory.buffer)[loc/4] = val;}
function readFloat32(loc){return new Float32Array(gameInstance.Module.wasmMemory.buffer)[loc/4];}
function readString(ptr){let str = "";const len = read32(ptr+0x8);for(var i = 0;i<len*2;i+=2){str+=String.fromCharCode(read16(ptr+0xC+i));}return str;}
function writeString(ptr,str){set32(ptr+0x8,str.length);for(let i = 0;i<str.length*2;i+=2){set16(ptr+0xC+i,str.charCodeAt(i/2))}}
function readVec3(ptr){return {x:readFloat32(ptr),y:readFloat32(ptr+0x4),z:readFloat32(ptr+0x8)};}
function setVec3(ptr,vec){if(vec.x==undefined||vec.y==undefined||vec.z==undefined){throw "Vector3 must have an x, y, and z!";}}
function readQuat(ptr){return {x:readFloat32(ptr),y:readFloat32(ptr+0x4),z:readFloat32(ptr+0x8),w:readFloat32(ptr+0xC)};}
function setQuat(ptr,vec){if(vec.x==undefined||vec.y==undefined||vec.z==undefined||vec.w==undefined){throw "Quaternion must have an x, y, z, and w!";}setFloat32(ptr,vec.x);setFloat32(ptr+0x4,vec.y);setFloat32(ptr+0x8,vec.z);setFloat32(ptr+0xC,vec.w);}
window.addrs = {};
function loadHacks(){
addrs.gamemanager = 0x0114ae00;
addrs.score = gamemanager+0x30;//int
//-----------------------------------
addrs.camControl = read32(gamemanager + 0x10);//CameraController
addrs.cam = read32(camControl + 0x18);//camera
addrs.camDied = camControl+0x30;//bool
addrs.camAllowed = camControl + 0x1c;//bool
addrs.camStartPos = read32(camControl + 0x10);//Transform
//-----------------------------------
addrs.ballControl = read32(gamemanager + 0xC);//BallMovementControl
addrs.speedUp = ballControl + 0x34;//bool
addrs.floatSpeedUpTime = ballControl + 0x3C;//float
addrs.floatPushTime = ballControl + 0x38;//float
addrs.firstTouchGround = ballControl+ 0x40;//bool
addrs.ballDied = ballControl + 0x48;//bool
//-----------------------------------
addrs.buildingSpawner = read32(gamemanager + 0x24);//BuildingSpawnControl
//-----------------------------------
addrs.movementForceControl = read32(ballControl + 0xC);//BallMovementForceControl
addrs.yForce = movementForceControl + 0xC;//float
addrs.zForce = movementForceControl + 0x10;//float
addrs.spawnPosition = movementForceControl + 0x4C;
//-----------------------------------
addrs.mapLoader = read32(gamemanager+0x28);
//-----------------------------------
addrs.gameUi = read32(gamemanager+0x2c);//GameUIControl
//-----------------------------------
addrs.playerHUD = read32(gameUi+0xC);//PlayerHUDControl
addrs.hudtimer = playerHUD + 0x1c;//float
addrs.hudTimeShowGuide = playerHUD + 0x18;//float
//-----------------------------------
addrs.mainPanel = read32(gameUi+0x10);//MainPanelControl
addrs.panelAgainGame = mainPanel + 0x30;//bool
addrs.panelIsPlay = mainPanel + 0x3C;//bool
addrs.panelIsControl = mainPanel + 0x3D;//bool
addrs.panelStartTime = mainPanel + 0x40;//float
//-----------------------------------
addrs.leaderboardControl = read32(gameUi+0x14);//LeaderBoardControl
addrs.leaderboardStartTime = leaderboardControl + 0x90;//float
addrs.bestText = read32(leaderboardControl + 0x80);//Text
//-----------------------------------
}
var mag = 100;



let cheats = [{type:"bool",addrValue:"camAllowed",key:"F",text:"Freeze Camera"}];
const toggles = makeDropdown("Toggles");
cheats.forEach(cheat=>{
switch(cheat.type){
case "bool":
var cheatElem = createCheat(cheat.key,cheat.text);
toggles.addCheat(cheatElem);
cheat.html = cheatElem;
document.addEventListener("keydown",(e)=>{if(e.key!==cheat.key){return;}const value = read8(addrs[cheat.addrValue]);set8(value?0:1,addrs[cheat.addrValue]);cheatElem.setValue(!value);});
break;
}
});





function createCheat(key,text){
let cheat = document.createElement("div");
cheat.className = "toggle";
cheat.id=key.toUpperCase();
cheat.setValue = function(value){value?this.setAttribute("enabled",""):this.removeAttribute("enabled");}
cheat.innerHTML = `[${key}] ${text}`;
return cheat;}

function makeDropdown(text){
let ddcontainer = document.createElement("div");
ddcontainer.className = "dropdown-container";
let arrow = document.createElement("div");
arrow.className = "dropdown-arrow";
arrow.innerText = "\u25ba";
ddcontainer.appendChild(arrow);
let textElem = document.createElement("b");
textElem.innerText = text;
ddcontainer.appendChild(textElem);
let content = document.createElement("div");
content.className = "content";
ddcontainer.addCheat = function(cheat){content.appendChild(cheat);}
ddcontainer.addEventListener("click",()=>{
if(content.style.display=="none" || content.style.display==""){
arrow.innerHTML = "\u25bc";
content.style.display = "block";
} else {
arrow.innerHTML = "\u25ba";
content.style.display = "none";
}
});
ddcontainer.appendChild(content);
return ddcontainer;
}
document.querySelector(".cheat-container").appendChild(toggles);
