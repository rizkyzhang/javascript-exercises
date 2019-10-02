// Solution 1

function flatten(array, flattenedArray = []) {
  for (const element of array) {
    if (Array.isArray(element)) {
      flattenedArray.push(...flatten(element));
    } else {
      flattenedArray.push(element);
    }
  }

  return flattenedArray;
}

// Solution 2

function flatten(array) {
  return array.reduce(
    (acc, element) =>
      acc.concat(Array.isArray(element) ? flatten(element) : element),
    []
  );
}

// Solution 3 (Only work for array of numbers)

function flatten(array) {
  return array
    .join()
    .split(",")
    .map(Number);
}

// Solution 4

const flatten = array => array.flat(Infinity);

