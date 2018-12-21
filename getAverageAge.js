/*
Write the function getAverageAge(users) 
that gets an array of objects with property age 
and gets the average.
*/

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let users = [ john, pete, mary ];

function getAverageAge(users) {
    return users.reduce(prev, user  => prev + user.age, 0) / users.length;
}

