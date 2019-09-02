// Solution 1

function getLargestNumberInArray(arrays) {
  const result = [];

  for (const array of arrays) {
    result.push(Math.max(...array));
  }

  return result;
}

// Solution 2

function getLargestNumberInArray(arrays) {
  return arrays.map(array => Math.max(...array));
}
