const mapToObjects = require("./index");

describe("mapToObjects function", () => {
  test("should exists", () => {
    expect(mapToObjects).toBeDefined();
    expect(typeof mapToObjects).toEqual("function");
  });

  test("should return an array of objects", () => {
    const users1 = [
      { name: "Eric", surname: "Ming", id: 1 },
      { name: "James", surname: "Smith", id: 2 },
      { name: "Carlos", surname: "Ken", id: 3 }
    ];

    const expected1 = [
      { fullName: "Eric Ming", id: 1 },
      { fullName: "James Smith", id: 2 },
      { fullName: "Carlos Ken", id: 3 }
    ];

    const users2 = [
      { name: "Thomas", surname: "Edison", id: 1 },
      { name: "Sam", surname: "Anderson", id: 2 },
      { name: "Gerry", surname: "Rymer", id: 3 }
    ];

    const expected2 = [
      { fullName: "Thomas Edison", id: 1 },
      { fullName: "Sam Anderson", id: 2 },
      { fullName: "Gerry Rymer", id: 3 }
    ];

    const users3 = [
      { name: "Verren", surname: "Mayton", id: 1 },
      { name: "Elizabeth", surname: "Catherine", id: 2 },
      { name: "Michell", surname: "Rhynes", id: 3 }
    ];

    const expected3 = [
      { fullName: "Verren Mayton", id: 1 },
      { fullName: "Elizabeth Catherine", id: 2 },
      { fullName: "Michell Rhynes", id: 3 }
    ];

    expect(mapToObjects(users1)).toEqual(expected1);
    expect(mapToObjects(users2)).toEqual(expected2);
    expect(mapToObjects(users3)).toEqual(expected3);
  });
});

