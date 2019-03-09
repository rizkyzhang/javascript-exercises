/*
  Title:
    Check whether a number is even or not

  Description:
    Write a JavaScript program to check whether a number is even or not.

  Examples:
    console.log(isEvenOrOdd(8)); // -> "even"
    console.log(isEvenOrOdd(11)); // -> "odd"

  Link:
    https://www.w3resource.com/javascript-exercises/javascript-recursion-function-exercise-7.php
*/

// Using remainder operator

function isEvenOrOdd(n) {
  if (!Number.isInteger(n)) return `${n} is not an integer`;

  return n % 2 === 0 ? "even" : "odd";
}

// Using bitwise operator

const isEvenOrOddBit = n => (n & 1 ? "odd" : "even");

// Recursive

function isEvenOrOddRec(n) {
  if (!Number.isInteger(n)) return `${n} is not an integer`;

  if (n === 0) return "even";
  if (n === 1) return "odd";

  return isEvenOrOddRec(n - 2);
}
