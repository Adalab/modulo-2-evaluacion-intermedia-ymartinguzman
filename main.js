'use strict';

const writeNum = document.querySelector(".js__write-num");
const buttonTry = document.querySelector(".js__btn");
const trial = document.querySelector(".js__trial");
const trialNum = document.querySelector(".js__trial-num");

function magicNumber(){

}

function getRandomNumber(max) {
 return Math.ceil(Math.random() * 100);
}



buttonTry.addEventListener("click", magicNumber);