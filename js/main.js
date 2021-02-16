'use strict';

const writeNum = document.querySelector('.js__write-num');
const buttonTry = document.querySelector('.js__btn');
const trial = document.querySelector('.js__trial');
const trialNum = document.querySelector('.js__trial-num');
const randomNum = getRandomNumber(100);
const newGame = document.querySelector('.js__newGame');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function magicNumber() {
  let writeNumValue = parseInt(writeNum.value);

  if (writeNumValue < 1 || writeNumValue > 100) {
    trial.value = 'El número debe estar entre 1 y 100';
  } else if (randomNum === writeNumValue) {
    trial.value = '¡Has adivinado el número!';
  } else if (randomNum > writeNumValue) {
    trial.value = 'Demasiado bajo';
  } else if (randomNum < writeNumValue) {
    trial.value = 'Demasiado alto';
  }
}

let accCounter = 0;

function counter() {
  if (trial.value === 'Has ganado campeona') {
    accCounter += 0;
    trialNum.value = 'Número de intentos: ' + accCounter;
  } else {
    accCounter += 1;
    trialNum.value = 'Número de intentos: ' + accCounter;
  }
}

function Trial() {
  magicNumber();
  counter();
}

function newNumber() {
  magicNumber();
}

buttonTry.addEventListener('click', Trial);
newGame.addEventListener('click', newNumber);
