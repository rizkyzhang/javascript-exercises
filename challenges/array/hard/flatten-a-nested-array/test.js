const flatten = require("./index");

describe("flatten function", () => {
  test("should exists", () => {
    expect(flatten).toBeDefined();
    expect(typeof flatten).toEqual("function");
  });

  test("should return a flattened array when passed an array of 3 arrays", () => {
    expect(flatten([[2, 3], [1], [4]])).toEqual([2, 3, 1, 4]);
  });


  test("should return a flattened array when passed an array of 5 arrays", () => {
    expect(flatten([[7], [], [4, 8, 16], [10, 2], [124, 32]])).toEqual([7, 4, 8, 16, 10, 2, 124, 32]);
  });
});

