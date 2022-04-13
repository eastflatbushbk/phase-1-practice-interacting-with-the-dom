  
    let counterEl = document.getElementById('counter');
    let number = 0;
     
    let interval = setInterval(() =>  {
      counterEl.innerText =  number++; 
      if(number > 100) {
        clearInterval(interval);
      }
    }, 1000);
   const increment = document.getElementById('plus'); 
  const decrement = document.getElementById('minus');
  
  increment.addEventListener('click', function () {
        counterEl.textContent = number++;
  });
  
  decrement.addEventListener('click', function () {
     counterEl.textContent = number--;
  });

  const pauseButton = document.getElementById('pause');

  pauseButton.addEventListener('click', function(){

      if (pauseButton.innerText === 'pause') {
         pauseButton.innerText = 'resume';
         disableButton(); 
         clearInterval(interval);
         return
         }

      if (pauseButton.innerText === 'resume'){
          pauseButton.innerText = 'pause';
        enableButton();
        setInterval();
        return
      }
    });
  

  function disableButton() {  
  document.getElementById("plus").disabled = true;
  document.getElementById("minus").disabled = true;
  document.getElementById("submit").disabled = true;
  document.getElementById("heart").disabled = true;
}

function enableButton(){
  document.getElementById("plus").disabled = false;
  document.getElementById("minus").disabled = false;
  document.getElementById("submit").disabled = false;
  document.getElementById("heart").disabled = false;
}
  