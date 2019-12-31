const persistence = require("./index");

describe("persistence function", () => {
  test("should exists", () => {
    expect(persistence).toBeDefined();
    expect(typeof persistence).toEqual("function");
  });
});

