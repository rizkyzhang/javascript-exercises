const getAverageAge = require("./index");

describe("getAverageAge function", () => {
  test("should exists", () => {
    expect(getAverageAge).toBeDefined();
    expect(typeof getAverageAge).toEqual("function");
  });

  test("should return 28", () => {
    const john = { name: "John", age: 25 };
    const pete = { name: "Pete", age: 30 };
    const mary = { name: "Mary", age: 29 };

    const users = [john, pete, mary];

    expect(getAverageAge(users)).toEqual(28);
  });
});

