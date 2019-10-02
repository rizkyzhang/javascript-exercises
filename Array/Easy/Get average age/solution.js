const john = {name: "John", age: 25};
const pete = {name: "Pete", age: 30};
const mary = {name: "Mary", age: 29};

const users = [john, pete, mary];

const getAverageAge = users => users.reduce((acc, user) => acc + user.age, 0) / users.length;

