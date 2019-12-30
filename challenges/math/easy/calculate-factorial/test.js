const factorial = require("./index");

describe("factorial function", () => {
  test("should exists", () => {
    expect(factorial).toBeDefined();
    expect(typeof factorial).toEqual("function");
  });

  test("should correctly calculates the factorial of 1", () => {
    expect(factorial(1)).toEqual(1);
  });

  test("should correctly calculates the factorial of 5", () => {
    expect(factorial(5)).toEqual(120);
  });

  test("should correctly calculates the factorial of 10", () => {
    expect(factorial(10)).toEqual(3628800);
  });
});

