const calculateAverageAge = require("./index");

describe("calculateAverageAge function", () => {
  test("should exists", () => {
    expect(calculateAverageAge).toBeDefined();
    expect(typeof calculateAverageAge).toEqual("function");
  });

  test("should correctly calculate the average age when passed an array of 3 user objects", () => {
    const users = [
      { name: "Kenny", age: 21 },
      { name: "George", age: 24 },
      { name: "Billy", age: 36 }
    ];

    expect(calculateAverageAge(users)).toEqual(27);
  });

  test("should correctly calculate the average age when passed an array of 4 user objects", () => {
    const users = [
      { name: "Kenny", age: 38 },
      { name: "George", age: 26 },
      { name: "Billy", age: 28 },
      { name: "Carlos", age: 40 }
    ];

    expect(calculateAverageAge(users)).toEqual(33);
  });

  test("should correctly calculate the average age when passed an array of 5 user objects", () => {
    const users = [
      { name: "Kenny", age: 42 },
      { name: "George", age: 30 },
      { name: "Billy", age: 18 },
      { name: "Carlos", age: 35 },
      { name: "Luis", age: 25 }
    ];

    expect(calculateAverageAge(users)).toEqual(30);
  });
});
