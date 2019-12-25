const mergeArrays = require("./index");

describe("mergeArrays function", () => {
  test("should exists", () => {
    expect(mergeArrays).toBeDefined();
    expect(typeof mergeArrays).toEqual("function");
  });

  test("should return a merged array given 2 arrays", () => {
    expect(mergeArrays([4, 2, 3, 5, 6], [1, 3, 6, 7, 2])).toEqual([4, 2, 3, 5, 6, 1, 7]);
  });

  test("should return a merged array given 5 arrays", () => {
    expect(mergeArrays(["a", "b"], ["f", "a", "z"], ["g"], ["k", "a", "z", "e"], ["o", "d"])).toEqual(["a", "b", "f", "z", "g", "k", "e", "o", "d"]);
  });
});
