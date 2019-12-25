const compareStrings = require("./index");

describe("compareStrings function", () => {
  test("should exists", () => {
    expect(compareStrings).toBeDefined();
    expect(typeof compareStrings).toEqual("function");
  });

  test("should return true if first string contains all of the letters of the second string", () => {
    expect(compareStrings("hello", "Hello")).toBeTruthy();
    expect(compareStrings("zyxwvutsrqponmlkjihgfedcba", "qrstu")).toBeTruthy();
    expect(compareStrings("Mary", "Army")).toBeTruthy();
    expect(compareStrings("Mary", "Aarmy")).toBeTruthy();
    expect(compareStrings("Alien", "line")).toBeTruthy();
    expect(compareStrings("floor", "for")).toBeTruthy();
  });


  test("should return false if first string didn't contains all of the letters of the second string", () => {
    expect(compareStrings("hello", "hey")).toBeFalsy();
    expect(compareStrings("hello", "neo")).toBeFalsy();
    expect(compareStrings("voodoo", "no")).toBeFalsy();
  });
});

