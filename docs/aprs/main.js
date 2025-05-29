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
var locdiv = document.getElementById("locs");
var locinput = document.getElementById("loc");
saveb.addEventListener("click", saveToWav);
var isPlaying = false;
splay.addEventListener("click", function() {
  if (samples.length < 1) { addStatus("You have to generate the samples first!"); return; }
  if (!isPlaying) {
    play = playSample();
    splay.innerHTML = "Stop";
  } else { play.stop(); splay.innerHTML = "Play Samples"; } isPlaying = !isPlaying;
});
function toBit(t) {
  var r = [];
  for (var i = 0; i < t.length; i++) {
    r.push(parseInt(t[i]));
  }
  return r;
}
const syncWord = [0, 1, 1, 1, 1, 1, 1, 0];
const times = 20;
let sync = [];
for(let i = 0;i<times;i++){
  sync = sync.concat(syncWord);
}
function generateEas() {
  samples = [];
  generate_afsk(aprsEncode(sync.concat(bytetobits(encodeFrame()))));
  addStatus("APRS Generated! Samples: " + samples.length);
  drawSamples();
}
var canvas = document.getElementById("waveform");
var ctx = canvas.getContext("2d");
function drawSamples() {
  var scale = 0.01;
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  // Clear the canvas
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  // Draw a line connecting the sample points
  ctx.beginPath();
  ctx.moveTo(0, canvasHeight / 2);
  var s = 0;
  var j = 0;
  for (var i = s; i < samples.length; i++) {
    const x = (j / (samples.length - 1)) * canvasWidth * 20;
    const y = (samples[i] * canvasHeight * 0.25) + canvasHeight / 2;
    ctx.lineTo(x, y);
    j++;
  }
  /*samples.forEach((sample, index) => {
      const x = (index / (samples.length - 1)) * canvasWidth * 46;
      const y = (sample * canvasHeight * 0.25)+canvasHeight/2;
      ctx.lineTo(x, y);
  });*/

  ctx.lineTo(canvasWidth, canvasHeight / 2);

  // Style and draw the line
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 2;
  ctx.stroke();
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
function nrzi(input) {
  let output = [];
  let currentState = 0;

  for (let bit of input) {
    if (bit === 1) {
      // Toggle the state for each 1
      currentState = 1 - currentState;
    }
    output.push(currentState);
  }

  return output;
}
function nrz(input){
    var output = [];
    input.forEach(e=>output.push(e?0:1));
    return output;
}
