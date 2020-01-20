const mapToNames = require("./index");

describe("mapToNames function", () => {
  test("should exists", () => {
    expect(mapToNames).toBeDefined();
    expect(typeof mapToNames).toEqual("function");
  });

  test("should return an array of names when passed an array of 3 user objects", () => {
    const users = [
      { name: "Ricky", age: 25 },
      { name: "Patrick", age: 20 },
      { name: "Becky", age: 30 }
    ];

    expect(mapToNames(users)).toEqual(["Ricky", "Patrick", "Becky"]);
  });

  test("should return an array of names when passed an array of 4 user objects", () => {
    const users = [
      { name: "Anderson", age: 18 },
      { name: "Nick", age: 24 },
      { name: "John", age: 32 },
      { name: "Peter", age: 29 }
    ];

    expect(mapToNames(users)).toEqual(["Anderson", "Nick", "John", "Peter"]);
  });

  test("should return an array of names when passed an array of 5 user objects", () => {
    const users = [
      { name: "Rudy", age: 23 },
      { name: "Candy", age: 27 },
      { name: "Lucy", age: 19 },
      { name: "Brian", age: 20 },
      { name: "Kelvin", age: 26 }
    ];

    expect(mapToNames(users)).toEqual(["Rudy", "Candy", "Lucy", "Brian", "Kelvin"]);
  });
});

