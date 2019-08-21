// Solution 1

function double(array) {
  const result = [...array];

  for (let i = 0; i < array.length; i++) {
    result.push(array[i]);
  }

  return result;
}

// Solution 2

function double(array) {
  const result = [...array];

  array.forEach(element => result.push(element));

  return result;
}

// Solution 3

const double = array => array.concat(array);

// Solution 4

const double = array => [...array, ...array];
