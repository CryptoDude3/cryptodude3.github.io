var midi = document.getElementById("midi");
var refresh = document.getElementById("s");
var access = navigator.requestMIDIAccess();
var mpb = 0;
var inp = [];
function refreshMidi() {
  midi.innerHTML = "";
  window.a = []; j = 0; access.then(e => e.inputs).then(i => {
    i.forEach(e => { var opt = document.createElement("option"); opt.innerText = e.name; opt.value = e.id; midi.appendChild(opt); inp[j] = e.id; j++; });
  })
}
function refreshMidiFirst() {
  midi.innerHTML = "";
  window.a = []; j = 0; access.then(e => e.inputs).then(i => {
    i.forEach(e => { var opt = document.createElement("option"); opt.innerText = e.name; opt.value = e.id; midi.appendChild(opt); inp[j] = e.id; j++; })
  }).then(e => { if (inp.length > 0) { setInput(inp[0]); } });
}
refreshMidiFirst();
refresh.addEventListener("click", function() { refreshMidi(); })
function setInput(comp) { access.then(e => e.inputs).then(e => { e.forEach(i => { if (i.id === comp) { i.onmidimessage = onmidimessage; } }) }); }
midi.addEventListener("change", function() { setInput(midi.value); });
function control(c, value) {
  switch (c) {
    case 7:
      setVolume(value * (200 / 127));
      vol.value = parseInt(value * (200 / 127));
      break;
  }
}
function updatePitchBend() { for (var i = 0; i < nodes.length; i++) { nodes[i].setPitchBend(mpb) } }
function pitchBend(v) { var t = (v - 64) + 0.5;if(t===0.5){t=0;} mpb = t; updatePitchBend(); }
function progchange(e) {
  var a = e % drwbset.children.length; drwbset.selectedIndex = a; setDraw();
}
function onmidimessage(e) {
  var a = Array.from(e.data);
  switch (a[0]) { case 144: keyboard.pressKey(a[1]); console.log(a[1]); break; case 128: keyboard.pressKeyUp(a[1]); break; case 176: control(a[1], a[2]); break; case 224: pitchBend(a[2]); break; case 192: progchange(a[1]); }
}

