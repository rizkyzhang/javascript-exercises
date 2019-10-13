// Solution 1 - remainder operator

function isEvenOrOdd(n) {
  if (!Number.isInteger(n)) return `${n} is not an integer`;

  return n % 2 === 0 ? "even" : "odd";
}

// Solution 2 - recursive

function isEvenOrOdd(n) {
  if (!Number.isInteger(n)) return `${n} is not an integer`;

  const isNegativeNumber = Math.sign(n) === -1;

  if (n === 0) return "even";

  if (n === 1) return "odd";

  return isNegativeNumber ? isEvenOrOdd(n + 2) : isEvenOrOdd(n - 2);
}

// Solution 3 - bitwise operator

const isEvenOrOdd = n => (n & 1 ? "odd" : "even");

