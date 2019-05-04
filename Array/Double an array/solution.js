// Solution 1

function double(arr) {
  const result = [...arr];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }

  return result;
}

// Solution 2

function double(arr) {
  const result = [...arr];

  arr.forEach(elem => result.push(elem));

  return result;
}

// Solution 3

const double = arr => arr.concat(arr);

// Solution 4

const double = arr => [...arr, ...arr];
