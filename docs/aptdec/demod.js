let ampWindow = [];
let ampInteg = 0;
let samples = [];
let dataBuffer = [];

const freq = 2400;
const TWO_PI = 2 * Math.PI;
let phaseStep = 0;
let windowSize = 0;
let pixelWindow = 0;
let sinPhaseStep = 0;
let cosPhaseStep = 0;

let gain = 5;

function updateSampleRate(sr) {
    sampleRate = sr;
    phaseStep = TWO_PI * freq / sr;
    windowSize = Math.round(sr / 4160);
    pixelWindow = sr / 4160;
    sinPhaseStep = Math.sin(phaseStep);
    cosPhaseStep = Math.cos(phaseStep);
    for (let i = 0; i < windowSize; i++) {
        ampWindow[i] = 0;
    }
}

let windowClock = 0;
let pixelClock = 0;

let prevSample = 0;

let dcBlockerPrevInput = 0;
let dcBlockerPrevOutput = 0;
const dcAlpha = 1;

function dcBlock(input) {
    const output = input - dcBlockerPrevInput + dcAlpha * dcBlockerPrevOutput;
    dcBlockerPrevInput = input;
    dcBlockerPrevOutput = output;
    return output;
}

function updateGain(val){
    gain = val;
}

function runDecoder(signal) {
    for (let i = 0; i < 128; i++) {
        const samp = dcBlock(signal[i]);
        const demodres = Math.sqrt(samp*samp + prevSample*prevSample - 2*samp*prevSample * cosPhaseStep) / sinPhaseStep;
        ampInteg += demodres;
        pixelClock += 1;
        if(pixelClock >= pixelWindow){
            const out = ampInteg/pixelWindow;
            pixelClock -= pixelWindow;
            pixelProcess(out);
            ampInteg = 0;
        }
        prevSample = samp;
    }
}

