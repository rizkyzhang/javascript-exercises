function mergeArrays(...arrays) {
  let mergedArray = [];

  for (const array of arrays) {
    mergedArray = [...mergedArray, ...array];
  }

  return mergedArray.filter((element, index) => mergedArray.indexOf(element) === index);
}

