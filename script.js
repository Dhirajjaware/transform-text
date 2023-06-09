'use strict';

const btnConvert = document.querySelector('.btn__convert');
const inputText = document.querySelector('.input__text');
const inputOption = document.querySelector('.input__options');
const replaceContainer = document.querySelector('.replace__container');
const replaceWant = document.querySelector('.input__replace--want');
const replaceTo = document.querySelector('.input__replace--to');

inputOption.addEventListener('click', function (e) {
  if (e.target.value === 'replace' || e.target.value === 'replaceall')
    replaceContainer.classList.remove('hidden');
  else {
    replaceContainer.classList.add('hidden');
  }
});

btnConvert.addEventListener('click', function () {
  const input = inputText.value;
  const option = inputOption.value;

  if (option === 'uppercase' && input) {
    inputText.value = input.toUpperCase();
  } else if (option === 'lowercase' && input) {
    inputText.value = input.toLowerCase();
  } else if (option === 'captilize') {
    inputText.value = input
      .toLowerCase()
      .split(' ')
      .map(w => w.replace(w[0], w[0].toUpperCase()))
      .join(' ');
  } else if (option === 'replace') {
    const replaceText = input.replace(
      `${replaceWant.value}`,
      `${replaceTo.value}`
    );
    inputText.value = replaceText;
  } else if (option === 'replaceall') {
    const replaceTextAll = input.replaceAll(
      `${replaceWant.value}`,
      `${replaceTo.value}`
    );
    inputText.value = replaceTextAll;
  } else {
    alert('Please enter valid input!');
  }
});
