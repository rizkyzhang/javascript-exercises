const dropElements = require("./index");

describe("dropElements function", () => {
  test("should exists", () => {
    expect(dropElements).toBeDefined();
    expect(typeof dropElements).toEqual("function");
  });

  test("should return an array of 2 numbers if n >= 3", () => {
    expect(dropElements([1, 2, 3, 4], function (n) { return n >= 3; })).toEqual([3, 4]);
  });

  test("should return an array of 3 numbers if n === 1", () => {
    expect(dropElements([0, 1, 0, 1], function (n) { return n === 1; })).toEqual([1, 0, 1]);
  });

  test("should return an array of 3 numbers if n > 0", () => {
    expect(dropElements([1, 2, 3], function (n) { return n > 0; })).toEqual([1, 2, 3]);
  });

  test("should return an empty array if n > 5", () => {
    expect(dropElements([1, 2, 3, 4], function (n) { return n > 5; })).toEqual([]);
  });

  test("should return an array of 2 numbers if n > 3", () => {
    expect(dropElements([1, 2, 3, 7, 4], function (n) { return n > 3; })).toEqual([7, 4]);
  });

  test("should return an array of 3 numbers if n > 2", () => {
    expect(dropElements([1, 2, 3, 9, 2], function (n) { return n > 2; })).toEqual([3, 9, 2]);
  });
});

