/*
  Description:
    Check whether input is an array or not.
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
*/

function isArray(dataType) {

}

module.exports = isArray;

