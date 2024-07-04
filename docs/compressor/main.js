function generate(){
var code = document.querySelector("#code").value;
return compress(code);
}
function calclen(len){var j = 0,i = 0;while(j<len){i % 4 == 3 ? (i++, i++) : i++; i % 4 == 3 ? (i++, i++) : i++;j++;}return i;}
function genImgData(str){
var clen = calclen(str.length);
var data = new Uint8ClampedArray(Math.round(Math.floor(clen/4)+1)*4);
var i = 0;var j = 0;
while(j<str.length){
    data[i % 4 == 3 ? (i++, i++) : i++] = str.charCodeAt(j);
    data[i % 4 == 3 ? (i++, i++) : i++] = Math.floor(str.charCodeAt(j)/256);
    j++;
}
for(var a = 3;a<data.length;a+=4){data[a]=255;}
return data;
}
function closest(t){let a=1,s=t;for(let e=1;e<=Math.sqrt(t);e++)if(t%e==0){let r=t/e;Math.abs(e-r)<Math.abs(a-s)&&(a=e,s=r)}return[a,s]}
function writeData(data){
var tlen = data.length/4;
var c = closest(tlen);
var imgd = new ImageData(data,c[1],c[0]);
var canvas = document.querySelector("#img");
canvas.width = c[1];
canvas.height = c[0];
var ctx = canvas.getContext("2d");
ctx.putImageData(imgd,0,0);
}
function save(){saveImage(document.querySelector("#img"));}
function run(){
writeData(genImgData(generate()));
}
function genjson(){genCheatsImg(eval(document.querySelector("#code").value));}
function genCheatsImg(cheats){writeData(genImgData(JSON.stringify(cheats)+"\x00"));}
function saveImage(canvas){
    let downloadLink = document.createElement('a');
    downloadLink.setAttribute('download', prompt("Enter the file name to download:")+".png");
    canvas.toBlob(function(blob) {
      let url = URL.createObjectURL(blob);
      downloadLink.setAttribute('href', url);
      downloadLink.click();
    });
}