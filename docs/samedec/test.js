const sampleRate = SAMPLE_RATE;

function runTest() {
    let output = [];
    for (let i = 0; i < samples.length; i += 128) {
        const demod = afskdemod(samples.slice(i, i + 128));
        for (let j = 0; j < 128; j++) {
            output[i + j] = demod[j];
        }
    }
    return output;
}