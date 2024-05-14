var image = new Image();
var canvas = new Canvas();
var ctx = canvas.getContext('2d');
image.src = "hack.png";
image.onload = function() {
canvas.width = image.width;
canvas.height = image.height;
var px = (image.width * image.height);
var mwidth = image.width;
ctx.drawImage(image,0,0);
console.log(decodeText());
}
function decodeText() {
  var final = "";
  for (var i = 0; i < px; i++) {
    var t = Array.from(ctx.getImageData((i % mwidth), Math.floor(i / mwidth), 1, 1).data);
    final += (t[0] != 255 ? String.fromCharCode(t[0]) : "") + (t[1]!=255 ? String.fromCharCode(t[1]) : "") + (t[2]!=255 ? String.fromCharCode(t[2]) : "");if(t[0] == 255 || t[1] == 255 || t[2] == 255){ i = px + 1;}
  }
  return final;
}
