const removeDuplicates = require("./index");

describe("filterDuplicateElements function", () => {
  test("should exists", () => {
    expect(removeDuplicates).toBeDefined();
    expect(typeof removeDuplicates).toEqual("function");
  });

  test("should return a filtered array when passed an array", () => {
    const array = [
      25,
      "Andy",
      25,
      "Patrick",
      true,
      14,
      30,
      "Wilson",
      true,
      "Patrick",
      "Andy",
      25,
      "Carlos",
      false,
      "Andy"
    ];

    const filteredArray = [
      25,
      "Andy",
      "Patrick",
      true,
      14,
      30,
      "Wilson",
      "Carlos",
      false
    ];

    expect(removeDuplicates(array)).toEqual(filteredArray);
  });
});

