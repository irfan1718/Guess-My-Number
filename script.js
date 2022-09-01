'use strict';
const btnAgain = document.querySelector('.again');
const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const labelScore = document.querySelector('.score');
const labelHighScore = document.querySelector('.highscore');
const btnCheck = document.querySelector('.check');
const message = document.querySelector('.message');
const body = document.querySelector('body').style;

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

//display the message
const displayMessage = msg => {
  message.textContent = msg;
};

//check function
const eventCheck = () => {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input or 0
  if (!guess) {
    displayMessage('⛔ No Number');
  } //when the player wins
  else if (guess === secretNumber) {
    // message.textContent = '🎉 Congragulation';
    displayMessage('🎉 Congragulation');
    number.textContent = secretNumber;
    body.backgroundColor = '#60b347';
    number.style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      labelHighScore.textContent = highScore;
    }
    //when the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      score--;
      labelScore.textContent = score;
    } else {
      displayMessage('You Lost The Game🙁');
      score = 0;
      labelScore.textContent = score;
    }
  }
};

btnCheck.addEventListener('click', eventCheck);

//play again function
const playAgain = () => {
  score = 20;
  labelScore.textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage('Start guessing...');
  guess.value = '';
  number.textContent = '?';
  number.style.width = '15rem';
  body.backgroundColor = '#222';
};

btnAgain.addEventListener('click', playAgain);
