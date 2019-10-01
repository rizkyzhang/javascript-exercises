// Solution 1

function sumTo(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

// Solution 2

const sumTo = n => (n === 1 ? 1 : n + sumTo(n - 1));

// Solution 3

const sumTo = n => (n * (n + 1)) / 2;

