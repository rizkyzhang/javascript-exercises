const splitArray = require("./index");

describe("chunkArrayInGroups function", () => {
  test("should exists", () => {
    expect(splitArray).toBeDefined();
    expect(typeof splitArray).toEqual("function");
  });

  test("should correctly split an array of 3 elements into subarrays with length of 1", () => {
    expect(splitArray([2, 4, 6], 1)).toEqual([[2], [4], [6]]);
  });

  test("should correctly split an array of 5 elements into subarrays with length of 3", () => {
    expect(splitArray([2, 4, 6, 8, 10], 3)).toEqual([[2, 4, 6], [8, 10]]);
  });

  test("should correctly split an array of 10 elements into subarrays with length of 2", () => {
    expect(splitArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
  });

  test("should correctly split an array of 13 elements into subarrays with length of 5", () => {
    expect(splitArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)).toEqual([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]);
  });
});

