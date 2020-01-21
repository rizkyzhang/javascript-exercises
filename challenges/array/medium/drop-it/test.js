const dropElements = require("./index");

describe("dropElements function", () => {
  test("should exists", () => {
    expect(dropElements).toBeDefined();
    expect(typeof dropElements).toEqual("function");
  });

  test("should return an array of 2 numbers when condition n >= 3 is satisfied", () => {
    expect(dropElements([1, 2, 3, 4], function (n) { return n >= 3; })).toEqual([3, 4]);
  });

  test("should return an array of 2 numbers when condition n > 3 is satisfied", () => {
    expect(dropElements([1, 2, 3, 7, 4], function (n) { return n > 3; })).toEqual([7, 4]);
  });

  test("should return an array of 3 numbers when condition n === 1 is satisfied", () => {
    expect(dropElements([0, 1, 0, 1], function (n) { return n === 1; })).toEqual([1, 0, 1]);
  });

  test("should return an array of 3 numbers when condition n > 0 is satisfied", () => {
    expect(dropElements([1, 2, 3], function (n) { return n > 0; })).toEqual([1, 2, 3]);
  });

  test("should return an array of 3 numbers when condition n > 2 is satisfied", () => {
    expect(dropElements([1, 2, 3, 9, 2], function (n) { return n > 2; })).toEqual([3, 9, 2]);
  });

  test("should return an empty array when condition n > 5 is not satisfied", () => {
    expect(dropElements([1, 2, 3, 4], function (n) { return n > 5; })).toEqual([]);
  });
});

