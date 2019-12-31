const reverseInteger = require("./index");

describe("reverseInteger function", () => {
  test("should exists", () => {
    expect(reverseInteger).toBeDefined();
    expect(typeof reverseInteger).toEqual("function");
  });

  test("should correctly reverses 628", () => {
    expect(reverseInteger(628)).toEqual(628);
  });

  test("should correctly reverses -573", () => {
    expect(reverseInteger(-573)).toEqual(-375);
  });
});

