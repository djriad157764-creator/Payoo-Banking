console.log("connect");

// ১. আপনার 'one' ফাংশনটি যা নিশ্চিত করবে বোনাস একবারই পাওয়া যাবে
function one(fn) {
  let clicked = false;
  return (...arg) => {
    if (!clicked) {
      clicked = true;
      return fn(...arg); // ফাংশনটি রান হবে
    } else {
      // একবারের বেশি ক্লিক করলে এই মেসেজটি দেখাবে
      alert("Sorry Boss! You can use the coupon only once.");
    }
  };
}

// ২. মূল বোনাস লজিকটি একটি ভেরিয়েবলে রাখুন
const applyBonus = one(() => {
  const getBonus = getFieldValue("Coupon");
  const bonus = Math.floor(Math.random() * 20); // Math.floor দিলে পূর্ণসংখ্যা আসবে
  const currentAmount = currentBalanceInnerText("current-amount");

  if (getBonus === "1234") {
    let newTotalBalance = currentAmount + bonus;
    setBalance(newTotalBalance);

    alert(`Balance Add successful, Boss!
           Add Amount: $${bonus}
           New Balance: $${newTotalBalance.toFixed(2)}`);

    valueEmpty("Coupon");
  } else {
    // যদি কুপন ভুল হয়, তবে 'clicked' কে আবার false করে দেওয়া উচিত
    // যাতে ব্যবহারকারী আবার চেষ্টা করতে পারে।
    // কিন্তু আপনার 'one' ফাংশন অনুযায়ী এটি একবারই কাজ করবে।
    alert("Wrong Coupon");
  }
});

// ৩. বাটনে ক্লিক করলে 'applyBonus' রান হবে
document.getElementById("bonus-btn").addEventListener("click", (event) => {
  event.preventDefault();
  applyBonus(); // এটি কল করলে আমাদের wrapper ফাংশনটি রান হবে
});
