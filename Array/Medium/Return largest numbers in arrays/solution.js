// Solution 1

function largestOfFour(arrays) {
  const result = [];

  for (const array of arrays) {
    result.push(Math.max(...array));
  }

  return result;
}

// Solution 2

function largestOfFour(arrays) {
  return arrays.map(array => Math.max(...array));
}
