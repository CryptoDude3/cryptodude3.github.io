var offset = 0;
var getFrequencyOfNote = function(note) {
  return 440 * Math.pow(2, ((note + (parseInt(offset) * 12)) - 57) / 12);
};
var type = "sine";
class Organ {
  constructor(gnode = masterGain, note = 57, pb = 0, drwb = [16, 16 / 3, 8, 4, 8 / 3, 2, 1.6, 4 / 3, 1], drwbvals = [8, 7, 7, 8, 7, 7, 8, 7, 8]) {
    this.oscs = [];
    var mgc = context.createGain();
    this.volume = 1;
    mgc.connect(gnode);
    this.mgc = mgc;
    this.note = note;
    this.drwb = drwb;
    this.drwbvals = drwbvals;
    this.oscGains = [];
    for (var i = 0; i < drwb.length; i++) {
      var osc = context.createOscillator();
      var oscGain = context.createGain();
      oscGain.gain.value = drwbvals[i] / 8;
      oscGain.connect(this.mgc);
      osc.type = type;
      osc.frequency.value = getFrequencyOfNote(this.note + (pb * (2 / 63.5))) * (8 / this.drwb[i]);
      osc.connect(oscGain);
      this.oscs.push(osc);
      this.oscGains.push(oscGain);
    }
  }
  start() { for (var i = 0; i < this.oscs.length; i++) { this.oscs[i].start(0); } }
  setFrequency(f) { for (var i = 0; i < this.oscs.length; i++) { this.oscs[i].frequency.value = f * (8 / this.drwb[i]); } }
  setGain(dv) {
    for (var i = 0; i < this.oscGains.length; i++) {
      this.oscGains[i].gain.value = dv[i] / 8;
    }
  }
  play() { this.mgc.gain.value = this.volume; }
  setVolume(v) { this.volume = v; this.mgc.gain.value = v; }
  setPitchBend(offset) { for (var i = 0; i < this.oscs.length; i++) { this.oscs[i].frequency.value = getFrequencyOfNote(this.note + (offset * (2 / 63.5))) * (8 / this.drwb[i]); } }
  silence() { this.mgc.gain.value = 0; }
  stop() { for (var i = 0; i < this.oscs.length; i++) { this.oscs[i].stop(0); } }
  disconnect() { this.mgc.disconnect(); }
}