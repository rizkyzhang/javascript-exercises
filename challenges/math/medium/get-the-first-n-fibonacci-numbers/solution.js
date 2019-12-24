// Solution 1 - O(n)

function fib(n) {
  if (n < 2) return n;

  const fibonacciNumbers = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibonacciNumbers[i] = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
  }

  return fibonacciNumbers;
}

// Solution 2 - O(n)

function fib(n) {
  if (n < 2) return n;

  let a = 0;
  let b = 1;
  let c;
  const fibonacciNumbers = [0, 1];

  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
    fibonacciNumbers.push(c);
  }

  return fibonacciNumbers;
}

