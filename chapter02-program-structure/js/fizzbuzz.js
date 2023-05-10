// Original solution

const MAX_NUMBER = 100;
let numbers = '';

for (let i = 1; i <= MAX_NUMBER; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('FizzBuzz');
  } else if (i % 3 == 0) {
    console.log('Fizz');
  } else if (i % 5 == 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

// Visualization

const section = document.querySelector('.section');

for (let i = 1; i <= MAX_NUMBER; i++) {
  const num = document.createElement('span');

  num.classList.add('fizzbuzz-num');

  if (i % 3 == 0 && i % 5 == 0) {
    num.classList.add('fizzbuzz-num--fizzbuzz');
    num.innerHTML = 'FizzBuzz';
  } else if (i % 3 == 0) {
    num.classList.add('fizzbuzz-num--fizz');
    num.innerHTML = 'Fizz';
  } else if (i % 5 == 0) {
    num.classList.add('fizzbuzz-num--buzz');
    num.innerHTML = 'Buzz';
  } else {
    num.innerHTML = i;
  }

  section.appendChild(num);
}
