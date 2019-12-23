/*
  Description:
    Create a function to check whether an input is an array or not.
    In JavaScript, array are not a true array, they are actually an object.
    So you can’t simply do a typeof check, because it will return an object.
 
  Examples:
    console.log(isArray("string"));
    // -> false

    console.log(isArray(123));
    // -> false

    console.log(isArray({}));
    // -> false

    console.log(isArray([]));
    // -> true

    console.log(isArray([1, 2, 3]));
    // -> true

  Link:
    https://www.w3resource.com/javascript-exercises/javascript-array-exercise-1.php
*/

function isArray(dataType) {

}

module.exports = isArray;

