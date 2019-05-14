// Solution 1

function flatten(arr, result = []) {
  for (let elem of arr) {
    if (Array.isArray(elem)) {
      result.push(...flatten(elem));
    } else {
      result.push(elem);
    }
  }

  return result;
}

// Solution 2

function flatten(arr) {
  return Array.isArray(arr)
    ? [].concat(...arr.map(flatten))
    : arr;
}

// Solution 3

function flatten(arr) {
  return arr
    .reduce((acc, elem) => acc.concat(Array.isArray(elem) 
                            ? flatten(elem) 
                            : elem), [])
}

// Solution 4 (Only work for array of numbers)

function flatten(arr) {
  return arr
    .join()
    .split(",")
    .map(Number);
}

// Solution 5

const flatten = arr => arr.flat(Infinity);
