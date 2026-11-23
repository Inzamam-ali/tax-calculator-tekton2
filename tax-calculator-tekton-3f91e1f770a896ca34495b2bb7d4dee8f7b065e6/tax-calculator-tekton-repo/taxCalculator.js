function calculateTax(amount, rate) {
  const numericAmount = Number(amount);
  const numericRate = Number(rate);
  if (!Number.isFinite(numericAmount) || !Number.isFinite(numericRate) ||
      numericAmount < 0 || numericRate < 0) {
    throw new Error("Amount and tax rate must be valid non-negative numbers.");
  }
  return numericAmount * numericRate / 100;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { calculateTax };
}