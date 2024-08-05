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
function loadHacks(){
window.gamemanager = 0x0114ae00;
window.score = gamemanager+0x30;//int
//-----------------------------------
window.camControl = read32(gamemanager + 0x10);//CameraController
window.cam = read32(camControl + 0x18);//camera
window.camDied = camControl+0x30;//bool
window.camAllowed = camControl + 0x1c;//bool
window.camStartPos = read32(camControl + 0x10);//Transform
//-----------------------------------
window.ballControl = read32(gamemanager + 0xC);//BallMovementControl
window.speedUp = ballControl + 0x34;//bool
window.floatSpeedUpTime = ballControl + 0x3C;//float
window.floatPushTime = ballControl + 0x38;//float
window.firstTouchGround = ballControl+ 0x40;//bool
window.ballDied = ballControl + 0x48;//bool
//-----------------------------------
window.buildingSpawner = read32(gamemanager + 0x24);//BuildingSpawnControl
//-----------------------------------
window.movementForceControl = read32(ballControl + 0xC);//BallMovementForceControl
window.yForce = movementForceControl + 0xC;//float
window.zForce = movementForceControl + 0x10;//float
window.spawnPosition = movementForceControl + 0x4C;
//-----------------------------------
window.mapLoader = read32(gamemanager+0x28);
//-----------------------------------
window.gameUi = read32(gamemanager+0x2c);//GameUIControl
//-----------------------------------
window.playerHUD = read32(gameUi+0xC);//PlayerHUDControl
window.hudtimer = playerHUD + 0x1c;//float
window.hudTimeShowGuide = playerHUD + 0x18;//float
//-----------------------------------
window.mainPanel = read32(gameUi+0x10);//MainPanelControl
window.panelAgainGame = mainPanel + 0x30;//bool
window.panelIsPlay = mainPanel + 0x3C;//bool
window.panelIsControl = mainPanel + 0x3D;//bool
window.panelStartTime = mainPanel + 0x40;//float
//-----------------------------------
window.leaderboardControl = read32(gameUi+0x14);//LeaderBoardControl
window.leaderboardStartTime = leaderboardControl + 0x90;//float
window.bestText = read32(leaderboardControl + 0x80);//Text
//-----------------------------------
}
var mag = 100;
document.addEventListener("keydown",(e)=>{if(e.key!=="ArrowUp"){return;}setFloat32(zForce,readFloat32(zForce)+mag)});
document.addEventListener("keydown",(e)=>{if(e.key!=="ArrowDown"){return;}setFloat32(zForce,readFloat32(zForce)-mag)});
document.addEventListener("keydown",(e)=>{if(e.key!=="f"){return;}set8(camAllowed,!read8(camAllowed))});











function createCheat(key,text){var cheat = document.createElement("div");
cheat.className = "toggle";
cheat.id=key.toUpperCase();
cheat.setValue = function(value){value?this.setAttribute("enabled",""):this.removeAttribute("enabled");}
cheat.innerHTML = `[${key}] ${text}`;
return cheat;}
function makeDropdown(cheats,text){
var ddcontainer = document.createElement("div");
ddcontainer.className = "dropdown-container";
var arrow = document.createElement("div");
arrow.className = "dropdown-arrow";
ddcontainer.appendChild(arrow);
ddcontainer.innerText+=text;
var content = document.createElement("div");
content.className = "content";
cheats.forEach(cheat=>content.appendChild(cheat));
ddcontainer.appendChild(content);
return ddcontainer;
}
//dropdown handler code
document.querySelectorAll(".dropdown-container").forEach(dropdown=>{
dropdown.children[0].addEventListener("click",()=>{
if(dropdown.children[1].style.display=="none" || dropdown.children[1].style.display==""){
dropdown.children[0].innerHTML = "\u25bc";
dropdown.children[1].style.display = "block";
} else {
dropdown.children[0].innerHTML = "\u25ba";
dropdown.children[1].style.display = "none";
}
});
});
