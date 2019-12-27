const shuffleArray = require("./index");

describe("shuffleArray function", () => {
  test("should exists", () => {
    expect(shuffleArray).toBeDefined();
    expect(typeof shuffleArray).toEqual("function");
  });
});

