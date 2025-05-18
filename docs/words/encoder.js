const chars = {
    " ": 27,
    ".": 28,
    ",": 29,
    "'": 30,
    "?": 31
};
const dchars = {
    27: " ",
    28: ".",
    29: ",",
    30: "'",
    31: "?"
};

function encodeString(str, key = 0) {
    let encWords = [];
    let nonce = Math.floor(Math.random() * 32768);
    encWords.push(words[nonce ^ 0x4F6]);
    const input = str.toLowerCase();
    for (let i = 0; i < input.length; i += 3) {
        const ind = (encodeChar(input[i + 2]) << 10 | encodeChar(input[i + 1]) << 5 | encodeChar(input[i])) ^ key ^ (nonce++ & 0x7FFF); //randomize a little bit
        encWords.push(words[ind]);
    }
    return encWords.join(" ");
}

function decodeString(str, key = 0) {
    const encWords = str.split(" ");
    let output = "";
    let nonce = decodeWords[encWords[0]] ^ 0x4F6;
    for (let i = 1; i < encWords.length; i++) { //skip nonce
        const word = decodeWords[encWords[i]];
        if (!word) {
            output += "|||";
        } else {
            const ind = word ^ key ^ (nonce++ & 0x7FFF);
            output += decodeChar(ind & 31) + decodeChar(ind >> 5 & 31) + decodeChar(ind >> 10 & 31);
        }
    }
    return output;
}

function encodeBinary(data, key = 0){
    const byteData = new Uint8Array(data);
    const allData = new Uint8Array(byteData.length+4);
    allData[0] = byteData.length & 0xFF;
    allData[1] = byteData.length>>8 & 0xFF;
    allData[2] = byteData.length>>16 & 0xFF;
    allData[3] = byteData.length>>24 & 0xFF;
    allData.set(byteData,4);
    return encodeRawBinary(allData, key);
}

function decodeBinary(str, key = 0){
    const data = decodeRawBinary(str, key);
    const len = data[0] | data[1] << 8 | data[2] << 16 | data[3] << 24;
    if(len > data.length){
        return null;
    }
    return new Uint8Array(data.slice(4,len+4));
}

function encodeRawBinary(data, key = 0) {
    let encWords = [];
    let nonce = Math.floor(Math.random() * 32768);
    encWords.push(words[nonce ^ 0x2FA]);
    const byteData = new Uint8Array(data);
    let buffer = 0;
    let bitCount = 0;
    for(let i = 0;i<byteData.length;i++){
        buffer |= byteData[i] << bitCount;
        bitCount += 8;
        while(bitCount >= 15){
            encWords.push(words[(buffer & 0x7FFF) ^ key ^ (nonce++ & 0x7FFF)]);
            buffer >>= 15;
            bitCount -= 15;
        }
    }
    if(bitCount > 0){
        encWords.push(words[(buffer & 0x7FFF) ^ key ^ (nonce++ & 0x7FFF)]);
    }
    return encWords.join(" ");
}

function decodeRawBinary(str, key = 0) { // pass length
    const data = str.split(" ");
    let nonce = decodeWords[data[0]] ^ 0x2FA;
    const encData = data.slice(1,data.length).map(e => decodeWords[e] ^ key ^ (nonce++ & 0x7FFF));
    return wordDataToBytes(encData);
}

function wordDataToBytes(wordData) {
    let bytes = [];
    let buffer = 0;
    let bitCount = 0;
    for (let i = 0; i < wordData.length; i++) {
        buffer |= wordData[i] << bitCount;
        bitCount += 15;
        while (bitCount >= 8) {
            bytes.push(buffer & 0xFF);
            buffer >>= 8;
            bitCount -= 8;
        }
    }
    if(bitCount > 0){
        words.push(buffer & 0x7FFF);
    }
    return bytes;
}

function bytesToWords(byteData){
    let words = [];
    let buffer = 0;
    let bitCount = 0;
    for(let i = 0;i<byteData.length;i++){
        buffer |= byteData[i] << bitCount;
        bitCount += 8;
        while(bitCount >= 15){
            words.push(buffer & 0x7FFF);
            buffer >>= 15;
            bitCount -= 15;
        }
    }
    if(bitCount > 0){
        words.push(buffer & 0x7FFF);
    }
    return words;
}


function bitsToInd(bits) {
    let ind = 0;
    for (let i = 0; i < bits.length; i++) {
        ind |= (bits[i] << i);
    }
    return ind;
}

function blobToBin(data) { //lsb first
    let bin = [];
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < 8; j++) {
            bin.push(data[i] >> j & 1);
        }
    }
    return bin;
}
/*
UNKNOWN = 0
A-Z = 1-26
SPACE = 27
commas, periods, exclamation marks, apostrophes, and mabye colons
. = 28
, = 29
' = 30
? = 31
*/
function decodeChar(i) {
    if (i == 0) {
        return "";
    } else if (i >= 1 && i <= 26) {
        return String.fromCharCode(96 + i);
    } else {
        return dchars[i] ? dchars[i] : "|";
    }
}

function encodeChar(i) {
    if (!i) {
        return 0;
    }
    const val = i.charCodeAt();
    if (val >= 97 && val <= 122) { //lowercase a - z
        return val - 96; // abc index
    } else {
        return chars[i] ? chars[i] : 0; //encode 0 if not found
    }
}
