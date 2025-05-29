var wav = new wavefile.WaveFile();
function zero_pad_int(num, totalLength) {
  return num.toString().padStart(totalLength, '0');
}
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
function generateBitArray(text) {
  const textEncoder = new TextEncoder();
  const pre = genPreamble();
  const array = textEncoder.encode(text);
  const combinedArray = Uint8Array.from([...pre, ...array]);
  return bytetobits(combinedArray);
}

function saveToWav() {
  addStatus("Generating wav file...");
  wav.fromScratch(1, SAMPLE_RATE, '32', samples.map(e => { return e * 2147483647; }));
  const wavBuffer = wav.toBuffer().buffer;
  const wavBlob = new Blob([new DataView(wavBuffer)], { type: 'audio/wav' });
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(wavBlob);
  downloadLink.download = 'eas.wav';
  downloadLink.click();
  addStatus("Download started...");
}
function encodeFrame() {
  const msgType = document.querySelector("#ax25-msgType").value;
  var src = document.querySelector("#ax25-src").value;
  const srcSSID = document.querySelector("#ax25-srcSSID").value;
  var dst = document.querySelector("#ax25-dst").value;
  const dstSSID = document.querySelector("#ax25-dstSSID").value;
  const payload = document.querySelector("#ax25-payload").value;

  //Add "space" padding to src field to match required length of 7
  if (src.length < 6) {
    src += Array(6 - src.length + 1).join("\x20");
  }

  //Add "space" padding to src field to match required length of 7
  if (dst.length < 6) {
    dst += Array(6 - dst.length + 1).join("\x20");
  }

  //Check if command or response message
  var cmdMsg = msgType;
  const ax25f = new AX25Frame(src, srcSSID, dst, dstSSID, 0x03, 0xF0, payload, cmdMsg);
  const ax25e = ax25f.Encode();
  return HDLCEncode(ax25e);
}
function bitsToBytes(bits) {
  const bytes = [];

  for (let i = 0; i < bits.length; i += 8) {
    const byteBits = bits.slice(i, i + 8);
    const byteValue = byteBits.reduce((acc, bit, index) => acc + bit * Math.pow(2, 7 - index), 0);
    bytes.push(byteValue);
  }

  return bytes;
}
function nrziDecode(input) {
  let output = [];

  // Initialize the current state (1 represents high, 0 represents low)
  let currentState = 1;

  for (let encodedBit of input) {
    // XOR the encoded bit with the current state to get the original bit
    let originalBit = encodedBit ^ currentState;

    // Update the current state for the next iteration
    currentState = encodedBit;

    // Add the original bit to the output
    output.push(originalBit);
  }

  return output;
}
function aprsEncode(input) {
  return nrziEncode(nrz(input));
}
function bToString(i) {
  return i.toString().replaceAll(",", "");
}
function aprsDecode(input) {
  return nrz(nrziDecode(input));
}
function nrziEncode(input) {
  let output = [];

  // Initialize the current state (1 represents high, 0 represents low)
  let currentState = 1;

  for (let bit of input) {
    // XOR the current bit with the current state to determine the encoded bit
    let encodedBit = bit ^ currentState;

    // Update the current state for the next iteration
    currentState = encodedBit;

    // Add the encoded bit to the output
    output.push(encodedBit);
  }

  return output;
}