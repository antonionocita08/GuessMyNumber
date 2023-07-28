"use strict";

//button Again
const btn_Again = document.getElementById("btnAgain");
//button Check
const btn_Check = document.getElementById("btnCheck");

//button popup
const btn_pu = document.getElementById("btn-popup");
const btn_pu2 = document.getElementById("btn-popup2");

const text = document.getElementById("insertNumber");

//generate Random numeric between 1 and 20
const generate = function () {
  const min = 5;
  const max = 20;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const numberGenerate = generate();
console.log(numberGenerate);

//when button again is pressed reload a page
btn_Again.addEventListener("click", () => {
  window.location.reload();
});

//contator variable
let score = 20;

btn_Check.addEventListener("click", function () {
  const realValue = text.value;
  const number = Number(realValue);

  if (isNaN(number) || number == 0) {
    document.getElementById("pu").style.display = "inline";
  } else if (number < 1 || number > 20) {
    document.getElementById("pu2").style.display = "inline";
  } else if (number < numberGenerate) {
    score--;
    document.getElementById("scoreID").innerHTML = `Score: ${score}`;
    document.getElementById("tip").innerHTML = "Pick a higher number";
  } else if (number > numberGenerate) {
    score--;
    document.getElementById("scoreID").innerHTML = `Score: ${score}`;
    document.getElementById("tip").innerHTML = "Pick a lower number";
  } else {
    document.body.style.backgroundColor = "green";
    let higschore = score;
    score = 0;
    document.getElementById("outputText").innerHTML = numberGenerate;
    document.getElementById("scoreID").innerHTML = `Score: ${score}`;
    document.getElementById("hystoriID").innerHTML = `Highscore: ${higschore}`;
    document.getElementById("tip").innerHTML = "WINNNN!!!!!!";
    btn_Check.disabled = true;
  }

  text.value = "";
});

//close popup when click ok
btn_pu.addEventListener("click", () => {
  document.getElementById("pu").style.display = "none";
});

btn_pu2.addEventListener("click", () => {
  document.getElementById("pu2").style.display = "none";
});
