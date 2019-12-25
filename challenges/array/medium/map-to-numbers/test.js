const mapToNumbers = require("./index");

describe("mapToNumbers function", () => {
  test("should exists", () => {
    expect(mapToNumbers).toBeDefined();
    expect(typeof mapToNumbers).toEqual("function");
  });

  test("should return an array of numbers", () => {
    const arrays1 = [
      [13, 27, 18, 26],
      [4, 5, 1, 3],
      [32, 35, 37, 39],
      [1000, 1001, 857, 1]
    ];

    const arrays2 = [
      [4, 9, 1, 3],
      [13, 35, 18, 26],
      [32, 35, 97, 39],
      [1000000, 1001, 857, 1]
    ];

    const arrays3 = [
      [17, 23, 25, 12],
      [25, 7, 34, 48],
      [4, -10, 18, 21],
      [-72, -3, -17, -10]
    ];

    expect(mapToNumbers(arrays1)).toEqual([27, 5, 39, 1001]);
    expect(mapToNumbers(arrays2)).toEqual([9, 35, 97, 1000000]);
    expect(mapToNumbers(arrays3)).toEqual([25, 48, 21, -3]);
  });
});

