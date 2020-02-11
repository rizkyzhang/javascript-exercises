const generateRandomNumber = require("./index");

describe("generateRandomNumber function", () => {
  test("should exists", () => {
    expect(generateRandomNumber).toBeDefined();
    expect(typeof generateRandomNumber).toEqual("function");
  });
});

