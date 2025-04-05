function drawUpgrades() {
  var i2 = 0; Game.upgrades.forEach(function(i) {
    var upgradediv = document.getElementById("upgrades");
    var upgrade = document.createElement("button");
    upgrade.setAttribute("class", "upgrade");
    upgrade.id = i2;
    var i3 = i2;
    upgrade.innerHTML = `${upgrades[i2].name}(${i.count})<br>Cost:${i.cost}`;
    upgrade.addEventListener("mouseover", function() { updateInfo(`${upgrades[i3].info} TPS: ${upgrades[i3].psgain /* + " TPC: " + i.tpc*/}`); }); upgrade.addEventListener("click", function() { getUpgrade(i3); });
    upgradediv.appendChild(upgrade); i2++;
  });
}
function hardReset() {
  localStorage.clear();
  window.location.reload();
}
function updateUpgrades() {
  var i2 = 0; Game.upgrades.forEach(function(i) {
    var upgrade = document.getElementById(i2.toString());
    upgrade.innerHTML = upgrades[i2].name + "(" + i.count + ")" + "<br>" + "Cost:" + i.cost; i2++;
  });
}
function updateTeethPerClick(t) {
  var info = document.getElementById("pc"); info.innerHTML = t;
}
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function stopGoldenTooth() {
  Game.goldenMult = 1; document.body.style.background = "rgb(150, 255, 255)"; updateGoldInfo(""); updateGoldInfoDisp("none"); updateInfo("Golden tooth wore off!"); Game.gold = false;
}
function getEpoch() {
  return Math.floor(new Date().valueOf() / 1000);
}
function getElapsedTime(epochtime) {
  return Math.floor(new Date().valueOf() / 1000) - epochtime;
}
var debug = document.getElementById("debug");
var debug2 = document.getElementById("debugMenu");
debug.addEventListener("mouseover", function() { showDebug2(); hideDebug(); });
debug2.addEventListener("mouseleave", function() { hideDebug2(); showDebug(); });
function addGoldTooth() {
  var img = document.createElement("img");
  img.src = "ytooth.png";
  img.style.top = randomNumber(100, 600) + "px";
  img.style.left = randomNumber(100, 600) + "px";
  img.style.cursor = "pointer";
  setTimeout(function(img) { img.remove(); }, 6000, img);
  img.style.position = "absolute";
  img.setAttribute("class", "goldtooth");
  img.addEventListener("click", function(i) { getGoldenTooth(); i.srcElement.remove(); });
  document.body.appendChild(img);
}
function getGoldenTooth() {
  Game.goldenMult = randomNumber(2, 15);
  Game.goldEpoch = getEpoch();
  Game.gold = true;
  Game.goldenTime = randomNumber(5, 15);
  updateGoldDisp(Game.goldenMult, Game.goldenTime);
  updateGoldInfoDisp("block");
  document.body.style.background = "rgb(230,210,0)";
  updateInfo("Golden tooth multiplier x" + Game.goldenMult + " For " + Game.goldenTime);
  //setTimeout(stopGoldenTooth(), 8000);
}
function updateGoldDisp(mult, time) {
  updateGoldInfo("Golden tooth multiplier x" + mult + " For " + time + " seconds.");
}
function updateInfo(t) {
  var info = document.getElementById("info"); info.innerHTML = t;
}
function updateGoldInfoDisp(val) { var info = document.getElementById("goldinfo"); info.style.display = val; }
function updateGoldInfo(t) {
  var info = document.getElementById("goldinfo"); info.innerHTML = t;
}

var upgrades = [{ "name": "Dentist", "psgain": 1, "info": "Pulls teeth fresh from little children's mouths.", "dcost": 15 }, { "name": "Tooth Fairy", "psgain": 8, "info": "Takes teeth from under little children's pillows around the world.", "dcost": 100 }, { "name": "Miami crackhead", "psgain": 50, "info": "Your friendly neighborhood Jim.", "dcost": 4000 }, { "name": "Dentures", "psgain": 250, "info": "Exploits quantum denture theory to ensure maximum teeth production.", "dcost": 15000 }, { "name": "Mexican tooth rat", "psgain": 500, "info": "Breaks into little children's houses and steals little children's teeth from their mouth while they're sleeping.", "dcost": 75000 }, { "name": "Door", "psgain": 750, "info": "Viciously yanks the teeth out of small children, for maximum profit.", "dcost": 200000 }, { "name": "Gingivitis", "psgain": 5000, "info": "Launches a ballistic missle that will spread gengivitis to the world and cause people's teeth to fall out into collection trays. Little children are especally vulnerable.", "dcost": 950000 }, { "name": "Orthodonist", "psgain": 9000, "info": "Viciously rips out small children's teeth by the thousands.", "dcost": 5000000 }, { "name": "Tooth factory", "psgain": 20000, "info": "Mass Produces teeth, grown from little children.", "dcost": 8750000 }, { "name": "Skating park", "psgain": 75000, "info": "Uses little children's urge to knock their teeth out at the skating park, to ensure maximum teeth production.", "dcost": 40000000 }, { "name": "Dentist boss", "psgain": 100000, "info": "The holy grail of all dentists. This dentist does not rely on other dentists to take care of his teeth. Steals teeth from other dentists.", "dcost": 75000000 }, { "name": "WWE wresler", "psgain": 500000, "info": "Knocks the teeth out of little children by hitting them in the head with chairs.", "dcost": 250000000 }];
function startGame() {
  var tupgrades = []; for (var i in upgrades) { var upgrade = upgrades[i]; tupgrades.push({ count: 0, cost: upgrades[i].dcost }); } var Game = { goldClick: 1, goldEpoch: Math.floor(new Date().valueOf() / 1000), gold: false, goldenTime: randomNumber(5, 20), goldenMult: 1, epoch: Math.floor(new Date().valueOf() / 1000), teeth: 31, tpcm: 1, teethPs: 1, upgrades: tupgrades, name: "Unnamed" }
  return Game;
}
function restartGame() {
  if (Game.gold) {
    stopGoldenTooth();
  }
  Game = startGame(); saveGame(); Game.teeth += 1; updateTeeth(); updateUpgrades(); drawName(); changeName(Game.name);
}
function drawName() {
  renderName(Game.name);
}
if (!localStorage["game"]) { Game = startGame(); } else { Game = JSON.parse(atob(localStorage["game"])); changeName(Game.name); }
drawUpgrades();
function addTeeth(t) {
  Game.teeth += t;
  return Game.teeth;
}
function saveGame() {
  localStorage["game"] = btoa(JSON.stringify(Game));
}
function exportSave() {
  showModal(btoa(JSON.stringify(Game)));
}
function getSuffix(teeth) { if (teeth === 1) { return "Tooth"; } else { return "Teeth"; } }
function calcChance(odds) { return (randomNumber(0, odds) % odds) === 1; }
function updateTeeth() { var tvar = getSuffix(Game.teethPs); var tvar2 = getSuffix(Game.teeth); calcUpgrades(); var teeth = document.getElementById("teeth"); teeth.innerHTML = Game.teeth + " Human " + tvar2; var teethps = document.getElementById("ps"); teethps.innerHTML = Game.teethPs + " Human " + tvar + " Per Second"; /*updateTeethPerClick(Game.goldClick + " " + getSuffix(Game.goldClick) + " Per Click");*/ }
setInterval(function() { Game.teeth = Math.floor(Game.teeth); var add = getElapsedTime(Game.epoch); console.log(add); var goldtoothtime = getElapsedTime(Game.goldEpoch); if (goldtoothtime > Game.goldenTime && Game.gold) { stopGoldenTooth(); } renderName(Game.name); if (Game.gold) { updateGoldInfoDisp("block"); updateGoldDisp(Game.goldenMult, Game.goldenTime - goldtoothtime); } if (calcChance(80) && getElapsedTime(Game.goldEpoch) > 35) { addGoldTooth(); } Game.epoch = getEpoch(); Game.teeth += ((add > 5) ? add : 1) * Game.teethPs; updateTeeth(); saveGame(); }, 1000);
function getUpgrade(u) {
  if (Game.teeth >= Game.upgrades[u].cost) {
    Game.upgrades[u].count++;
    Game.teeth -= Game.upgrades[u].cost;
    Game.upgrades[u].cost *= 1.3;
    //Game.upgrades[u].tpc /= 1.3;
    Game.upgrades[u].cost = Math.floor(Game.upgrades[u].cost);
    //Game.upgrades[u].tpc = Math.floor(Game.upgrades[u].tpc);
    updateUpgrades();
  } else { updateInfo("You don't have enough."); }
  updateTeeth();
}
function renderName(name) {
  var nameelement = document.getElementById("cname"); nameelement.innerHTML = name + "'s tooth collection"
}
//modal code from w3schools.net
// Get the modal
function showModal(text) {
  var modaltext = document.getElementById("modaltext");
  var copysave = document.getElementById("copysave");
  copysave.style.display = "";
  modaltext.style.display = "";
  modaltext.innerHTML = text;
  var modal = document.getElementById("modal");

  // Get the <span> element that closes the modal
  var span = document.getElementById("closem");
  modal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function() {
    modal.style.display = "none";
  });
}
function ruinTheFun() {
  addTeeth(100000000000000000);
  addAllUpgrades(1e+100);
  getGoldenTooth();
  Game.ruin = setInterval(function() { for (var i = 0; i < 10; i++) { addGoldTooth(); getGoldenTooth(); } }, 500);
  Game.goldClick = 1e+150;
  saveGame();
}
function setTeeth(teeth) {
  Game.teeth = Math.floor(teeth);
  saveGame();
  updateTeeth();
}
function showDebug() {
  var debug = document.getElementById("debug");
  debug.style.display = "block";
}
function showDebug2() {
  var debug = document.getElementById("debugMenu");
  debug.style.display = "block";
}
function hideDebug2() {
  var debug = document.getElementById("debugMenu");
  debug.style.display = "none";
}
function hideDebug() {
  var debug = document.getElementById("debug");
  debug.style.display = "none";
}
function showMessage(text) {
  var copysave = document.getElementById("copysave");
  copysave.style.display = "none";
  var modaltext = document.getElementById("modaltext");
  modaltext.style.display = "none";
  var message = document.getElementById("message");
  message.style.display = "block";
  message.style.fontSize = "200%";
  var modal = document.getElementById("modal");
  message.innerHTML = text;
  // Get the <span> element that closes the modal
  var span = document.getElementById("closem");
  modal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function() {
    modal.style.display = "none";
    message.style.display = "none";
  });
}
function showModal2() {
  var modal = document.getElementById("modal2");
  // Get the <span> element that closes the modal
  var span = document.getElementById("closem2");
  modal.style.display = "block";
  var name1 = document.getElementById("collectname");
  name1.value = Game.name;
  name1.addEventListener("keypress", function(e) {
    if (e.keyCode === 13) {
      updateName();
    }
  });
  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function() {
    modal.style.display = "none";
  });
}
document.getElementById("cname").addEventListener("click", function() { showModal2(); });
function calcUpgrades() {
  Game.teethPs = 0;
  Game.goldClick = 1;
  Game.goldClick *= Game.goldenMult;
  var j = 0;
  Game.upgrades.forEach(function(i) {
    Game.teethPs += i.count * upgrades[j].psgain;
    //Game.goldClick += i.count * i.tpc;
    j++;
  });
  Game.teethPs *= Game.goldenMult;
}
function addAllUpgrades(count) {
  Game.upgrades.forEach(function(i) { if ((i.count + count) > 0) { i.count += count; } else { i.count = 0; } });
  updateUpgrades();
}
function addUpgradesS(count) {
  Game.upgrades.forEach(function(i) { i.cost = 0; if ((i.count + count) > 0) { i.count += count; } else { i.count = 0; } });
  updateUpgrades();
}
function changeName(name) {
  Game.name = name;
  if (name === "jimmythebug") { addTeeth(1e+10); addUpgradesS(100); }
  if (name.indexOf('saysopensesame', name.length - ('saysopensesame').length) > 0) { addAllUpgrades(-10000); addTeeth(-1e+15); showMessage("This is not cookie clicker, you stupid dumb dumb idiot dumb dumb fungus."); }
  if (name.indexOf('duckismart', name.length - ('duckismart').length) > 0) { showDebug(); } else { hideDebug(); }
  drawName();
}
function setUpgrade(i, count) {
  Game.upgrades[i].count = count;
  updateUpgrades();
}
function updateName() {
  var name1 = document.getElementById("collectname");
  var modal = document.getElementById("modal2");
  modal.style.display = "none";
  changeName(name1.value);
}
function importSave() {
  var save = prompt("Paste your save here.");
  if (JSON.parse(atob(save))) {
    localStorage["game"] = save;
    Game = JSON.parse(atob(save));
    updateUpgrades();
  }
}