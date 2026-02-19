//get the id and return number

function getFieldNumberValue(id) {
  const inputNumber = document.getElementById(id).value;
  return Number(inputNumber);
}

// get the id return value

function getFieldValue(id) {
  const inputValue = document.getElementById(id).value;
  return inputValue;
}

// get the id return innerText

function currentBalanceInnerText(id) {
  const text = document.getElementById(id).innerText;
  return Number(text);
}

// get the id true balance ++ or false balance --

function machine(inputId, balanceId, type) {
  const amount = getFieldNumberValue(inputId);
  const balance = currentBalanceInnerText(balanceId);

  if (isNaN(amount) || amount <= 0) {
    alert("Invalid amount");
    return;
  }
  if (type === "add") {
    return balance + amount;
  } else {
    if (amount > balance) {
      alert("Invalid Balance");
      return balance;
    }
    return balance - amount;
  }
}

// button transition all btn

const navBtn = document.querySelectorAll(".btn-tab");

// use forEach handle the click

navBtn.forEach((button) => {
  button.addEventListener("click", function () {
    const targetSection = this.getAttribute("data-id");
    toggleSections(targetSection, button);
  });
});

function toggleSections(id) {

  document.getElementById("addMoney-section").classList.add("hidden");
  document.getElementById("cash-out-section").classList.add("hidden");
  document.getElementById("Transfer-Money-section").classList.add("hidden");
  document.getElementById("Bonus-section").classList.add("hidden");
  document.getElementById("Pay-Bill-section").classList.add("hidden");
  // document.getElementById("").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
  // document.getElementById("button").classList("bg-blue-700");
   this.classList.remove("btn-soft");
   this.classList.add("bg-blue-600", "text-white");
}
