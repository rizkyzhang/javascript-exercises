const isEvenOrOdd = require("./index");

describe("isEvenOrOdd function", () => {
  test("should exists", () => {
    expect(isEvenOrOdd).toBeDefined();
    expect(typeof isEvenOrOdd).toEqual("function");
  });

  test("should returns even if n === 2", () => {
    isEvenOrOdd(2).toEqual("even");
  });

  test("should returns even if n === -86", () => {
    isEvenOrOdd(-86).toEqual("even");
  });

  test("should returns odd if n === 7", () => {
    isEvenOrOdd(7).toEqual("odd");
  });

  test("should returns odd if n === -57", () => {
    isEvenOrOdd(-57).toEqual("odd");
  });
});

