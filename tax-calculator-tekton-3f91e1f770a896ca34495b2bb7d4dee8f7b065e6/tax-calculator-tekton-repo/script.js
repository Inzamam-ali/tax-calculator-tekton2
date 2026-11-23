document.addEventListener("DOMContentLoaded", function () {
  const amountInput = document.getElementById("amount");
  const rateInput = document.getElementById("rate");
  const result = document.getElementById("result");

  document.getElementById("calculate").addEventListener("click", function () {
    try {
      const tax = calculateTax(amountInput.value, rateInput.value);
      result.textContent = "Tax amount: $" + tax.toFixed(2);
    } catch (error) {
      result.textContent = error.message;
    }
  });
});