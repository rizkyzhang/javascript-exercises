// Solution 1

function mergeArrays(...arrays) {
  let mergedArray = [];

  for (const array of arrays) {
    mergedArray = [...mergedArray, ...array];
  }

  return mergedArray;
}

// Solution 2

const mergeArrays = (...arrays) => arrays.reduce((prevArray, currArray) => prevArray.concat(currArray), []);

