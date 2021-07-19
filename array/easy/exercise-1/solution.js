const getAverageAge = users => users.reduce((acc, user) => acc + user.age, 0) / users.length;

