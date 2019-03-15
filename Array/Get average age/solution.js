let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let users = [john, pete, mary];

const getAverageAge = users => users.reduce((prev, user) => prev + user.age, 0);
