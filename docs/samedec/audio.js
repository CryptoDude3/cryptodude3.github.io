let sampleRate = 44100;

async function startDecoder() {
    const audioContext = new AudioContext();
    const stream = await navigator.mediaDevices.getUserMedia({
        audio: true
    });
    const source = audioContext.createMediaStreamSource(stream);
    await audioContext.audioWorklet.addModule("processor.js");
    const filter = audioContext.createBiquadFilter(); //don't want any extra noise
    filter.type = "bandpass";
    filter.frequency.value = 1822.9;
    filter.Q.value = 3;
    const decodeNode = new AudioWorkletNode(audioContext, "eas-processor");
    decodeNode.port.onmessage = function (event) {
        runDecoder(event.data[0]);
    }
    updateSampleRate(audioContext.sampleRate);
    //source.connect(audioContext.destination);
    source.connect(filter);
    filter.connect(decodeNode);
}