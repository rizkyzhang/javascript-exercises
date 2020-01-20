const isArray = require("./index");

describe("isArray function", () => {
  test("should exists", () => {
    expect(isArray).toBeDefined();
    expect(typeof isArray).toEqual("function");
  });

  test('should return true when passed an array', () => {
    expect(isArray([])).toBeTruthy();
    expect(isArray([1, 2, 3])).toBeTruthy();
  });

  test("should return false when passed an object", () => {
    expect(isArray({})).toBeFalsy();
    expect(isArray({ "a": 1, "b": 2, "c": 3 }));
  });

  test("should return false when passed a string", () => {
    expect(isArray("")).toBeFalsy();
    expect(isArray("string")).toBeFalsy();
  });

  test("should return false when passed a number", () => {
    expect(isArray(123)).toBeFalsy();
  });

  test("should return false when passed undefined", () => {
    expect(isArray(undefined)).toBeFalsy();
  });

  test("should return false when passed null", () => {
    expect(isArray(null)).toBeFalsy();
  });
});

