let pixels = 0;
let pixelCache = [];
let linePos = 0;
let pixelPos = 0;

let highestLineGain = 0;
function pixelProcess(amplitude) {
    if(amplitude > highestLineGain){highestLineGain = amplitude;}
    pixelCache[pixelPos++] = amplitude*255 / highestLineGain;
    if (pixelPos == 2080) {
        gain = highestLineGain / 2;
        highestLineGain = 0;
        writeLine();
        pixelPos = 0;
    }
}
const canvas = document.querySelector("#output");
const ctx = canvas.getContext("2d");

function writeLine() {
    const imgData = ctx.createImageData(2080, 1);
    for (let i = 0; i < 8320; i += 4) {
        const pos = i/4;
        imgData.data[i] = pixelCache[pos];
        imgData.data[i+1] = pixelCache[pos];
        imgData.data[i+2] = pixelCache[pos];
        imgData.data[i+3] = 255;
    }
    ctx.putImageData(imgData,0,linePos);
    pixelCache.length = 0;
    linePos++;
}