
let counterEl = document.getElementById('counter');
const increment = document.getElementById('plus');
const decrement = document.getElementById('minus')
const pauseButton = document.getElementById('pause');
//let form = document.getElementById('comment-form')
let number = 0;

let interval;
createInterval();
function createInterval() {
  interval = setInterval(() => {
    counterEl.innerText = number++;
    if (number > 100) {
      clearInterval(interval);
    }
  }, 1000);
}


increment.addEventListener('click', function () {
  counterEl.textContent = number++;
});

decrement.addEventListener('click', function () {
  counterEl.textContent = number--;
});



pauseButton.addEventListener('click', function () {

  if (pauseButton.innerText === 'pause') {
    pauseButton.innerText = 'resume';
    disableButton();
    clearInterval(interval);
    return
  }

  else if (pauseButton.innerText === 'resume') {
    pauseButton.innerText = 'pause';
    enableButton();
    createInterval();
    return
  }
});
const form = document.querySelector('form')

console.log('form', form)
//const submit = document.querySelector('#submit');
//console.log(submit)
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  createComments(e.target.comment-input.value)
})

function createComments(comment) {
  alert('hello')
  let p = document.createElement('p');
  p.textContent = comment;
  document.querySelector('#list').appendChild(p);
}

// const likeButton = document.getElementById('heart');
//  likeButton.addEventListener('click', function(){
//  let li = document.createElement('li')
// })


function disableButton() {
  document.getElementById("plus").disabled = true;
  document.getElementById("minus").disabled = true;
  document.getElementById("submit").disabled = true;
  document.getElementById("heart").disabled = true;
}

function enableButton() {
  document.getElementById("plus").disabled = false;
  document.getElementById("minus").disabled = false;
  document.getElementById("submit").disabled = false;
  document.getElementById("heart").disabled = false;
}
