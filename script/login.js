document.getElementById("login-btn").addEventListener("click", function () {
  // 1 step
  const inputNumber = document.getElementById("input-number");
  const contactNumber = inputNumber.value;
  console.log(typeof contactNumber);
  const inputPin = document.getElementById("input-pin");
  const pin = inputPin.value;
  console.log(typeof pin);
  if (
    isNaN(contactNumber) ||
    isNaN(pin) ||
    pin.length !== 4 ||
    contactNumber.length !== 11 ||
    !contactNumber.startsWith("0")
  ) {
    alert("invalid pin or number");
  }else{
    window.location.assign("/home.html")
  }
});
