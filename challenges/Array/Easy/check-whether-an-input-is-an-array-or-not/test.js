const isArray = require("./index");

describe("isArray function", () => {
  test("should exists", () => {
    expect(isArray).toBeDefined();
    expect(typeof isArray).toEqual("function");
  });

  test('should return true if passed argument is an array', () => {
    expect(isArray([])).toBeTruthy();
    expect(isArray([1, 2, 3])).toBeTruthy();
  });

  test("should return false if passed argument is not an array", () => {
    expect(isArray("string")).toBeFalsy();
    expect(isArray("")).toBeFalsy();
    expect(isArray(123)).toBeFalsy();
    expect(isArray(undefined)).toBeFalsy();
    expect(isArray(null)).toBeFalsy();
    expect(isArray({})).toBeFalsy();
  });
});

