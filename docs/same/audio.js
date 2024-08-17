var context = new AudioContext();
var gain = context.createGain();
gain.gain.value = 1;
gain.connect(context.destination);
var AFSK_TIME = 0.00192;
var SPACE_FREQ = 1562.5;
var MARK_FREQ = 2083.3;
var SAMPLE_RATE = 192000;
var NRW_WAT_FREQ = 1050;
var WAT_FREQ_1 = 853;
var WAT_FREQ_2 = 960;
var EOM = "NNNN";
var HEADER = "ZCZC";
var PREAMBLE = 0xD5;//0xab read from lsb to msb
var samples = [];
var afsklen = SAMPLE_RATE * 0.00192;
function changeSampleRate(nr){
SAMPLE_RATE = nr;
afsklen = SAMPLE_RATE * 0.00192;
}
function generate_afsk(message) {
  message.forEach(e => { e ? generate_tone(MARK_FREQ, afsklen) : generate_tone(SPACE_FREQ, afsklen); });
}
/*function generate_afsk(m) {
  var r = count(m);
  m.forEach(e => { e[0] ? generate_tone(MARK_FREQ, afsklen * e[1]) : generate_tone(SPACE_FREQ, afsklen * e[1]); });
}*/
//add clipping built in to generate tone function nearly halves gen time
function generate_tone(freq, length) {
  for (var i = 0; i < length; i++) {
    var s = Math.sin((i / SAMPLE_RATE) * 2 * Math.PI * freq);
    if(cl){
    if(Math.abs(s)>0.79){
      s=(s>0)?0.79:-0.79;  
    }}
    samples.push(s);
  }
}
function transmit(freq, length) {
  for (var i = 0; i < SAMPLE_RATE * (length / 1000); i++) {
    samples.push(Math.sin((i / SAMPLE_RATE) * 2 * Math.PI * freq));
  }
}
function generate_dual_tone(freq1, freq2, length) {
  for (var i = 0; i < length; i++) {
    var s = 0.5 * Math.sin((i * 2 * Math.PI * freq1) / SAMPLE_RATE) + 0.5 * Math.sin((i * 2 * Math.PI * freq2) / SAMPLE_RATE);
          if(cl){
    if(Math.abs(s)>0.79){
      s=(s>0)?0.79:-0.79;  
    }}
    samples.push(s);
  }
}
function generate_silence(length) { generate_tone(0, length); }
function playSample() {
  const audioBuffer = context.createBuffer(1, samples.length, SAMPLE_RATE);
  const channelData = audioBuffer.getChannelData(0);
  for (let i = 0; i < samples.length; i++) {
    channelData[i] = samples[i];
  }
  const source = context.createBufferSource();
  source.buffer = audioBuffer;
  source.connect(gain);
  source.start();
  source.onended = function() { splay.innerHTML = "Play Samples"; isPlaying = false; addStatus("Playback finished."); }
  addStatus("Playing sample...");
  return source;
}
function create_raw_alert(h) {
  create_header_tones(h);
  if(tone){create_nwr_tone();}else{create_wat();}
  generate_silence(SAMPLE_RATE);
  create_eom_tones();
}

