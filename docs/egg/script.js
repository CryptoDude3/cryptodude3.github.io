var canvas = document.getElementById("render");
var ctx = render.getContext("2d");
var thing = 3;
var egg = false;
var epos = 0;
var score = 0;
var fps = 5;
var game = true;
var bad = false;
var pause = false;
var sound = true;
var shop = false;
var eggmult = 1;
var basket = false;
var lane = false;
var filter = false;
var baskett = { width: 50 * (26 / 22) * 1.2, height: 50 * 1.2 };
var gameOverButtons = [{ x: 200, y: 300, width: 100, height: 100, src: "restart.png", eval: "restartGame();", button: true }, { x: 100, y: 0, width: 300, height: 300, src: "gameover.png" }];
var pauseButtons = [{ x: 125, y: 300, width: 100, height: 100, src: "play.png", eval: "unpauseGame();", button: true }, { x: 250, y: 300, width: 100, height: 100, src: "restart.png", eval: "restartGame();unpauseGame();", button: true }, { x: 100, y: 0, width: 300, height: 300, src: "pause2.png" }];
var mainButtons = [{ x: 375, y: 0, width: 50, height: 50, src: "pause.png", eval: "pauseGame();", button: true }, { x: 432, y: 0, width: 50, height: 50, src: "soundon.png", src2: "soundoff.png", varr: "sound", tvar: true, button: true, toggle: true }, { x: 432, y: 65, width: 50, height: 50, src: "shop.png", eval: "openShop();", button: true }];
var upgrade = [{ x: 25, y: 50, width: 450, height: 450, src: "background.png", eval: "" }, { x: 385 + 25, y: 75, width: 32, height: 32, src: "x.png", button: true, eval: "closeShop();" }];
var earned = [false, false];
if (!localStorage["upgrades"]) { localStorage["upgrades"] = btoa(JSON.stringify(earned)); }
var earned = JSON.parse(atob(localStorage["upgrades"]));
function upgradeLoop() {
  if (earned[0] & eggmult === 1) { eggmult = 2; }
  if (earned[1] & !basket) { basket = true; }
  if (earned[2] & !filter) { filter = true; }
} upgradeLoop();
var upgrades = [{ x: 15, y: 15, src: "goldegg.png", text: "Eggtastic", unlock: earned[0], cost: 20, desc: "Clicking has 2x power." }, { x: 15, y: 130, src: "basket.png", text: "Basket", unlock: earned[1], cost: 40, desc: "Collects eggs for you." }, { x: 15, y: 250, src: "filterbasket.png", text: "Filter Basket", unlock: earned[2], cost: 120, desc: "Filters out bad eggs." }];
var gameOverr = false;
var restartPos = { x: 200, y: 300, width: 100, height: 100 };
window.mousePos = { x: 0, y: 0, width: 0, height: 0 };
if (!localStorage["high"]) { localStorage["high"] = 0; }
var eggside = chance(2);
var eggpos = { x: 0, y: 0, width: 50, height: 50 };
function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}
if (!localStorage["egg"]) { localStorage["egg"] = 0; }
function setUpgrades(t) { localStorage["upgrades"] = btoa(JSON.stringify(t)); }
function getUpgrades() { return JSON.parse(atob(localStorage["upgrades"])); }
function setEggs(val) { localStorage["egg"] = val; }
function getEggs() { return Number(localStorage["egg"]); }
ctx.imageSmoothingEnabled = false;
function chance(odds) { return Math.random() < 1 / odds; }
function drawRoad(i) {
  var pic = new Image();
  pic.src = "road/sprite_" + i + ".png";
  ctx.drawImage(pic, 0, 0, 500, 500);
}
function drawEgg(l, p) {
  var pic = new Image();
  pic.src = bad ? "begg.png" : "egg.png";
  ctx.drawImage(pic, l ? 170 : 267, p * 15.625, 50, 50); eggpos.x = l ? 170 : 267; eggpos.y = p * 15.625;

}
function drawBasket(l) {
  var pic = new Image();
  pic.src = filter ? "filterbasket.png" : "basket.png";
  ctx.drawImage(pic, l ? 157 : 255, 28 * 15.625, 50 * (26 / 22) * 1.2, 50 * 1.2);
}
document.addEventListener("keydown", function(e) {
  if (e.keyCode === 32) { if (pause) { unpauseGame(); } else { pauseGame(); } }
  if (e.keyCode === 27) { if (pause) { unpauseGame(); } else { pauseGame(); } }
  if (e.keyCode === 37) { lane = true; }
  if (e.keyCode === 39) { lane = false; }
  if (e.keyCode === 65) { lane = true; }
  if (e.keyCode === 68) { lane = false; }
});
function restartGame() {
  egg = false; epos = 0; game = true; gameOverr = false; score = 0; setFps(5); main();
}
canvas.addEventListener('mousemove', function(evt) {
  window.mousePos = evt;
  if (game) {
    hoverCollision(mainButtons, window.mousePos);
    //console.log("test");
    if (egg) {
      if (collidesMouse(evt, eggpos)) { canvas.style.cursor = "pointer"; }
    }
  }
  if (gameOverr) { hoverCollision(gameOverButtons, evt); }
  if (shop) { hoverCollision(upgrade, evt); hoverCollisionU(upgrades, evt); }
  if (pause) { hoverCollision(pauseButtons, evt); }
}, false);
function collisionCheck(t, evt) {
  for (var i = 0; i < t.length; i++) {
    if (t[i].button) {
      if (collidesMouse(evt, t[i])) { return true; }
    }
  }
  return false;
}
function collisionCheckC(t, evt, name = "") {
  for (var i = 0; i < t.length; i++) {
    if (t[i].button) {
      if (collidesMouse(evt, t[i])) { eval(t[i].eval); }
    }
    if (t[i].toggle) {
      if (collidesMouse(evt, t[i])) {
        var th = this[name][i]; this[name][i].tvar = !this[name][i].tvar;
        //console.log(this[name][i].tvar);
        this[t[i].varr] = this[name][i].tvar; renderButtons(this[name]);
      }
    }
  }
  return false;
}
function collisionCheckU(t, evt, name) {
  for (var i = 0; i < t.length; i++) {
    var xpos = upgrades[0].x + t[i].x + 25 + 10;
    var ypos = upgrades[0].y + t[i].y + 40 + 55;
    if (collidesMouse(evt, { x: xpos, y: ypos, width: 75, height: 75 * 15 / 32 })) {
      if (getEggs() >= t[i].cost & !t[i].unlock) { this[name][i].unlock = true; earned[i] = true; upgradeLoop(); setUpgrades(earned); setEggs(getEggs() - t[i].cost); }
    }
  } return false;
}
function collisionCheckUp(t, evt) {
  for (var i = 0; i < t.length; i++) {
    var xpos = upgrades[0].x + t[i].x + 25 + 10;
    var ypos = upgrades[0].y + t[i].y + 40 + 55;
    if (collidesMouse(evt, { x: xpos, y: ypos, width: 75, height: 75 * 15 / 32 })) { return true; }
  } return false;
}
function renderEggs(x, y, eggs) {
  var pic = new Image();
  pic.src = "egg.png";
  var metrics = ctx.measureText(eggs);
  var width = metrics.width + 10;
  var height =
    metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
  ctx.fillText(eggs, x, y + height + 12.5);
  ctx.drawImage(pic, x + width, y, 50, 50);
  ctx.font = "25px Arial";
}
function renderEggsU(x, y, eggs) {
  var pic = new Image();
  pic.src = "egg.png";
  ctx.font = "20px Arial";
  var metrics = ctx.measureText(eggs);
  var width = metrics.width + 10;
  var height =
    metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
  ctx.fillText(eggs, x, y + height + height);
  ctx.drawImage(pic, x + width / 1.2, y + 12.5, 25, 25);
  ctx.font = "25px Arial";
}
function pauseGame() {
  game = false;
  pause = true;
  playSound("pause.mp3");
  renderButtons(pauseButtons);
}
function openShop() {
  game = false;
  shop = true;
  renderButtons(upgrade);
}
function closeShop() {
  game = true;
  shop = false;
  main();
}
function unpauseGame() {
  game = true; pause = false; main();
  renderButtons(pauseButtons);
}
function setGameOver() {
  egg = false; epos = 0; gameOver();
}
function onEgg() {
  setEggs(getEggs() + eggmult);
}
function eggClick(basket = false) { if (bad) { if (!filter || !basket) { setGameOver(); } } else { epos = 0; egg = false; score += 25 * eggmult; drawScore(score); addInt(1); main(); playSound("coin.mp3"); onEgg(); } }
canvas.addEventListener('click', function(evt) {
  if (collidesMouse(evt, eggpos) && egg && game) { eggClick(); }
  if (gameOverr) { collisionCheckC(gameOverButtons, evt); }
  if (pause) { collisionCheckC(pauseButtons, evt); }
  if (game) { collisionCheckC(mainButtons, evt, "mainButtons"); }
  if (shop) { collisionCheckC(upgrade, evt, "upgrade"); collisionCheckU(upgrades, evt, "upgrades"); }
});
function playSound(url) {
  if (sound) {
    var audio = new Audio();
    audio.src = url; audio.play();
  }
}
function collides(a, b) {
  return a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y;
}
function collidesMouse(a2, b) {
  var a = getMousePos(canvas, a2);
  a.width = 1;
  a.height = 1;
  return a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y;
}
function gameOver() {
  game = false;
  gameOverr = true;
  if (!game) {
    playSound("gameover2.mp3");
  }
  if (score > localStorage["high"]) { localStorage["high"] = score; }
  renderGameOver();
}
ctx.font = "25px Arial";
function renderGameOver() {
  renderButtons(gameOverButtons);
  drawHigh();
}
function renderButtons(t) {
  for (var i = 0; i < t.length; i++) {
    var pic = new Image();
    if (t[i].toggle) {
      pic.src = t[i].tvar ? t[i].src : t[i].src2;
    } else { pic.src = t[i].src; }
    ctx.drawImage(pic, t[i].x, t[i].y, t[i].width, t[i].height);
  }
}
function renderImage(src, x, y, width, height) { var pic = new Image(); pic.src = src; return ctx.drawImage(pic, x, y, width, height); }
function renderUpgrades(t) {
  for (var i = 0; i < t.length; i++) {
    var xpos = upgrades[0].x + t[i].x + 25;
    var ypos = upgrades[0].y + t[i].y + 40;
    var width = 50;
    var height = 50;
    var pic = new Image();
    if (t[i].toggle) {
      pic.src = t[i].tvar ? t[i].src : t[i].src2;
    } else { pic.src = t[i].src; }
    renderImage("upblank.png", xpos, ypos, 225, 225);
    renderImage(t[i].unlock ? "own.png" : "buy1.png", xpos + 10, ypos + 55, 75, 75);
    ctx.drawImage(pic, xpos + 160, ypos + 40, width, height);
    ctx.fillText(t[i].text, xpos + 10, ypos + 30);
    ctx.font = "15px Arial";
    ctx.fillText(t[i].desc, xpos + 10, ypos + 50);
    renderEggsU(xpos + 150, ypos, t[i].cost);
  }
}
function hoverCollision(t, evt) {
  if (collisionCheck(t, evt)) { canvas.style.cursor = "pointer"; } else { canvas.style.cursor = "default"; }
}
function hoverCollisionU(t, evt) {
  if (collisionCheckUp(t, evt)) { canvas.style.cursor = "pointer"; }
}
function drawScore(score) { ctx.font = "25px Arial"; drawRoad(thing); ctx.fillText("Score: " + score, 0, 25); ctx.fillText("FPS: " + fps, 0, 75); renderEggs(0, 100, getEggs()); }
function drawHigh() {
  ctx.fillText("High Score: " + localStorage["high"], 330 - ctx.measureText("High Score: " + localStorage["high"]).width, 285);
}
function main() {
  if (game) {
    thing--;
    if (egg) { epos++; }
    if (epos > 32 && egg && !bad) { setGameOver(); }
    if (epos > 32 && egg && bad) { egg = false; epos = 0; }
    if (thing < 0) { thing = 2; }
    if (basket && epos > 29 && lane === eggside) { eggClick(true); }
    drawScore(score);
    if (chance(20) && !egg) { egg = true; eggside = chance(2); bad = chance(8); }
    //lane 0 is false and 1 is true
    if (egg) { drawEgg(eggside, epos); }
    if (basket) { drawBasket(lane); }
    hoverCollision(mainButtons, window.mousePos);
    if (collidesMouse(window.mousePos, eggpos) && egg) { canvas.style.cursor = "pointer"; }
    renderButtons(mainButtons);
  }
  if (gameOverr) {
    renderGameOver();
  }
  if (pause) { renderButtons(pauseButtons); }
  if (shop) { renderButtons(upgrade); renderUpgrades(upgrades); }
}
var int = setInterval(main, 1000 / fps);
function addInt(f) {
  var f2 = f ? f : 1;
  clearInterval(int);
  fps += f2;
  int = setInterval(main, 1000 / fps);
}
function setFps(f) {
  var f2 = f ? f : 5;
  clearInterval(int);
  fps = f2;
  int = setInterval(main, 1000 / fps);
}
//125
main();