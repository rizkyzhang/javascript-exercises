const generateRandomInteger = require("./index");

describe("generateRandomInteger function", () => {
  test("should exists", () => {
    expect(generateRandomInteger).toBeDefined();
    expect(typeof generateRandomInteger).toEqual("function");
  });
});

