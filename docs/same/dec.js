function afskdemod(signal, samplingFreq) {
    var fMark = 2083.3;
    var fSpace = 1562.5;
    var markI = [];
    var markQ = [];
    var spaceI = [];
    var spaceQ = [];
    var y = [];

    for (var i = 0; i < signal.length; i++) {
        markI[i] = signal[i] * Math.sin(2 * Math.PI * i * (fMark / samplingFreq));
        markQ[i] = signal[i] * Math.cos(2 * Math.PI * i * (fMark / samplingFreq));
        spaceI[i] = signal[i] * Math.sin(2 * Math.PI * i * (fSpace / samplingFreq));
        spaceQ[i] = signal[i] * Math.cos(2 * Math.PI * i * (fSpace / samplingFreq));

        // Integration over bit period, samplingFreq/1200
        var markIInteg = 0;
        var markQInteg = 0;
        var spaceIInteg = 0;
        var spaceQInteg = 0;

        for (var j = 0; j < samplingFreq / 520.33333333333; j++) {
            if (i - j > 0) {
                markIInteg += markI[i - j];
                markQInteg += markQ[i - j];
                spaceIInteg += spaceI[i - j];
                spaceQInteg += spaceQ[i - j];
            }
        }

        var s1 = markIInteg * markIInteg + markQInteg * markQInteg;
        var s2 = spaceIInteg * spaceIInteg + spaceQInteg * spaceQInteg;
        y[i] = s1 - s2;
    }

    return y;
}
var s = [];
var last;
for(var i = 0;i<samples.length;++i){
    var sa = samples[i];
    if(sa!=last){
        s.push(i);
    }
    last = sa;
}
<!DOCTYPE html>
<html>
<head>
<style>
table {
  border-collapse: collapse;
  border: 2px solid black;
  font-size: 1.1em;
}
table td {
  border: 2px solid black;
}
.title {
font-weight: bold;
}
.entry {
cursor: pointer;
user-select: none;
}
</style>
</head>
<body>
<table id="fips">
<tbody>
<tr class="title"><td>Location</td><td>FIPS Code</td></tr>
</tbody>
<tbody id="container"></tbody>
</table>
<script>
var locations = [22121,22123,25125];
function updateTable(){
var fcont = document.getElementById("container");
var fipstable = document.getElementById("fips");
fcont.innerHTML = "";
for (var i = 0;i<locations.length;i++){
var tr = document.createElement("tr");
var c = document.createElement("td");
var l = document.createElement("td");
c.innerText = locations[i];l.innerText="Parsed";tr.appendChild(l);tr.appendChild(c);
tr.setAttribute("class","entry");
tr.setAttribute("data-val",i.toString());
tr.addEventListener("click",function(e){locations.splice(parseInt(e.srcElement.parentElement.getAttribute("data-val")),1);updateTable();});
fcont.appendChild(tr);
}
}
updateTable();
</script>
</body>
</html>
    
<br>State: <select id="stateselect"></select> County: <select id="countyselect"></select>
  <button onclick="addLoc();">Add</button>

stateselect.innerHTML = "";stateselect.addEventListener("change",function(e){});Object.keys(state).sort().forEach(e=>{var option = document.createElement("option");option.innerHTML = state[e];option.setAttribute("value",e);stateselect.appendChild(option);})
