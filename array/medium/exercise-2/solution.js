// Solution 1

function mergeArrays1(...arrays) {
  const mergedArray = [];

  for (const array of arrays) {
    mergedArray.push(...array);
  }

  return mergedArray;
}

// Solution 2

const mergeArrays2 = (...arrays) => arrays.reduce((prevArray, currArray) => prevArray.concat(currArray), []);

