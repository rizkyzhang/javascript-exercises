// Solution 1

function flatten(array, result = []) {
  for (const element of array) {
    if (Array.isArray(element)) {
      result.push(...flatten(element));
    } else {
      result.push(element);
    }
  }

  return result;
}

// Solution 2

function flatten(array) {
  return Array.isArray(array) ? [].concat(...array.map(flatten)) : array;
}

// Solution 3

function flatten(array) {
  return array.reduce(
    (accumulator, element) =>
      accumulator.concat(Array.isArray(element) ? flatten(element) : element),
    []
  );
}

// Solution 4 (Only work for array of numbers)

function flatten(array) {
  return array
    .join()
    .split(",")
    .map(Number);
}

// Solution 5

const flatten = array => array.flat(Infinity);
