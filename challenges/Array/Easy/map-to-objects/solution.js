const john = { name: "John", surname: "Smith", id: 1 };
const pete = { name: "Pete", surname: "Hunt", id: 2 };
const mary = { name: "Mary", surname: "Key", id: 3 };

const users = [john, pete, mary];

const usersMapped = users.map(user => ({
  fullname: `${user.name} ${user.surname}`,
  id: user.id
}));

