const getDiffBetweenArrays = require("./index");

describe("getDiffBetweenArrays function", () => {
  test("should exists", () => {
    expect(getDiffBetweenArrays).toBeDefined();
    expect(typeof getDiffBetweenArrays).toEqual("function");
  })

  test("should return an array with unique elements", () => {
    const array1 = [1, 2, 6, 3];
    const array2 = [3, 4, 9, 1];

    const array3 = [1, 2, 3];
    const array4 = [1, 2, 3];

    const array5 = ["Sam", "Becky"];
    const array6 = ["Sam", "Becky", "Will"]

    expect(getDiffBetweenArrays(array1, array2)).toEqual([2, 6, 4, 9]);
    expect(getDiffBetweenArrays(array3, array4)).toEqual([]);
    expect(getDiffBetweenArrays(array5, array6)).toEqual(["Will"]);
  });
})


