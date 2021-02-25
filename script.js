// VS1

const vs1 = document.querySelector("#vs1");

const selection = document.querySelectorAll(".hero");

const orcsSelected = document.querySelectorAll("#aside_orcs");
for (var i = 0; i < orcsSelected.length; i++) {
  orcsSelected[i].style.display = "none";
}

const humansSelected = document.querySelectorAll("#aside_humans");
for (var i = 0; i < humansSelected.length; i++) {
  humansSelected[i].style.display = "";
}
const elvesSelected = document.querySelectorAll("#aside_elves");
for (var i = 0; i < orcsSelected.length; i++) {
  elvesSelected[i].style.display = "none";
}
const vampiresSelected = document.querySelectorAll("#aside_vampires");
for (var i = 0; i < orcsSelected.length; i++) {
  vampiresSelected[i].style.display = "none";
}

selection[0].addEventListener("change", () => {
  if (selection[0].value === "orcs") {
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

const choseItem = document.querySelectorAll(".items");

let characterName = document.querySelector(".name1");

let player1 = [];

validation.addEventListener("click", () => {
  heroSelectionPlayer1();
  itemsSelectionPlayer1();
  addPghLog.innerHTML = `hello you i'm a ${player1[0]} and me and my ${player1[1]} we gone destroy you`;
  // set function to link character 1
  vs1.style.display = "none";
  vs2.style.display = "";
});

function heroSelectionPlayer1() {
  if (selection[0].value === "humans") {
    player1.push("Human");
    injectCharacter.innerHTML =
      '<img src="logos/humans.png" alt="humans picture" />';
  } else if (selection[0].value === "orcs") {
    player1.push("Orcs");
    injectCharacter.innerHTML =
      '<img src="logos/orc.png" alt="Orcs picture" />';
  } else if (selection[0].value === "elves") {
    player1.push("Elves");
    injectCharacter.innerHTML =
      '<img src="logos/elves.png" alt="Orcs picture" />';
  } else {
    player1.push("Vampires");
    injectCharacter.innerHTML =
      '<img src="logos/vampires.png" alt="Orcs picture" />';
  }
}

function itemsSelectionPlayer1() {
  if (choseItem[0].value === "boots") {
    player1.push("boots");
  } else if (choseItem[0].value === "staff") {
    player1.push("staffs");
  } else if (choseItem[0].value === "sword") {
    player1.push("sword");
  } else {
    player1.push("bow");
  }
}

let player2 = [];

validationNextPage.addEventListener("click", () => {
  heroSelectionPlayer2();
  itemsSelectionPlayer2();
  // set function to link character 2
  creation.style.display = "none";
  play.style.display = "";
});

function heroSelectionPlayer2() {
  if (selection[1].value === "humans") {
    player2.push("Human");
    injectCharacter2.innerHTML =
      '<img src="logos/humans.png" alt="humans picture" />';
  } else if (selection[1].value === "orcs") {
    player2.push("Orcs");
    injectCharacter2.innerHTML =
      '<img src="logos/orc.png" alt="Orcs picture" />';
  } else if (selection[1].value === "elves") {
    player2.push("Elves");
    injectCharacter2.innerHTML =
      '<img src="logos/elves.png" alt="Orcs picture" />';
  } else {
    player2.push("Vampires");
    injectCharacter2.innerHTML =
      '<img src="logos/vampires.png" alt="Orcs picture" />';
  }
}

function itemsSelectionPlayer2() {
  if (choseItem[1].value === "boots") {
    player2.push("boots");
  } else if (choseItem[1].value === "staff") {
    player2.push("staffs");
  } else if (choseItem[1].value === "sword") {
    player2.push("sword");
  } else {
    player2.push("bow");
  }
}

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

let log1 = log[0].append(addPghLog);

addPghLog.classList.add("logModif");

/*********** promise *****/

// let p = new Promise((resolve, reject) => {
//   heroSelectionPlayer1(() => {
//     itemsSelectionPlayer1(() => {
//       resolve("yeeah");
//     });
//   }); // do this when it failed and .catch --> do this IF it fails
//   reject("noo");
//   // do this when it succeed and .then --> do this IF it succeeds
// });

// p.then((message) => {
//   console.log(player1); //is gone be called if promise is "resolve" (callBack)
// }).catch((message) => {
//   console.log("Ca n'a pas fonctionné"); //is gone be called if promise is "reject" (callBack)
// });
