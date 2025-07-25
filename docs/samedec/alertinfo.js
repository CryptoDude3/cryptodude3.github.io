const modalClose = document.querySelector("#close");
const modalContainer = document.querySelector(".modalContainer");
const infoContainer = document.querySelector(".modalInfo");
modalClose.addEventListener("click", () => {
    modalContainer.style.display = "none";
});

function showAlertInfo(header) { //takes a parsed header
    infoContainer.innerHTML = "";
    const alertName = events[header.event];
    const issueTime = header.issueTime;
    const expirationTime = getExpirationTime(issueTime, header.alertTime);
    console.log(expirationTime);
    infoContainer.appendChild(createInfo(`Type: <div class="${getAlertType(alertName)}">${alertName}</div>`));
    infoContainer.appendChild(createInfo(`Issuer: ${entryNames[header.originator]}`));
    infoContainer.appendChild(createInfo(`Affected Locations: ${locationsToReadable(header.locationCodes)}`));
    infoContainer.appendChild(createInfo(`Issue date: ${dateToReadable(issueTime,false)}`));
    infoContainer.appendChild(createInfo(`Expires on: ${dateToReadable(expirationTime,false)}`));
    infoContainer.appendChild(createInfo(`Time until Expiration: ${isExpired(expirationTime)?"EXPIRED":relativeToReadable(subtractRelative(expirationTime,new Date()),false)}`));
    infoContainer.appendChild(createInfo(`Sender ID: ${header.sender}`));
    //infoContainer.appendChild(createInfo(`Alert Text: ${headerToText(header)}`));
    infoContainer.appendChild(createInfo(`<a href="https://cryptodude3.github.io/same?header=${header.rawHeader}">Open in SAME Encoder</a>`));
}

function timeToReadable(time, use24) {
    if (use24) {
        return time.getHours().toString().padStart(2, "0") + ":" + time.getMinutes().toString().padStart(2, "0");
    } else {
        const hrs = (time.getHours() % 12);
        return (((hrs == 0) ? 12 : hrs).toString().padStart(2, "0") + ":" + time.getMinutes().toString().padStart(2, "0") + " " + ((time.getHours() >= 12) ? "PM" : "AM"));
    }
}

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
function dateToReadable(time, use24) {
    const readableTime = timeToReadable(time, use24);
    return months[time.getMonth()] + " " + numberPrefix(time.getDate()) + ", " + readableTime;
}

const pre = ["th","st","nd","rd"];
function numberPrefix(num){
    if(Math.floor(num/10) == 1){
        return num + "th";
    }
    const prefix = pre[num % 10];
    return num + (prefix?prefix:"th")
}

function isExpired(expirationTime) {
    return Date.now() > expirationTime.getTime();
}

function relativeToReadable(time) {
    let output = "";
    if (time.hrs > 0) {
        output += time.hrs.toString().padStart(2,"0") + " hrs ";
    }
    output += time.mins.toString().padStart(2,"0") + ((time.mins == 1) ? " min" : " mins");
    return output;
}

function subtractRelative(date1, date2) {
    const time = Math.floor((date1.getTime() - date2.getTime()) / 1000) / 60;
    return {
        hrs: Math.floor(time / 60),
        mins: Math.floor(time % 60)
    };
}

function subtractDate(date1, date2) {
    return new Date(date1.getTime() - date2.getTime())
}

function addDate(date1, date2) {
    return new Date(date1.getTime() + date2.getTime())
}

function getExpirationTime(issueTime, inputStr) {
    const hrs = parseInt(inputStr.slice(0, 2));
    const mins = parseInt(inputStr.slice(2));
    const date = new Date(issueTime);
    date.setHours(issueTime.getHours() + hrs, issueTime.getMinutes() + mins);
    return date;
}

function getAlertType(name) {
    const nameLower = name.toLowerCase();
    if (nameLower.includes("watch")) {
        return "watch";
    }
    else if (nameLower.includes("warning")) {
        return "warning";
    }
    else if (nameLower.includes("statement")) {
        return "statement";
    }
    return "unknown-alert";
}

function createInfo(content) {
    const infoElem = document.createElement("div");
    infoElem.className = "info";
    infoElem.innerHTML = content;
    return infoElem;
}

function showModal(parsedHeader) {
    modalContainer.style.display = "flex";
    showAlertInfo(parsedHeader);
}