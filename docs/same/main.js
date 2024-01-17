var events = document.getElementById("events");
var originators = document.getElementById("originators");
var hrselect = document.getElementById("hr");
var minselect = document.getElementById("min");
var timeselect = document.getElementById("time");
var parinput = document.getElementById("par");
var statuselem = document.getElementById("status");
var splay = document.getElementById("play");
var saveb = document.getElementById("save");
var clr = document.getElementById("clr");
var tl = document.getElementById("tlen");
var att = document.getElementById("att");
var locdiv = document.getElementById("locs");
var locinput = document.getElementById("loc");
var extram = document.getElementById("em");
var clip = document.getElementById("clip");
saveb.addEventListener("click", saveToWav);
var NWR = 1;
var EBS = 0;
var time = new Date();
var event = "EAN";
var originator = "EAS";
var hr = 0;
var min = 15;
var locations = [36071];
var par = "SENDERID";
var play;
var em = false;
var cl = false;
var tone = NWR;
var tlen = 10;
updateLoc();
function stime(){timeselect.value = getLocalDT(new Date());}
stime();
hrselect.addEventListener("change", function() {
  hr = parseInt(hrselect.value);
  minselect.innerHTML = "";
  var nodes = getMinNodes();
  nodes.forEach(e => { minselect.appendChild(e); });
});
var isPlaying = false;
splay.addEventListener("click", function() {
  if (samples.length < 1) { addStatus("You have to generate the samples first!"); return; }
  if (!isPlaying) {
    play = playSample();
    splay.innerHTML = "Stop";
  } else { play.stop(); splay.innerHTML = "Play Samples"; } isPlaying = !isPlaying;
});
function generateEas() {
  samples = [];
  var par = parinput.value;
  if (par.length != 8) { addStatus("Sender ID must be 8 characters long!", "ERROR"); return; }
  if (locations.length < 1) { addStatus("There must be at least one location!", "ERROR"); return; }
  var time = new Date(timeselect.value);
  var originator = originators.value;
  var event = events.value;
  var min = parseInt(minselect.value);
  tlen = parseInt(tl.value);
  var l = zero_pad_int(hr.toString() + min.toString(), 4);
  tone = parseInt(att.value);
  em = extram.checked;
  cl=clip.checked;
  create_alert(originator, event, locations, l, time, par);
  saveb.style.display = "inline-block";
  if(cl){clipSignal(0.863);}
  addStatus("EAS Generated! Samples: " + samples.length);
  addStatus("Generated header: " + create_header_string(originator, event, locations, l, time, par));
}
function gen_header() {
  var par = parinput.value;
  if (par.length != 8) { addStatus("Sender ID must be 8 characters long!", "ERROR"); return; }
  if (locations.length < 1) { addStatus("There must be at least one location!", "ERROR"); return; }
  var time = new Date(timeselect.value);
  var originator = originators.value;
  var event = events.value;
  var min = parseInt(minselect.value);
  var l = zero_pad_int(hr.toString() + min.toString(), 4);
  return create_header_string(originator, event, locations, l, time, par);
}
function addStatus(stat, type = "LOG") {
  var new_status = document.createElement("div");
  var d = new Date();
  new_status.innerHTML = zero_pad_int(d.getHours().toString() % 12, 2) + ":" + zero_pad_int(d.getMinutes().toString(), 2) + ":" + zero_pad_int(d.getSeconds().toString(), 2) + " [" + type + "]: " + stat;
  statuselem.appendChild(new_status);
  clr.style.display = "inline-block";
}
function resetStatus() {
  statuselem.innerHTML = "";
  clr.style.display = "none";
}
function updateLoc() {
  var i = "Locations: ";
  for (var j = 0; j < locations.length; j++) {
    i += zero_pad_int(locations[j].toString(), 6);
    if (!(j === locations.length - 1)) { i += ","; }
  }
  locs.innerHTML = i;
}
function count(bits) {
  let result = [];
  let currentBit = bits[0];
  let count = 1;

  for (let i = 1; i < bits.length; i++) {
    if (bits[i] === currentBit) {
      count++;
    } else {
      result.push([currentBit, count]);
      currentBit = bits[i];
      count = 1;
    }
  }

  result.push([currentBit, count]);

  return result;
}
function addLoc() { if (locations.indexOf(parseInt(locinput.value)) < 0) { locations.push(parseInt(locinput.value)); updateLoc(); } else { addStatus("You can't add the same location code twice!"); } }
function pop() { locations.pop(); updateLoc(); }
