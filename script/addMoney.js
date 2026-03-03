document
  .getElementById("addMoney-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const selectBank = document.getElementById("select-bank").innerText;
    console.log(selectBank);
  });
