window.game_id = "63be3a679932520bd5087abb";
window.secret_key = "1102123";
window.private_key = "Green@L!ne23";
async function makeReq(body,endpoint){return await fetch("https://api.apileaderboards.com/point/"+endpoint, {
  "headers": {
    "content-type": "application/x-www-form-urlencoded",
  },
  "referrer": "https://slope3.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
   body,
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
});
}

function getSaveBody(player_id,player_name,key1,key2,key3,point1,point2,point3){
return `game_id=${game_id}&player_id=${player_id}&player_name=${player_name}&key1=${key1}&key2=${key2}&key3=${key3}&point1=${point1}&point2=${point2}&point3=${point3}&signature=${md5(`${secret_key}${private_key}${game_id}`+player_id+player_name+key1+key2+key3+point1+point2+point3)}`;}
function getMainSaveReq(player_name,points){return getSaveBody(0,player_name,"","","",points,0,0);}
function getReq(start_time,end_time){
return `start_time=${start_time}&end_time=${end_time}&game_id=${game_id}&signature=${md5(`${secret_key}${private_key}${game_id}`+start_time +end_time)}`;}
async function saveScore(player_name,points){return await makeReq(getMainSaveReq(player_name,points),"save2");}
async function getScore(start_time,end_time){return await makeReq(getReq(start_time,end_time),"get2");}



//getscore functions

async function getScores(start_time,end_time){
const scores = await getScore(start_time,end_time);
const data = await scores.json();
if(!data.success){}
return data.point_top;
}
function createTd(text){const td = document.createElement("td");td.innerText=text;return td;}


async function update(startTime,endTime){
const scores = await getScores(startTime,endTime);
updateTable(scores);
}

function updateTable(scores){
document.querySelector("#scores").innerHTML = "";
var t = document.createElement("tbody");
t.innerHTML+=`<tr>
    <th>Name</th>
    <th>Score</th>
    <th>Date Created</th>
  </tr>`;
scores.forEach(e=>{
var tr = document.createElement("tr");
tr.appendChild(createTd(e.player_name));
tr.appendChild(createTd(e.point1));
tr.appendChild(createTd(e.createdAt));
t.appendChild(tr);
});
document.querySelector("#scores").appendChild(t);}
update(new Date().toISOString(),new Date().toISOString());
function loadScores(){
const stime = document.querySelector("#stime").value;
const etime = document.querySelector("#etime").value;
update(stime,etime);
}
function getString(d){
const date = new Date(d);
return `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2,"0")}-${date.getDate()}T${date.getHours().toString().padStart(2,"0")}:${date.getMinutes().toString().padStart(2,"0")}`;}
document.querySelector("#stime").value=getString(new Date().setDate(new Date().getDate()-1));
document.querySelector("#etime").value=getString(new Date());
