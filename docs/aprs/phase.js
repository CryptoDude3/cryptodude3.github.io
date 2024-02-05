var context = new AudioContext();
var gain = context.createGain();
gain.gain.value = 0.1;
gain.connect(context.destination);
var SAMPLE_RATE = 120000;
var samples = [];
var shift = 0;
var afsklen = SAMPLE_RATE * (1 / 1200);
var sp = [];
var m_phase = 0;
var s_phase = 0;
function setBitRate(v) { afsklen = SAMPLE_RATE * (1 / v); BIT_RATE = v; }
function generate_tone(freq, length, p = 0) {
  for (var i = 0; i < length; i++) {
    samples.push(Math.sin(((i / SAMPLE_RATE) * 2 * Math.PI * freq) + p));
  }
}
function generate_afsk(bitstream) {
  const fCenter = 1700;
  const fDelta = 500;
  const bitrate = 1200;
  const samplingFreq = SAMPLE_RATE; // Replace with your actual sampling frequency
  bitstream = bitstream.map(bit => bit * 2 - 1); // Convert to NRZ
  const steps = samplingFreq / bitrate;
  let m = 0;

  for (let i = 1; i < (bitstream.length * steps); i++) {
    // Interpolate the bitstream to steps points per bit
    const index = Math.ceil(i / steps);
    const indexPrev = Math.ceil((i - 1) / steps);

    if(Number.isNaN(m)){console.log(bitstream[index]);}else{
    // "FM" Modulation
    m += (bitstream[indexPrev] + bitstream[index]) / 2;
    samples.push(Math.cos(2 * Math.PI * i * (fCenter / samplingFreq) - 2 * Math.PI * m * (fDelta / samplingFreq)));
  }}
  samples = emphasis(samples);
}
function emphasis(signal) {
  const a = Math.exp((-2 * Math.PI * 2120) / SAMPLE_RATE); // Calculate Filter coefficient
  const y = [];
  for (let i = 1; i < signal.length; i++) {
    // FIR HPF
    y.push((signal[i] - (a * signal[i - 1])) * 5);
  }
  return y;
}

function generate_dual_tone(freq1, freq2, length) {
  for (var i = 0; i < length; i++) {
    samples.push(0.5 * Math.sin((i * 2 * Math.PI * freq1) / SAMPLE_RATE) + 0.5 * Math.sin((i * 2 * Math.PI * freq2) / SAMPLE_RATE));
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
