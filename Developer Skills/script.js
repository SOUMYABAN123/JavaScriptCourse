/*const findMaxelement = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 1; i < temps.length; i++) {
    const current = temps[i];
    if (current > max) {
      max = current;
    }
    if (current < min) {
      min = current;
    }
    console.log(`Current: ${current}, Max: ${max}, Min: ${min}`);
  }

  return max;
};

findMaxelement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(findMaxelement([1, 2, 3, 4, 5, 100, 7, 8, 9, 10])); */

/*const mesureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees celsius:')),
  };
  console.log(measurement);
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(mesureKelvin()); */

/*console.log(document.querySelector('.message'));
document.querySelector('.message').textContent = 'Correct Number! 🎉';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 12;
console.log(document.querySelector('.guess').value);

document.querySelector('.check').addEventListener */

/*document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number! ⛔';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number! 🎉';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high! 📈';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low! 📉';
  }
});
const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber, typeof secretNumber);
const score = 20;
let highscore = 0;
document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
});
document.querySelector('.number').style.width = '15rem';
document.querySelector('.number').style.fontSize = '30px';
document.querySelector('.number').style.color = '#eee';
document.querySelector('.number').style.backgroundColor = '#222';
document.querySelector('.number').style.border = '10px solid #eee';
document.querySelector('.number').style.borderRadius = '50%';

document.querySelector('.number').style.transition = 'all 0.5s';
document.querySelector('.number').style.transform = 'scale(1.5)';
document.querySelector('.number').style.transform = 'rotate(360deg)';
document.querySelector('.number').style.transform = 'translateX(100px)';
document.querySelector('.number').style.transform = 'translateY(100px)';
document.querySelector('.number').style.transform = 'translateZ(100px)';
document.querySelector('.number').style.transform =
  'translate3d(100px, 100px, 100px)';
document.querySelector('.number').style.transform =
  'translate3d(100px, 100px, 100px) rotate(360deg)';

document.querySelector('.number').style.transform =
  'translate3d(100px, 100px, 100px) rotate(360deg) scale(1.5)';
document.querySelector('.number').style.transform =
  'translate3d(100px, 100px, 100px) rotate(360deg) scale(1.5) skew(20deg)';
document.querySelector('.number').style.transform =
  'translate3d(100px, 100px, 100px) rotate(360deg) scale(1.5) skew(20deg) translateZ(100px)';
document.querySelector('.number').style.transform =
  'translate3d(100px, 100px, 100px) rotate(360deg) scale(1.5) skew(20deg) translateZ(100px) rotateY(360deg)';
document.querySelector('.number').style.transform =
  'translate3d(100px, 100px, 100px) rotate(360deg) scale(1.5) skew(20deg) translateZ(100px) rotateY(360deg) rotateX(360deg)'; */

/*document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  console.log(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number! ⛔';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number! 🎉';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.fontSize = '30px';
    document.querySelector('.number').style.color = '#eee';
    document.querySelector('.number').style.backgroundColor = '#222';
    document.querySelector('.number').style.border = '10px solid #eee';
    document.querySelector('.number').style.borderRadius = '50%';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high! 📈';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low! 📉';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

const secretNumber = Math.trunc(Math.random() * 20) + 1;
const score = 20;
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.number').style.width = '15rem';
console.log(secretNumber, typeof secretNumber);

let highscore = 0;
document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
}); */

'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  //   // When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
});
