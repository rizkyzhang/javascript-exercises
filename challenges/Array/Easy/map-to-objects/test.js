const usersMapped = require("./index");

describe("usersMapped variable", () => {
  test("should exists", () => {
    expect(usersMapped).toBeDefined();
  });

  test("should contains an array of objects", () => {
    const expected = [
      { fullname: "John Smith", id: 1 },
      { fullname: "Pete Hunt", id: 2 },
      { fullname: "Mary Key", id: 3 }
    ];

    expect(usersMapped).toEqual(expected);
  });
});


