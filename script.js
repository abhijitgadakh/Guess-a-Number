'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(
  'shhhh... 🤫🤫 Secret Number is...',
  secretNumber,
  " But don't tell anyone 🤐🤐"
);

let score = 20;

let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let yourGuess = document.querySelector('.guess').value;

  if (score > 1) {
    if (!yourGuess) {
      document.querySelector('.message').textContent = '❌ No Number';
      document.querySelector('.score').textContent = score--;

      //NO INPUT
    } else if (yourGuess == secretNumber) {
      document.querySelector('.message').textContent = 'Yaay. Right Guess';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.highscore').textContent = score;
      highscore = score;
      document.querySelector('body').style.backgroundColor = '#60b347';

      document.querySelector('.number').style.width = '30rem';

      //RIGHT GUESS
    } else if (yourGuess > secretNumber) {
      document.querySelector('.message').textContent = 'Too High';
      document.querySelector('.score').textContent = --score;

      //HIGH GUESS
    } else if (yourGuess < secretNumber) {
      document.querySelector('.score').textContent = --score;
      document.querySelector('.message').textContent = 'Too Low';

      //LOW GUESS
    }
  } else {
    document.querySelector('.score').textContent = --score;
    document.querySelector('.message').textContent = 'Sorry. You Lost.';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score = 20;

  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.number').textContent = '?';

  document.querySelector('.number').style.width = '15rem';
  yourGuess = document.querySelector('.guess').value = '';
});
