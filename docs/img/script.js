var canvas = document.getElementById("data");
var ctx = canvas.getContext("2d");
var pinput = document.getElementById("psize");
var tinput = document.getElementById("input");
var finput = document.getElementById("image");
const encoder = new TextEncoder();
function encodeText(text) {
  return encoder.encode(text);
}
pinput.addEventListener("change",function(){
  setPixelSize(pinput.value);
});
function setHeight(e){canvas.height = e;}
function calcHeight(textLen){
  return Math.ceil(tinput.value.length/mwidth/3)*parseInt(psize);
}
finput.addEventListener("change", function(e) {
  var image = new Image();
  finput.files[0].arrayBuffer().then(e=>{var b = new Blob([e],{type:finput.files[0].type});image.src = URL.createObjectURL(b);image.onload = function(){setHeight(image.height);ctx.drawImage(image,0,0);}})
});
function setPixelSize(size){psize=size;px = (canvas.width * canvas.height) / psize;mwidth = canvas.width / psize;}
var vstop = 0;
var psize = 4;
var px = (canvas.width * canvas.height) / psize;
var mwidth = canvas.width / psize;
function clear() {
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#000000";
}
function save() {
    var dataURL = canvas.toDataURL('image/png');
    var link = document.createElement('a');
    link.href = dataURL;
    link.download = 'encoded.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
function gen(){
  setPixelSize(pinput.value);
  setHeight(calcHeight(tinput.value.length));
  genPixels(tinput.value);
}
function generateText(text){
  setPixelSize(pinput.value);
  setHeight(calcHeight(text.length));
  genPixels(text);
}
function dec(){
  tinput.value = decodeText();
}
genPixels("1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17");
function genPixels(text) {
  clear();
  var b = Array.from(encodeText(text));
  var numP = Math.ceil(b.length / 3);
  for (var i = 0; i < numP; i++) {
    var j = i * 3;
    drawPixel((i % mwidth) * psize, Math.floor(i / mwidth) * psize, [b[j], (j + 1 < b.length) ? b[j + 1] : 255, (j + 2 < b.length) ? b[j + 2] : 255]);
  }
}
function decodeText() {
  var final = "";
  for (var i = 0; i < px; i++) {
    var t = Array.from(ctx.getImageData(((i % mwidth) * psize)+(psize-1), Math.floor(i / mwidth) * psize, 1, 1).data);
    final += (t[0] != 255 ? String.fromCharCode(t[0]) : "") + (t[1]!=255 ? String.fromCharCode(t[1]) : "") + (t[2]!=255 ? String.fromCharCode(t[2]) : "");if(t[0] == 255 || t[1] == 255 || t[2] == 255){ i = px + 1;}
  }
  return final;
}
function drawPixel(x, y, data) {
  ctx.fillStyle = "rgb(" + data[0] + "," + data[1] + "," + data[2] + ")";
  ctx.fillRect(x, y, psize, psize);
}
