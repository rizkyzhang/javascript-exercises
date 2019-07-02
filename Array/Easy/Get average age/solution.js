const john = {name: "John", age: 25};
const pete = {name: "Pete", age: 30};
const mary = {name: "Mary", age: 29};

const users = [john, pete, mary];

const getAverageAge = users => users.reduce((accumulator, user) => accumulator + user.age, 0);
