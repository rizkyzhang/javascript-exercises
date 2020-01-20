const sortNumAsc = require("./index");

describe("sortNumAsc function", () => {
  test("should exists", () => {
    expect(sortNumAsc).toBeDefined();
    expect(typeof sortNumAsc).toEqual("function");
  });

  test("should return a sorted array when passed an array of 5 numbers", () => {
    const array = [-23, 54, -10, -5, 17];
    const sortedArray = [-23, -10, -5, 17, 54];

    expect(sortNumAsc(array)).toEqual(sortedArray);
  });

  test("should return a sorted array when passed an array of 10 numbers", () => {
    const array = [67, -40, 25, 18, -9, -8, 1, 83, 27, -55];
    const sortedArray = [-55, -40, -9, -8, 1, 18, 25, 27, 67, 83];

    expect(sortNumAsc(array)).toEqual(sortedArray);
  });

  test("should return a sorted array when passed an array of 15 numbers", () => {
    const array = [7, 10, 3, 13, -46, 1, -2, 9, -12, 5, 8, 12, 14, -7, 34];
    const sortedArray = [-46, -12, -7, -2, 1, 3, 5, 7, 8, 9, 10, 12, 13, 14, 34];

    expect(sortNumAsc(array)).toEqual(sortedArray);
  });
});

