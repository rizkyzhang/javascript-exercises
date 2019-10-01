// Solution 1 - O(n)

function fib(n) {
  if (n < 2) return n;

  const arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr;
}

// Solution 2 - O(n)

function fib(n) {
  if (n < 2) return n;

  let a = 0;
  let b = 1;
  let c;
  const arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
    arr.push(c);
  }

  return arr;
}

// Solution 3 - O(n)

function fib(n) {
  if (n < 2) return n;

  const [a, b] = [0, 1];

  while (n-- > 1) {
    [a, b] = [b, a + b];
  }

  return b;
}

// Solution 4 - O(n)

function fib(n) {
  if (n < 2) return n;

  let a;
  let b = 0;
  let c = 1;
  const arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    a = b;
    b = c;
    c = a + b;
    arr.push(c);
  }

  return arr;
}

// Solution 5 - O(2^n)
/* 
(n = 10 => 7.5ms)
(n = 20 => 35ms)
(n = 30 => 80ms)
(n = 40 => 4320ms)
(n = 45 => 46791ms)
*/

const fib = n => (n < 2 ? n : fib(n - 1) + fib(n - 2));

// Solution 6 - O(2n)
/* 
(n = 100 => 1.8ms)
(n = 1000 => 4.7ms)
*/

function fib(n, memo = {}) {
  if (n < 2) return n;
  if (memo[n]) return memo[n];

  return (memo[n] = fib(n - 1, memo) + fib(n - 2, memo));
}

