/*
  Description:
    Given an array of arrays, create a function to flatten the nested array.
    You must account for varying levels of nesting.

  Examples:
    console.log(flatten([[["a"]], [["b"]]]));
    // -> ["a", "b"]

    console.log(flatten([1, [], [3, [[4]]]]));
    // -> [1, 3, 4]
*/

function flatten(array) {
  return array.flat(Infinity);
}

module.exports = flatten;

