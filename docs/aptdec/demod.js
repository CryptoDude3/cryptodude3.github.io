let dataIwindow = [];
let dataQwindow = [];
let dataIInteg = 0;
let dataQInteg = 0;

let dataBuffer = [];

const freq = 2400;
const TWO_PI = 2 * Math.PI;
let phaseStep = 0;
let windowSize = 0;
let pixelWindow = 0;

function updateSampleRate(sr) {
    sampleRate = sr;
    phaseStep = TWO_PI * freq / sr;
    pixelWindow = sr / 4160;
    windowSize = Math.round(sr / 4160);
    for (let i = 0; i < windowSize; i++) {
        dataIwindow[i] = 0;
        dataQwindow[i] = 0;
    }
}

let signalPhase = 0;
let windowClock = 0;
let pixelClock = 0;

function runDecoder(signal) {
    for (let i = 0; i < 128; i++) {
        const sig = signal[i];
        const dataI = sig * Math.cos(signalPhase);
        const dataQ = sig * Math.sin(signalPhase);
        signalPhase += phaseStep;
        if (signalPhase >= TWO_PI) {
            signalPhase -= TWO_PI;
        }
        dataIInteg += dataI - dataIwindow[windowClock];
        dataQInteg += dataQ - dataQwindow[windowClock];
        dataIwindow[windowClock] = dataI;
        dataQwindow[windowClock] = dataQ;
        windowClock++;
        if (windowClock >= windowSize) {
            windowClock = 0;
        }
        pixelClock += 1;
        if(pixelClock >= pixelWindow){
            pixelClock -= pixelWindow;
            const avgIval = dataIInteg/windowSize;
            const avgQval = dataQInteg/windowSize;
            pixelProcess(Math.sqrt(avgIval*avgIval + avgQval*avgQval));
        }
    }
}

function runTest() {
    updateSampleRate(44100);
    dataIInteg = 0;
    dataQInteg = 0;
    let output = [];
    for (let i = 0; i < samples.length; i += 128) {
        const demod = runDecoder(samples.slice(i, i + 128));
        for (let j = 0; j < 128; j++) {
            output[i + j] = demod[j];
        }
    }
    return output;
}
