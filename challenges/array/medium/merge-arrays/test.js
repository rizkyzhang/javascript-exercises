const mergeArrays = require("./index");

describe("mergeArrays function", () => {
  test("should exists", () => {
    expect(mergeArrays).toBeDefined();
    expect(typeof mergeArrays).toEqual("function");
  });

  test("should return a merged array when passed 2 arrays", () => {
    const array1 = [4, 2, 3, 5, 6];
    const array2 = [1, 3, 6, 7, 2];
    const mergedArray = [4, 2, 3, 5, 6, 1, 7];

    expect(mergeArrays(array1, array2)).toEqual(mergedArray);
  });

  test("should return a merged array when passed 5 arrays", () => {
    const array1 = ["a", "b"];
    const array2 = ["f", "a", "z"];
    const array3 = ["g"];
    const array4 = ["k", "a", "z", "e"];
    const array5 = ["o", "d"];
    const mergedArray = ["a", "b", "f", "z", "g", "k", "e", "o", "d"];

    expect(mergeArrays(array1, array2, array3, array4, array5)).toEqual(mergedArray);
  });
});

