/*
  Title:
    Get all prime numbers from 0 to a specified number

  Description:
    Write a JavaScript function to get all prime numbers from 0 to a specified number.
  
  Examples:
    console.log(primeFactorsTo(5)); // -> [2, 3, 5]
    console.log(primeFactorsTo(15)); // -> [2, 3, 5, 7, 11, 13]

  Link:
    https://www.w3resource.com/javascript-exercises/javascript-math-exercise-43.php
*/

function primeFactorsTo(n) {
  const result = [];

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) result.push(i);
  }

  return result;
}

function isPrime(n) {
  if (!Number.isInteger(n) || n < 2) return false;
  if (n <= 3) return true;
  if (n % 2 === 0) return false;

  const sqrt = Math.sqrt(n);

  for (let i = 3; i <= sqrt; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}
