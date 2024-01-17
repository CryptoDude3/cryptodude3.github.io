var wav = new wavefile.WaveFile();
function zero_pad_int(num, totalLength) {
  return num.toString().padStart(totalLength, '0');
}
function getDay(date) { return zero_pad_int(Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24), 3); }
function getHour(date) { return zero_pad_int(date.getUTCHours(), 2); }
function getMinute(date) { return zero_pad_int(date.getUTCMinutes(), 2); }
function bytetobits(byteArray) {
  const bitsArray = [];
  for (let i = 0; i < byteArray.length; i++) {
    let byte = byteArray[i];
    for (let j = 7; j >= 0; j--) {
      bitsArray.push((byte & (1 << j)) >> j);
    }
  }
  return bitsArray;
}
function genPreamble() {
  const byteArray = new Uint8Array(16);
  byteArray.fill(PREAMBLE);
  return byteArray;
}
function extraspace() { generate_afsk(Array(15).fill(0,0,15)); }
function preamble() {
  return bytetobits(genPreamble());
}
function generateBitArray(text) {
  const textEncoder = new TextEncoder();
  const pre = genPreamble();
  const array = textEncoder.encode(text);
  const combinedArray = Uint8Array.from([...pre, ...array]);
  return bytetobits(combinedArray);
}
function extramarks() { generate_afsk([1, 1, 1, 1, 1, 1]); }
function getLocalDT(currentLocalDateTime) {
  const year = currentLocalDateTime.getFullYear();
  const month = ('0' + (currentLocalDateTime.getMonth() + 1)).slice(-2);
  const day = ('0' + currentLocalDateTime.getDate()).slice(-2);
  const hours = ('0' + currentLocalDateTime.getHours()).slice(-2);
  const minutes = ('0' + currentLocalDateTime.getMinutes()).slice(-2);
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}
function genArray(str) {
  let pre = preamble();
  let byteData = [];
  for (let j = 0; j < str.length; j++) {
    for (let i = 0; i < 8; i++) {
      if ((str.charCodeAt(j) >> i) & 1) {
        byteData.push(1);
      } else {
        byteData.push(0);
      }
    }
  }
  let b = pre.concat(byteData);
  return b;
}
function rawGen(str) {
  let byteData = [];
  for (let j = 0; j < str.length; j++) {
    for (let i = 0; i < 8; i++) {
      if ((str.charCodeAt(j) >> i) & 1) {
        byteData.push(1);
      } else {
        byteData.push(0);
      }
    }
  }
  return byteData;
}
function clipSignal(t){samples=samples.map(e=>{if(Math.abs(e)>t){e=(e>0)?t:-t;}return e;});}
function getMinNodes() {
  var m = [0, 15, 30, 45]; if (hr > 0) {
    var m = [0, 30];
  } if (hr > 5) { var m = [0]; }
  var nodes = [];
  m.forEach(e => { var o = document.createElement("option"); o.innerHTML = e.toString().padStart(2, "0"); o.value = e; nodes.push(o); }); return nodes;
}
function saveToWav() {
  addStatus("Generating wav file...");
  wav.fromScratch(1, SAMPLE_RATE, '32', samples.map(e => {
    return e * (2147483647 / 2);
  }));
  const wavBuffer = wav.toBuffer().buffer;
  const wavBlob = new Blob([new DataView(wavBuffer)], { type: 'audio/wav' });
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(wavBlob);
  downloadLink.download = 'eas.wav';
  downloadLink.click();
  addStatus("Download started...");
}
