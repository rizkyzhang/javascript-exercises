/*
  Description:
    Given an array and an integer, create a function that splits an array (first argument) into subarrays of N length (second argument).
    and returns them as a two-dimensional array.

  Examples:
    console.log(splitArray(["a", "b", "c", "d"], 2)); 
    // -> [["a", "b"], ["c", "d"]]

    console.log(splitArray([0, 1, 2, 3, 4, 5, 6], 4)); 
    // -> [[0, 1, 2, 3], [4, 5, 6]]
*/

function splitArray(array, length) {
  if (length < 1) {
    return "Length must be more than 0";
  }

  const arrays = [];
  const totalElements = array.length;
  let sliceIndex = 0;

  while (sliceIndex < totalElements) {
    arrays.push(array.slice(sliceIndex, sliceIndex += length));
  }

  return arrays;
}

module.exports = splitArray;

