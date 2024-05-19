var context = new AudioContext();
var settings = {
  id: 'keyboard',
  width: 900,
  height: 150,
  startNote: 'A3',
  whiteNotesColour: '#fff',
  blackNotesColour: '#000',
  borderColour: '#000',
  activeColour: 'yellow',
  octaves: 2
}, nodes = [];
var offset = 0;
var drwb = [16, 16 / 3, 8, 4, 8 / 3, 2, 1.6, 4 / 3, 1];
var drwbvals = [8, 7, 7, 8, 7, 7, 8, 7, 8];
var keyboard = new QwertyHancock(settings);
var masterGain = context.createGain();
masterGain.gain.value = 0.01;
masterGain.connect(context.destination);
keyboard.keyDown = function(note, freq) {
  note = parseInt(note);
  console.log(note);
  var org = new Organ(masterGain, note, mpb, drwb, drwbvals);
  org.start();
  nodes.push(org);
}
keyboard.keyUp = function(note, frequency) {
  note = parseInt(note);
  var new_nodes = [];

  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].note === note) {
      nodes[i].stop();
      nodes[i].disconnect();
    } else {
      new_nodes.push(nodes[i]);
    }
  }
  nodes = new_nodes;
};
var elems = [];
var octave = document.getElementById("octave");
octave.addEventListener("input", function(e) { offset = e.srcElement.value; });
var vol = document.getElementById("volume");
function setVolume(v) { masterGain.gain.value = v / 5000; }
vol.addEventListener("input", function(e) { setVolume(parseInt(e.srcElement.value)); });
var drwbset = document.getElementById('drwbset');
function setDraw(e) { var da = []; for (var i = 0; i < drwbset.value.length; i++) { drwbvals[i] = parseInt(drwbset.value[i]); } drawDrawbars(ctx, drwbvals); updateDrwb(drwbvals); }
drwbset.addEventListener("change", setDraw);
function updateDrwb(dv) {
  for (var i = 0; i < nodes.length; i++) { nodes[i].setGain(dv); }
}
