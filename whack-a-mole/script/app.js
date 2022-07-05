const dirt = document.querySelectorAll(".dirt");
const mole = document.querySelectorAll(".mole");
const papanSkor = document.querySelector(".papan-skor");

let dirtPopBefore;
let finish;
let skor;

function randomDirt(dirt) {
  const d = Math.floor(Math.random() * dirt.length);
  const dRandom = dirt[d];
  if (dRandom == dirtPopBefore) {
    randomDirt(dirt);
  }
  dirtPopBefore = dRandom;
  return dRandom;
}

function timerRandom(min, max) {
  return Math.round(Math.random() * (max - min) + max);
}

function molePopOut() {
  const random = randomDirt(dirt);
  const tRandom = timerRandom(400, 800);
  random.classList.add("muncul");
  setTimeout(() => {
    random.classList.remove("muncul");
    if (!finish) {
      molePopOut();
    }
  }, tRandom);
}

function start() {
  skor = 0;
  finish = false;
  papanSkor.textContent = 0;
  molePopOut();
  setTimeout(() => {
    finish = true;
  }, 10000);
}

function whack() {
  skor++;
  this.parentNode.classList.remove("muncul");
  papanSkor.textContent = skor;
}

mole.forEach((m) => {
  m.addEventListener("click", whack);
});
