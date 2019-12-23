const mapToObjects = users => users.map(user => ({
  fullname: `${user.name} ${user.surname}`,
  id: user.id
}));

