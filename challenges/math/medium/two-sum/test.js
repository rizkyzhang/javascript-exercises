const twoSum = require("./index");

describe("twoSum function", () => {
  test("should exists", () => {
    expect(twoSum).toBeDefined();
    expect(typeof twoSum).toEqual("function");
  });

  test("should returns an array of integer pairs given an array of 5 integers and target sum of 8", () => {
    expect(twoSum([3, 6, 1, 2, -3], 8)).toEqual([[6, 2]]);
  });

  test("should returns an array of integer pairs given an array of 8 integers and target sum of 6", () => {
    expect(twoSum([5, -2, 3, 1, 2, -7, 4, 0], 6)).toEqual([[5, 1], [2, 4]]);
  });
});

