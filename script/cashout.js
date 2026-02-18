document.getElementById("cash-out-btn").addEventListener("click", function () {
  const showBtn = document.getElementById("cash-out-section");

  showBtn.classList.toggle("opacity-0");
  showBtn.classList.toggle("invisible");
  showBtn.classList.toggle("-translate-y-5");

  const btn = document.getElementById("cash-out-btn");

  btn.classList.toggle("bg-blue-700");
  btn.classList.toggle("text-black");
});

document.getElementById("cashout-btn").addEventListener('click', function(){
    // 1- get the agent number and validate 
    // 2- get the amount , validate , convert to number 
    // 3- get the current balance , validate , convert to number 
    // 4- Calculate new balance 
    // 5- get the pin and verify 
    // 5.1- true :: show alert and show new balance 
    // 5.2- false:: show error alert and return 
    
});