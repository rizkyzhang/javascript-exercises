// Solution 1 (Loop)

function factorial(n) {
  if (n < 0) return null;
  if (n === 0 || n === 1) return 1;

  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

// Solution 2 (Recursion)

function factorial(n) {
  if (n < 0) return null;
  if (n === 0) return 1;

  return n * factorial(n - 1);
}

// Solutuon 3 (Recursion with memoization)

function factorial(n, memo = {}) {
  if (n < 0) return null;
  if (n === 0 || n === 1) return 1;
  if (memo[n]) return memo[n];

  return (memo[n] = n * factorial(n, memo));
}

// Solution 4

function factorial(n) {
  if (n < 0) return null;
  if (n === 0 || n === 1) return 1;

  return [...Array(n + 1).keys()].slice(1).reduce((acc, curr) => acc * curr, 1);
}
