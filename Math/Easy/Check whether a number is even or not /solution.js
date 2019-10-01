// Solution 1 - remainder operator

function isEvenOrOdd(n) {
  if (!Number.isInteger(n)) return `${n} is not an integer`;

  return n % 2 === 0 ? "even" : "odd";
}

// Solution 2 - bitwise operator

const isEvenOrOdd = n => (n & 1 ? "odd" : "even");

// Solution 3 - recursive

function isEvenOrOdd(n) {
  if (!Number.isInteger(n)) return `${n} is not an integer`;

  if (n === 0) return "even";
  if (n === 1) return "odd";

  return isEvenOrOdd(n - 2);
}

