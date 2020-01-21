/*
  Description:
    Given an array and a function func, loop through the array and remove each element starting from the first element until the function returns true when the looped element is passed through it.
    Then return the rest of the array, otherwise, return an empty array.

  Examples:
    console.log(dropElements([1, 2, 3, 4], function(n) { return n >= 3; }));
    // -> [3, 4]

    console.log(dropElements([1, 2, 3, 7, 4], function(n) { return n > 3; }));
    // -> [7, 4]
    
    console.log(dropElements([0, 1, 0, 1], function(n) { return n === 1; }));
    // -> [1, 0, 1]

    console.log(dropElements([1, 2, 3], function(n) { return n > 0; }));
    // -> [1, 2, 3]

    console.log(dropElements([1, 2, 3, 9, 2], function(n) { return n > 2; }));
    // -> [3, 9, 2]

    console.log(dropElements([1, 2, 3, 4], function(n) { return n > 5; }));
    // -> []
*/

function dropElements(array, func) {

}

module.exports = dropElements;

