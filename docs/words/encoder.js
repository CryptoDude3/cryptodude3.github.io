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
    encWords.push(words[nonce ^ 0x2FA]);
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
    let nonce = words.indexOf(encWords[0]) ^ 0x2FA;
    for (let i = 1; i < encWords.length; i++) { //skip nonce
        const word = words.indexOf(encWords[i]);
        if (word == -1) {
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
    const bytes = new Uint8Array(data);
    for (let i = 0; i < bytes.length; i += 15) {
        const bits = blobToBin(bytes.subarray(i, i + 15));
        for (let j = 0; j < bits.length; j += 15) {
            const ind = bitsToInd(bits.slice(j, j + 15));
            encWords.push(words[ind ^ key ^ (nonce++ & 0x7FFF)]);
        }
    }
    return encWords.join(" ");
}

function decodeRawBinary(str, key = 0) {
    const encData = str.split(" ").map(e => words.indexOf(e));
    let output = [];
    let nonce = encData[0] ^ 0x2FA;
    for (let i = 1; i < encData.length; i += 8) { //skip nonce again
        const arr = encData.slice(i, i + 8).map(e=>e ^ key ^ (nonce++ & 0x7FFF));
        output = output.concat(wordDataToBytes(arr));
    }
    return output;
}

function wordDataToBytes(wordData) {
    let bits = [];
    let bytes = [];
    for (let i = 0; i < wordData.length; i++) {
        for (let j = 0; j < 15; j++) {
            bits.push(wordData[i] >> j & 1);
        }
    }
    for (let i = 0; i < bits.length; i += 8) {
        bytes.push(bitsToInd(bits.slice(i,i+8)));
    }
    return bytes;
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