const { calculateTax } = require("../taxCalculator");

describe("Tax Calculator", function () {
  it("calculates 10 percent tax", function () {
    expect(calculateTax(100, 10)).toBe(10);
  });

  it("calculates a decimal tax amount", function () {
    expect(calculateTax(99.99, 7.5)).toBeCloseTo(7.49925, 5);
  });

  it("returns zero when the amount is zero", function () {
    expect(calculateTax(0, 10)).toBe(0);
  });

  it("returns zero when the tax rate is zero", function () {
    expect(calculateTax(100, 0)).toBe(0);
  });

  it("accepts numeric strings", function () {
    expect(calculateTax("200", "5")).toBe(10);
  });

  it("rejects negative amounts", function () {
    expect(function () { calculateTax(-1, 10); }).toThrowError();
  });

  it("rejects invalid values", function () {
    expect(function () { calculateTax("abc", 10); }).toThrowError();
  });
});