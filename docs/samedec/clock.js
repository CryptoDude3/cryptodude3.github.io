let bitclock = 0;
let prevbit = 0;
let shift = 0;

let bits = [];
let bytes = [];
let currentByte = 0;
let bytePos = 0;
const pllGain = 0.01;
let samples = [];
let decoding = false;
let headerTimes = 0;
let syncReg = 0;

function clockdemod(sample) {
    const bit = discriminator(sample);
    if (bit !== prevbit) {
        bitclock = 0;
    }
    if (bitclock == Math.floor(bitPeriod / 2)) {
        currentByte |= (bit << bytePos);
        syncReg = ((syncReg<<1) | bit) & 0xFF;
        if (syncReg == 0xAB && !decoding) {
                bytePos = 0;
                headerTimes++;
        }
        bytePos++;
        if (bytePos == 8) {
            if(currentByte == 0xAB){
                headerTimes++;
                if(headerTimes > 6){
                    console.log("Starting");
                    decoding = true;
                }
            } else {
                headerTimes = 0;
            }
            if (decoding) {
                if (currentByte == 0) {
                    decoding = false;
                }
                document.querySelector("#afsk").innerText += String.fromCharCode(currentByte);
            }
            bytePos = 0;
            currentByte = 0;
        }
    }
    if (bitclock >= bitPeriod) {
        bitclock = 0;
    }
    bitclock++;
    prevbit = bit;
}

//implement discriminator based on positive and negative mabye
const thres = 30;

let bitState = 0;

function discriminator(sample) {
    if (sample > thres) {
        bitState = 1;
    } else if (sample < -thres) {
        bitState = 0;
    }
    return bitState;
}

function saveToWav() {
    const wav = new wavefile.WaveFile();
    wav.fromScratch(1, SAMPLE_RATE, '32', samples.map(e => {
        return e * (2147483647 / 2);
    }));
    const wavBuffer = wav.toBuffer().buffer;
    const wavBlob = new Blob([new DataView(wavBuffer)], {
        type: 'audio/wav'
    });
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(wavBlob);
    downloadLink.download = 'eas.wav';
    downloadLink.click();
    //addStatus("Download started...");
}