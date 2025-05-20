var context = new AudioContext();
var gain = context.createGain();
gain.gain.value = 0.25;
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
var PREAMBLE = 0xD5; //0xab read from lsb to msb
var samples = [];
var afsklen = SAMPLE_RATE * 0.00192;

let markArray = []; //these have the samples for each afsk freq
let spaceArray = [];

function calcAFSKArray() {
  for (let i = 0; i < afsklen; i++) {
    let m = Math.sin((i / SAMPLE_RATE) * 2 * Math.PI * MARK_FREQ);
    let s = Math.sin((i / SAMPLE_RATE) * 2 * Math.PI * SPACE_FREQ);
    if (cl) {
      if (s > 0.79) {
        s = 0.79;
      } else if (s < -0.79) {
        s = -0.79;
      }
      if (m > 0.79) {
        m = 0.79;
      } else if (m < -0.79) {
        m = -0.79;
      }
    }
    markArray[i] = m;
    spaceArray[i] = s;
  }
}

function changeSampleRate(nr) {
  SAMPLE_RATE = nr;
  afsklen = SAMPLE_RATE * 0.00192;
}

function generate_afsk(message) {
  for (let i = 0; i < message.length; i++) {
    generate_afsk_tone(message[i]);
  }
}
/*function generate_afsk(m) {
  var r = count(m);
  m.forEach(e => { e[0] ? generate_tone(MARK_FREQ, afsklen * e[1]) : generate_tone(SPACE_FREQ, afsklen * e[1]); });
}*/
//add clipping built in to generate tone function nearly halves gen time

//cache the two frequencies
function generate_tone(freq, length) {
  for (let i = 0; i < length; i++) {
    let s = Math.sin((i / SAMPLE_RATE) * 2 * Math.PI * freq);
    if (cl) {
      if (s > 0.79) {
        s = 0.79;
      } else if (s < -0.79) {
        s = -0.79;
      }
    }
    samples.push(s);
  }
}

function generate_afsk_tone(bit) {
  const sl = samples.length;
  const copyArray = bit ? markArray : spaceArray;
  for (let i = 0; i < afsklen; i++) {
    samples[sl + i] = copyArray[i];
  }
}

function generate_dual_tone(freq1, freq2, length) {
  for (let i = 0; i < length; i++) {
    let s = 0.5 * (Math.sin((i * 2 * Math.PI * freq1) / SAMPLE_RATE) + Math.sin((i * 2 * Math.PI * freq2) / SAMPLE_RATE));
    if (cl) {
      if (s > 0.79) {
        s = 0.79;
      } else if (s < -0.79) {
        s = -0.79;
      }
    }
    samples.push(s);
  }
}

/*function generate_silence(length) {
  const l = samples.length;
  for (let i = 0; i < length; i++) {
    samples[l+i] = 0;
  }
}*/
function generate_silence(length) {
  for (let i = 0; i < length; i++) {
    samples.push(0);
  }
}

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
  source.onended = function () {
    splay.innerHTML = "Play Samples";
    isPlaying = false;
    addStatus("Playback finished.");
  }
  addStatus("Playing sample...");
  return source;
}

function create_raw_alert(h) {
  create_header_tones(h);
  if (tone) {
    create_nwr_tone();
  } else {
    create_wat();
  }
  generate_silence(SAMPLE_RATE);
  create_eom_tones();
}