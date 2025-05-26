const TWO_PI = 2 * Math.PI;
let phaseStep = TWO_PI * 2400 / SAMPLE_RATE;
let signalPhase = 0;
for (let i = 0; i < 10000; i++) {
    samples.push(Math.sin(signalPhase));
    signalPhase += phaseStep;
    if (signalPhase >= TWO_PI) {
        signalPhase -= TWO_PI;
    }
}