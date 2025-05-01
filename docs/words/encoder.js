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
    const input = str.toLowerCase();
    for (let i = 0; i < input.length; i += 3) {
        const ind = (encodeChar(input[i + 2]) << 10 | encodeChar(input[i + 1]) << 5 | encodeChar(input[i])) ^ key; //randomize a little bit
        encWords.push(words[ind]);
    }
    return encWords.join(" ");
}

function decodeString(str, key = 0) {
    const encWords = str.split(" ");
    let output = "";
    for (let i = 0; i < encWords.length; i++) {
        const word = words.indexOf(encWords[i]);
        if (word == -1) {
            output += "|||";
        } else {
            const ind = word ^ key;
            output += decodeChar(ind & 31) + decodeChar(ind >> 5 & 31) + decodeChar(ind >> 10 & 31);
        }
    }
    return output;
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
