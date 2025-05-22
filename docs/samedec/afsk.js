let buffer = [];
//const sampleRate = SAMPLE_RATE;

function runDecoder(buf) {
    afskdemod(buf, sampleRate);
}

let dcWindow = [];

let fMark = 0;
let fSpace = 0;
let phaseMark = 0;
let phaseSpace = 0;
let bitPeriod = 0;

function updateSampleRate(sr) {
    fMark = 2083.3 / sr;
    fSpace = 1562.5 / sr;
    phaseMark = 2 * Math.PI * fMark;
    phaseSpace = 2 * Math.PI * fSpace;
    bitPeriod = Math.round(sr / 520.8333333333);
    sampleRate = sr;

    for (let i = 0; i < bitPeriod; i++) {
        markIwindow[i] = 0;
        markQwindow[i] = 0;
        spaceIwindow[i] = 0;
        spaceQwindow[i] = 0;
    }
}

for (let i = 0; i < 128; i++) {
    dcWindow[i] = 0;
}

const TWO_PI = 2 * Math.PI;
let markIwindow = [];
let markQwindow = [];
let spaceIwindow = [];
let spaceQwindow = [];
let markIInteg = 0;
let markQInteg = 0;
let spaceIInteg = 0;
let spaceQInteg = 0;

let prevSample = 0;
let clock = 0;
let markIndex = 0;
let spaceIndex = 0;

let dcSum = 0;

function dcFilter(sample, i) {
    dcSum += sample - dcWindow[i];
    dcWindow[i] = sample;
    return sample - (dcSum / 128);
}

function afskdemod(signal) {
    for (var i = 0; i < 128; i++) {
        const sig = signal[i];
        //samples.push(sig);
        const markI = sig * Math.sin(markIndex);
        const markQ = sig * Math.cos(markIndex);
        const spaceI = sig * Math.sin(spaceIndex);
        const spaceQ = sig * Math.cos(spaceIndex);
        markIndex += phaseMark;
        spaceIndex += phaseSpace;
        if (markIndex > TWO_PI) {
            markIndex -= TWO_PI;
        }
        if (spaceIndex > TWO_PI) {
            spaceIndex -= TWO_PI;
        }
        //clock is the oldest in the buffer because it was written to afskWindowSize cycles ago
        markIInteg += markI - markIwindow[clock];
        markQInteg += markQ - markQwindow[clock];
        spaceIInteg += spaceI - spaceIwindow[clock];
        spaceQInteg += spaceQ - spaceQwindow[clock];

        markIwindow[clock] = markI;
        markQwindow[clock] = markQ;
        spaceIwindow[clock] = spaceI;
        spaceQwindow[clock] = spaceQ;

        let s1 = markIInteg * markIInteg + markQInteg * markQInteg; //vector sum of in-phase and quadrature components
        let s2 = spaceIInteg * spaceIInteg + spaceQInteg * spaceQInteg;
        clockdemod(s1 - s2);
        //document.querySelector("#afsk").innerText = s1 - s2;
        clock++;
        if (clock >= bitPeriod) {
            clock = 0;
        }
    }
}



function runTest() {
    updateSampleRate(44100);
    y = [];
    markIInteg = 0;
    markQInteg = 0;
    spaceIInteg = 0;
    spaceQInteg = 0;
    let output = [];
    for (let i = 0; i < samples.length; i += 128) {
        const demod = afskdemod(samples.slice(i, i + 128));
        for (let j = 0; j < 128; j++) {
            output[i + j] = demod[j];
        }
    }
    return output;
}
