let sampleRate = 44100;

const decodeContext = new AudioContext();

const filter = decodeContext.createBiquadFilter(); //don't want any extra noise
filter.type = "bandpass";
filter.frequency.value = 1822.9;
filter.Q.value = 3;

let micSource = null;
decodeContext.audioWorklet.addModule("processor.js").then(() => {
    const decodeNode = new AudioWorkletNode(decodeContext, "eas-processor");
    decodeNode.port.onmessage = function (event) {
        runDecoder(event.data[0]);
    }
    filter.connect(decodeNode); //filter is connected and ready to go, just pipe audio in filter to decode
});


const sel = document.querySelector("#device");
async function startDecoder(id) {
    const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
            deviceId: id
        }
    });
    await startDecode(stream);
}

async function getMicrophones() {
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.filter(e => e.kind == "audioinput");
}

async function runDecode(button) {
    if(micSource){
        await stopDecode();
        button.innerText = "Start Decoder";
    } else {
    await startDecoder(sel.value);
    button.innerText = "Stop Decoder";
    }
}

async function populateMicrophones() { //populates the select for microphone device
    const mics = await getMicrophones();
    sel.innerHTML = "";
    mics.forEach(mic => {
        const option = document.createElement("option");
        option.value = mic.deviceId;
        option.innerText = mic.label;
        sel.appendChild(option);
    });
}

async function startDecode(stream) {
    const source = decodeContext.createMediaStreamSource(stream);
    micSource = source;
    micSource.connect(filter);
    updateSampleRate(decodeContext.sampleRate);
    updateSync(false);
    decodeContext.resume();
}

async function stopDecode(){
    micSource.mediaStream.getTracks().forEach(e=>e.stop());
    micSource.disconnect(filter);
    micSource = null;
    decodeContext.suspend();
    document.querySelector("#sync").innerText = "STATUS: WAITING...";
    document.querySelector("#sync").style.color = "";
}
populateMicrophones();

document.addEventListener("click",()=>{
    if(!sel.innerHTML){
        populateMicrophones();
    }
});