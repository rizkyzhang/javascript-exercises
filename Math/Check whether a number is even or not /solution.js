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
