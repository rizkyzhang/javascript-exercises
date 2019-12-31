const fibonacci = require("./index");

describe("fibonacci function", () => {
  test("should exists", () => {
    expect(fibonacci).toBeDefined();
    expect(typeof fibonacci).toEqual("function");
  });

  test("should returns the first 5 fibonacci numbers", () => {
    expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
  });

  test("should returns the first 10 fibonacci numbers", () => {
    expect(fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
});

