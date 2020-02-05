// Solution 1

function mergeArrays(...arrays) {
  let mergedArray = [];

  for (const array of arrays) {
    mergedArray = [...mergedArray, ...array];
  }

  return mergedArray.filter((element, index) => mergedArray.indexOf(element) === index);
}

// Solution 2

function mergeArrays(...arrays) {
  return arrays
    .reduce((prevArray, currArray) => prevArray.concat(currArray), [])
    .filter((element, index, array) => array.indexOf(element) === index);
}

