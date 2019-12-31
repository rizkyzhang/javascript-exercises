const primeFactors = require("./index");

describe("primeFactors function", () => {
  test("should exists", () => {
    expect(primeFactors).toBeDefined();
    expect(typeof primeFactors).toEqual("function");
  });

  test("should correctly gets all prime factors of 240", () => {
    expect(primeFactors(240)).toEqual("2 * 2 * 2 * 2 * 3 * 5");
  });

  test("should correctly gets all prime factors of 240", () => {
    expect(primeFactors(240)).toEqual("2 * 2 * 2 * 2 * 23");
  });
});

