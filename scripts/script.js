'use strict'



let answers = ['not today', 'i do not see it in your future', 'absolutely', 'almost positive', 'you will fail', 'no'];
let button = document.getElementById('button');
button.addEventListener('click', shake); 
function shake() {
  console.log('shake!')
  let touch = document.getElementById('touch');
  let index = randomize();
  touch.textContent = answers[index];
}
function randomize() {
  return Math.floor(Math.random() * (answers.length -1));
}