// BUTTON ACTIVATION

const hit = document.querySelectorAll(".hit");
const heal = document.querySelectorAll(".heal");
const yield = document.querySelectorAll(".yield");

function disabledYou() {
  yield[0].disabled = true;
  yield[0].classList.toggle("select");
  hit[0].disabled = true;
  hit[0].classList.toggle("select");
  heal[0].disabled = true;
  heal[0].classList.toggle("select");
  enemy.gameOver();
}

function enabledYou() {
  yield[0].disabled = false;
  yield[0].classList.toggle("select");
  hit[0].disabled = false;
  hit[0].classList.toggle("select");
  heal[0].disabled = false;
  heal[0].classList.toggle("select");
}

function disabledEnemy() {
  yield[1].disabled = true;
  yield[1].classList.toggle("select");
  hit[1].disabled = true;
  hit[1].classList.toggle("select");
  heal[1].disabled = true;
  heal[1].classList.toggle("select");
  you.gameOver();
}

function enabledEnemy() {
  yield[1].disabled = false;
  yield[1].classList.toggle("select");
  hit[1].disabled = false;
  hit[1].classList.toggle("select");
  heal[1].disabled = false;
  heal[1].classList.toggle("select");
}

yield[1].disabled = true;
yield[1].classList.toggle("select");
hit[1].disabled = true;
hit[1].classList.toggle("select");
heal[1].disabled = true;
heal[1].classList.toggle("select");

hit[0].addEventListener("click", () => {
  enemy.vampires(0, you);
  you.damage(enemy);
  enemy.healthBar(1);
  disabledYou();
  enabledEnemy();
  console.log(you);
  console.log(enemy);
});

hit[1].addEventListener("click", () => {
  you.vampires(1, enemy);
  enemy.damage(you);
  you.healthBar(0);
  disabledEnemy();
  enabledYou();
  console.log(you);
  console.log(enemy);
});

heal[0].addEventListener("click", () => {
  enemy.vampires(0, you);
  you.heal(player1[player1.length - 1]);
  you.healthBar(0);
  disabledYou();
  enabledEnemy();
  console.log(you);
  console.log(enemy);
});

heal[1].addEventListener("click", () => {
  you.vampires(1, enemy);
  enemy.heal(player2[player2.length - 1]);
  enemy.healthBar(1);
  disabledEnemy();
  enabledYou();
  console.log(you);
  console.log(enemy);
});

yield[0].addEventListener("click", () => {
  enemy.vampires(0, you);
  enemy.healthBar(1);
  disabledYou();
  enabledEnemy();
});

yield[1].addEventListener("click", () => {
  you.vampires(1, enemy);
  you.healthBar(0);
  disabledEnemy();
  enabledYou();
});
