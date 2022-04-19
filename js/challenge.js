
let counterEl = document.getElementById('counter');
const increment = document.getElementById('plus');
const decrement = document.getElementById('minus')
const pauseButton = document.getElementById('pause');
let number = 0;

let interval;
createInterval();
function createInterval() {
  interval = setInterval(() => {
    counterEl.innerText = number++;
    if (number > 1000) {
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

form.addEventListener('submit', (e) => {
  e.preventDefault();
  createComments(e.target.comment.value)
})

function createComments(comment) {
 
  let p = document.createElement('p');
  p.textContent = comment;
  document.querySelector('#list').appendChild(p);
}

let spanCount = 0
 const likeButton = document.getElementById('heart');
  likeButton.addEventListener('click', function(){
    
  //  alert('hello')
   let dataNum ; 
    dataNum = number;
   
   let like = document.querySelector('.likes')
       console.log(like)
       if (document.getElementById(number) ){
         let found = document.getElementById(number)
         found.dataset.likes++
         found.textContent = `${number} has been liked ${found.dataset.likes} times`
         console.log(found.dataset)
       }
       else {
        let li = document.createElement('li');
        li.textContent = `${number} has been liked ${1} time`
         li.id = number
        li.dataset.likes = 1 
         like.appendChild(li);
         
       }
    })


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
