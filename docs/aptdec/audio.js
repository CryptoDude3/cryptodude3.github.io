let sampleRate = 44100;

async function startDecoder() {
    const audioContext = new AudioContext();
    const stream = await navigator.mediaDevices.getUserMedia({
        audio: true
    });
    const source = audioContext.createMediaStreamSource(stream);
    await audioContext.audioWorklet.addModule("processor.js");
    const decodeNode = new AudioWorkletNode(audioContext, "eas-processor");
    decodeNode.port.onmessage = function (event) {
        if (event.data[0]) {
            runDecoder(event.data[0]);
        }
    }
    updateSampleRate(audioContext.sampleRate);
    //source.connect(audioContext.destination);
    source.connect(decodeNode);
}