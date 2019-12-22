// Solution 1

function getLargestNumberInArray(arrays) {
  const numbers = [];

  for (const array of arrays) {
    numbers.push(Math.max(...array));
  }

  return numbers;
}

// Solution 2

function getLargestNumberInArray(arrays) {
  return arrays.map(array => Math.max(...array));
}

