// Solution 1

function mapToNumbers(arrays) {
  const numbers = [];

  for (const array of arrays) {
    numbers.push(Math.max(...array));
  }

  return numbers;
}

// Solution 2

function mapToNumbers(arrays) {
  return arrays.map(array => Math.max(...array));
}

