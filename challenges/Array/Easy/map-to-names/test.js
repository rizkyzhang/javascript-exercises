const names = require("./index");

describe("names variable", () => {
  test("should exists", () => {
    expect(names).toBeDefined();
  });

  test("should contains an array of names", () => {
    expect(names).toEqual(["John", "Pete", "Mary"]);
  });
});

