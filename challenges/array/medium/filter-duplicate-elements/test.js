const filterDuplicateElements = require("./index");

describe("filterDuplicateElements function", () => {
  test("should exists", () => {
    expect(filterDuplicateElements).toBeDefined();
    expect(typeof filterDuplicateElements).toEqual("function");
  });

  test("should return a filtered array", () => {
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

    expect(filterDuplicateElements(array)).toEqual(filteredArray);
  });
});

