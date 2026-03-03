

document.getElementById("Send-Now-btn").addEventListener("click", (event) => {
  event.preventDefault();
  const userAccNumber = getFieldValue("Transfer-Money-number");
  const sendAmount = getFieldValue("Transfer-Money-amount");
  const pin = getFieldValue("Transfer-Money-pin");
  const currentAmount = currentBalanceInnerText("current-amount");

  if (userAccNumber.length === 11) {
    if (currentAmount > 0 && !isNaN(sendAmount)) {
      if (pin === "1234") {
        if (sendAmount > 0 && currentAmount > sendAmount ) {
          let newBalance = machine(
            "Transfer-Money-amount",
            "current-amount",
            "out",
          );
          setBalance(newBalance);
          // localStorage.setItem("balance", newBalance);
          alert(`Transfer successful, Boss
                 Transfer Amount: $${sendAmount}
                 Remaining Balance $${newBalance}`);

          valueEmpty("Transfer-Money-number");
          valueEmpty("Transfer-Money-amount");
          valueEmpty("Transfer-Money-pin");
        } else {
          alert("Insufficient Balance");
        }
      } else {
        alert("Invalid Pin Number");
      }
    } else {
      alert("Please enter a valid Amount");
    }
  } else {
    alert("Please enter a valid Number");
  }
});
