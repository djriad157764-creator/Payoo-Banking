// console.log("connect");
// document.getElementById("bonus-btn").addEventListener("click", (event) => {
//   event.preventDefault();
//   let getBonus = getFieldValue("Coupon");
//   let bonus = Math.random() * 20;
//   const currentAmount = currentBalanceInnerText("current-amount");
//   if (getBonus === "1234") {
//     let newTotalBalance = currentAmount + bonus;
//     setBalance(newTotalBalance);

//     alert(`Balance Add successful, Boss
//                  Add Amount: $${bonus}
//                  Remaining Balance $${newTotalBalance}`);

//     valueEmpty("Coupon");
//   } else {
//     alert("Wrong Coupon");
//   }
// });

// // Task:8 Level Up Challenge (Hard)

// function one(fn) {
//   let clicked = false;
//   return (...arg) => {
//     if (!clicked) {
//       clicked = true;
//       fn();
//     } else {
//       console.log("Sorry Boss This Function can only be run Once!");
//     }
//   };
// }
// const startEngine = one(() => console.log("EngineStarted...."));

// startEngine();
// startEngine();
// startEngine();
