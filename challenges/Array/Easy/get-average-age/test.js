const getAverageAge = require("./index");

describe("getAverageAge function", () => {
  test("should exists", () => {
    expect(getAverageAge).toBeDefined();
    expect(typeof getAverageAge).toEqual("function");
  });

  test("should return 27", () => {
    const users = [
      { name: "Kenny", age: 21 },
      { name: "George", age: 24 },
      { name: "Billy", age: 36 }
    ];

    expect(getAverageAge(users)).toEqual(27);
  });

  test("should return 31", () => {
    const users = [
      { name: "Kenny", age: 38 },
      { name: "George", age: 26 },
      { name: "Billy", age: 29 }
    ];

    expect(getAverageAge(users)).toEqual(31);
  });

  test("should return 31", () => {
    const users = [
      { name: "Kenny", age: 42 },
      { name: "George", age: 30 },
      { name: "Billy", age: 18 }
    ];

    expect(getAverageAge(users)).toEqual(30);
  });
});

