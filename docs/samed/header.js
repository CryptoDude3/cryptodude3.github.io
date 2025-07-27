function parseHeader(input) {
    if (input.startsWith("NNNN")) {
        return {
            eom: true
        };
    }
    let output = {};
    const parts = input.split("+");
    const first = parts[0].split("-");
    const second = parts[1].split("-");
    if (first.length < 3 || second.length !== 4) {
        return;
    }
    first.shift(); //starting ZCZC (don't check for more redundancy)
    output.originator = first.shift();
    output.event = first.shift();
    output.locationCodes = first.map(e => parseLocation(e));
    output.alertTime = second.shift();
    output.issueTime = parseTime(second.shift());
    output.sender = second.shift();
    output.rawHeader = input;
    return output;
}

function parseLocation(loc) {
    let ret = {};
    if (loc.length !== 6) {
        return "UNKNOWN";
    }
    ret.region = rgn[loc[0]];
    const st = loc.slice(1, 3);
    ret.state = state[st];
    ret.county = county[st][loc.slice(3, 6)];
    return ret;
}

function parseTime(str) {
    if (str.length !== 7) {
        return;
    }
    const date = new Date(new Date().getFullYear(), 0, parseInt(str.slice(0, 3)));
    date.setUTCHours(parseInt(str.slice(3, 5)), parseInt(str.slice(5, 7)));
    return date;
}

function headerToText(parsed) {
    if (!parsed) {
        return;
    }
    if (parsed.eom) {
        return "End Of Message.";
    }
    const eventName = events[parsed.event] ? events[parsed.event] : "unknown event (" + parsed.event + ")";
    const locCodes = parsed.locationCodes;
    const stateName = locCodes[0].state;
    return entryPoints[parsed.originator] + " has issued " + (isVowel(eventName[0]) ? "an " : "a ") + eventName + " for the following " + getCountyName(stateName) + " in " + stateNames[stateName] + ": " + locationsToReadable(locCodes);
}

function locationsToReadable(codes) { //handles periods
    let output = "";

    for (let i = 0; i < codes.length; i++) {
        if (codes[i].region !== "None") {
            output += codes[i].region + " ";
        }
        output += codes[i].county ? codes[i].county : "Unknown Location";
        output += (i == (codes.length - 1)) ? "." : ", ";
    }
    return output;
}

function isVowel(letter) {
    return ["a", "e", "i", "o", "u"].includes(letter.toLowerCase());
}

function getCountyName(state, plural) {
    if (countyNameExceptions[state]) {
        return countyNameExceptions[state];
    }
    return "counties";
}

function processHeader(header, container) { //called after header is decoded
    const view = document.createElement("button");
    const parsedHeader = parseHeader(header);
    if(!parsedHeader){
        return;
    } else if(parsedHeader.eom){
        const eomIndicator = document.createElement("div");
        eomIndicator.style.color = "gray";
        eomIndicator.style.display = "inline";
        eomIndicator.innerText = "[EOM]";
        container.appendChild(eomIndicator);
        return;
    }
    view.addEventListener("click", () => {
        showModal(parsedHeader);
    });
    view.innerText = "View Alert";
    container.appendChild(view);
    //console.log(headerToText(decoded));
}
//add a view of alerts