//Use this script to generate your character
function Person(race, item, name) {
  this.race = race;
  this.item = item;
  this.name = name;
  this.currentHealth = 100;
  this.maxHealth = 100;

  this.min = 3;
  this.maxDamage = 20;
  this.maxHealing = 30;

  if (this.race === "Orcs") {
    this.maxHealth = 140;
    this.currentHealth = 140;
  } else {
    this.maxHealth = 100;
    this.currentHealth = 100;
  }

  this.vampires = function (number, side) {
    if (this.race === "Vampires" && hit[number].disabled === true) {
      this.currentHealth += side.currentHealth * 0.1;
      if (this.currentHealth > this.maxHealth) {
        this.currentHealth = 100;
      }
    } else {
      this.currentHealth;
    }
  };

  this.heal = function () {
    this.healPoints = Math.floor(Math.random() * 30 + 1);
    if (this.item === "staff") {
      this.healPoints = Math.floor(Math.random() * 30 + 1) * 1.2;
      this.currentHealth += this.healPoints;
    } else {
      this.healPoints = Math.floor(Math.random() * 30 + 1);
      this.currentHealth += this.healPoints;
    }

    if (this.currentHealth > this.maxHealth) {
      this.currentHealth = this.maxHealth;
    } else {
      this.currentHealth;
    }
  };

  this.damage = function (side2) {
    let hit = this.min + Math.floor(Math.random() * 20);
    var chance = Math.floor(Math.random() * 3 + 1);

    if (side2.race === "human") {
      hit = hit * 0.8;
    } else if (side2.race === "Elves" && chance === 2) {
      this.currentHealth -= hit * 0.5;
    } else {
      hit = hit;
    }

    if (side2.item === "boots" && chance === 2) {
      hit = 0;
      side2.currentHealth -= hit;
    } else if (this.item === "sword" && chance === 2) {
      hit *= 1.3;
      side2.currentHealth -= hit;
    } else if (this.item === "bow" && chance === 2) {
      hit *= 2;
      side2.currentHealth -= hit;
    } else {
      side2.currentHealth -= hit;
    }
  };

  this.healthBar = function (barSelection) {
    healthAnimation[barSelection].style.width = this.currentHealth + "%";
  };

  this.gameOver = function () {
    if (this.currentHealth <= 0) {
      if (
        confirm("GAME OVER \n" + "Press 'OK' if you want to play again!") ==
        true
      ) {
        location.reload();
      } else {
        alert("Was a pleasure to see on our high level RPG!");
      }
    }
  };

  this.displayChar = function () {
    return `I am a ${this.race}, I wield a ${this.item}, my total health point are ${this.maxHealth}`;
  };
}

// healthAnimation[0];
// VS1

const vs1 = document.querySelector("#vs1");

const selection = document.querySelectorAll(".hero");

const orcsSelected = document.querySelectorAll(".aside_orcs");
for (var i = 0; i < orcsSelected.length; i++) {
  orcsSelected[i].style.display = "none";
}

const humansSelected = document.querySelectorAll(".aside_humans");
for (var i = 0; i < humansSelected.length; i++) {
  humansSelected[i].style.display = "";
}
const elvesSelected = document.querySelectorAll(".aside_elves");
for (var i = 0; i < orcsSelected.length; i++) {
  elvesSelected[i].style.display = "none";
}
const vampiresSelected = document.querySelectorAll(".aside_vampires");
for (var i = 0; i < orcsSelected.length; i++) {
  vampiresSelected[i].style.display = "none";
}

selection[0].addEventListener("change", () => {
  if (selection.value === "orcs") {
    orcsSelected[0].style.display = "";
    humansSelected[0].style.display = "none";
    elvesSelected[0].style.display = "none";
    vampiresSelected[0].style.display = "none";
  } else if (selection[0].value === "humans") {
    humansSelected[0].style.display = "";
    orcsSelected[0].style.display = "none";
    elvesSelected[0].style.display = "none";
    vampiresSelected[0].style.display = "none";
  } else if (selection[0].value === "elves") {
    elvesSelected[0].style.display = "";
    humansSelected[0].style.display = "none";
    orcsSelected[0].style.display = "none";
    vampiresSelected[0].style.display = "none";
  } else {
    vampiresSelected[0].style.display = "";
    elvesSelected[0].style.display = "none";
    humansSelected[0].style.display = "none";
    orcsSelected[0].style.display = "none";
  }
});

// VS2

const vs2 = document.querySelector("#vs2");
vs2.style.display = "none";

selection[1].addEventListener("change", () => {
  if (selection[1].value === "orcs") {
    orcsSelected[1].style.display = "";
    humansSelected[1].style.display = "none";
    elvesSelected[1].style.display = "none";
    vampiresSelected[1].style.display = "none";
  } else if (selection[1].value === "humans") {
    humansSelected[1].style.display = "";
    orcsSelected[1].style.display = "none";
    elvesSelected[1].style.display = "none";
    vampiresSelected[1].style.display = "none";
  } else if (selection[1].value === "elves") {
    elvesSelected[1].style.display = "";
    humansSelected[1].style.display = "none";
    orcsSelected[1].style.display = "none";
    vampiresSelected[1].style.display = "none";
  } else {
    vampiresSelected[1].style.display = "";
    elvesSelected[1].style.display = "none";
    humansSelected[1].style.display = "none";
    orcsSelected[1].style.display = "none";
  }
});

// VALIDATION CHARACTERE

const validation = document.querySelector(".button1");

const validationNextPage = document.querySelector(".button2");

const creation = document.querySelector("#creation");

const play = document.querySelector("#play");
play.style.display = "none";

const choseItem = document.querySelectorAll(".items1 button");

const choseItem1 = document.querySelectorAll(".items2 button");

let characterName = document.querySelectorAll(".name");

let player1 = [];

choseItem[0].addEventListener("click", () => {
  player1.push("boots");
});
choseItem[1].addEventListener("click", () => {
  player1.push("staff");
});
choseItem[2].addEventListener("click", () => {
  player1.push("sword");
});
choseItem[3].addEventListener("click", () => {
  player1.push("bow");
});

function heroSelectionPlayer1() {
  if (selection[0].value === "humans") {
    player1.unshift("Human");
    injectCharacter.innerHTML =
      '<img src="Logos/humans.png" alt="humans picture" />';
  } else if (selection[0].value === "orcs") {
    player1.unshift("Orcs");
    injectCharacter.innerHTML =
      '<img src="Logos/orc.png" alt="Orcs picture" />';
  } else if (selection[0].value === "elves") {
    player1.unshift("Elves");
    injectCharacter.innerHTML =
      '<img src="Logos/elves.png" alt="Orcs picture" />';
  } else {
    player1.unshift("Vampires");
    injectCharacter.innerHTML =
      '<img src="Logos/vampires.png" alt="Orcs picture" />';
  }
}

let you;

let persoName;

let healthAnimation = document.querySelectorAll(".progress-bar");

let moves = document.querySelectorAll(".moves");

validation.addEventListener("click", () => {
  persoName = characterName[0].value;
  heroSelectionPlayer1();
  vs1.style.display = "none";
  vs2.style.display = "";
});

let player2 = [];

choseItem1[0].addEventListener("click", () => {
  player2.push("boots");
});
choseItem1[1].addEventListener("click", () => {
  player2.push("staff");
});
choseItem1[2].addEventListener("click", () => {
  player2.push("sword");
});
choseItem1[3].addEventListener("click", () => {
  player2.push("bow");
});

function heroSelectionPlayer2() {
  if (selection[1].value === "humans") {
    player2.unshift("Human");
    injectCharacter2.innerHTML =
      '<img src="Logos/humans.png" alt="humans picture" />';
  } else if (selection[1].value === "orcs") {
    player2.unshift("Orcs");
    injectCharacter2.innerHTML =
      '<img src="Logos/orc.png" alt="Orcs picture" />';
  } else if (selection[1].value === "elves") {
    player2.unshift("Elves");
    injectCharacter2.innerHTML =
      '<img src="Logos/elves.png" alt="Orcs picture" />';
  } else {
    player2.unshift("Vampires");
    injectCharacter2.innerHTML =
      '<img src="Logos/vampires.png" alt="Orcs picture" />';
  }
}

let enemy;
let persoName1;

const player1Name = document.querySelector("#player1P h2");
const player2Name = document.querySelector("#player2P h2");

validationNextPage.addEventListener("click", () => {
  persoName1 = characterName[1].value;
  heroSelectionPlayer2();

  // perso created
  player1Name.innerHTML = persoName;
  player2Name.innerHTML = persoName1;
  you = new Person(player1[0], player1[player1.length - 1], persoName);
  enemy = new Person(player2[0], player2[player2.length - 1], persoName1);
  addPghLog.innerHTML = you.displayChar();
  addPghLog1.innerHTML = enemy.displayChar();
  enemy.healthBar(1);
  you.healthBar(0);

  creation.style.display = "none";
  play.style.display = "";
});

//CREATE EL for player 1

const character = document.querySelector(".character1");

const injectCharacter = document.createElement("div");

let p1 = character.append(injectCharacter);

//CREATE EL for player 2

const character2 = document.querySelector(".character2");

const injectCharacter2 = document.createElement("div");

let p2 = character2.append(injectCharacter2);

// log panel

const log = document.querySelectorAll(".log");

const addPghLog = document.createElement("p");

const addPghLog1 = document.createElement("p");

let log1 = log[0].append(addPghLog);

let log2 = log[1].append(addPghLog1);

addPghLog.classList.add("logModif");
addPghLog1.classList.add("logModif");

// let attack = document.querySelectorAll(".hit");
