const mapToNames = require("./index");

describe("mapToNames function", () => {
  test("should exists", () => {
    expect(mapToNames).toBeDefined();
    expect(typeof mapToNames).toEqual("function");
  });

  test("should return an array of names", () => {
    const users1 = [
      { name: "Ricky", age: 25 },
      { name: "Patrick", age: 20 },
      { name: "Becky", age: 30 }
    ];

    const users2 = [
      { name: "Anderson", age: 18 },
      { name: "Nick", age: 24 },
      { name: "John", age: 32 }
    ];

    const users3 = [
      { name: "Rudy", age: 23 },
      { name: "Candy", age: 27 },
      { name: "Lucy", age: 19 }
    ]

    expect(mapToNames(users1)).toEqual(["Ricky", "Patrick", "Becky"]);
    expect(mapToNames(users2)).toEqual(["Anderson", "Nick", "John"]);
    expect(mapToNames(users3)).toEqual(["Rudy", "Candy", "Lucy"]);
  });
});

