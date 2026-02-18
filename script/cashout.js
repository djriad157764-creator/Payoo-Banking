document.getElementById("cash-out-btn").addEventListener("click", function () {
  const showBtn = document.getElementById("cash-out-section");

  showBtn.classList.toggle("opacity-0");
  showBtn.classList.toggle("invisible");
  showBtn.classList.toggle("-translate-y-5");

  const btn = document.getElementById("cash-out-btn");

  btn.classList.toggle("bg-blue-700");
  btn.classList.toggle("text-black");
});
const balanceElement = document.getElementById("current-amount");
const saveBalance = localStorage.getItem("balance");
if (saveBalance !== null) {
  balanceElement.innerText = saveBalance;
}

document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    // 1- get the agent number and validate
    // 2- get the amount , validate , convert to number
    // 3- get the current balance , validate , convert to number
    // 4- Calculate new balance
    // currentAmount.innerText = newBalance;
    // 5- get the pin and verify
    // 5.1- true :: show alert and show new balance
    // 5.2- false:: show error alert and return

    event.preventDefault();

    let number = document.getElementById("cashout-number");
    let withdraw_amount = document.getElementById("cashout-amount");
    let pin = document.getElementById("cashout-pin");

    let currentAmount = parseFloat(balanceElement.innerText);

    agentNumber = number.value;
    amount = withdraw_amount.value;
    withdrawPin = pin.value;

    if (
      !isNaN(agentNumber) &&
      agentNumber.length === 11 &&
      withdrawPin === "1234"
    ) {
      let withdrawAmount = parseFloat(amount);
      if (
        !isNaN(withdrawAmount) &&
        currentAmount > 0 &&
        withdrawAmount <= currentAmount
      ) {
        let newBalance = currentAmount - withdrawAmount;
        balanceElement.innerText = newBalance;
        localStorage.setItem("balance", newBalance);
        alert(`withdraw successful, Boss
      Amount: $${withdrawAmount}
      Remaining Balance $${newBalance}`);
        number.value = "";
        withdraw_amount.value = "";
        pin.value = "";
      } else {
        alert("Insufficient Balance");
      }
    } else {
      alert("Invalid Pin or Number");
    }
  });
