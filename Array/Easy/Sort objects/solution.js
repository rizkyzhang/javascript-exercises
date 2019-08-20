const john = {name: "John", age: 25};
const pete = {name: "Pete", age: 30};
const mary = {name: "Mary", age: 28};

const users = [john, pete, mary];

const sortByAge = users => users.sort((a, b) => a.age - b.age);
