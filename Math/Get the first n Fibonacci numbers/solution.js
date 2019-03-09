// Iterative Solution V1 - Forward - O(n)

function fib(n) {
  const arr = [0, 1];
  const mapper = {};
  let counter = 0;

  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  for (const elem in arr) {
    mapper[counter] = arr[elem];
    counter++;
  }

  return mapper;
}

// Iterative solution V2 - Forward  - O(n)
/*
This method has you work upwards from 0 to n (instead of downwards from n to 0) 
and store the results in three variables as you go. 
It makes things faster since you don't have to find 
fibbonacci(n-1) twice, 
fibbonacci(n-2) three times, etc.
*/

function fib(n) {
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

// Iterative solution V3 - Forward - O(n)

function fib(n) {
  if (n < 2) return n;

  let [a, b] = [0, 1];

  while (n-- > 1) {
    [a, b] = [b, a + b];
  }

  return b;
}

// Iterative solution V4 - Backward - O(n)

function fib(n) {
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

// Recursive solution - O(2^n)
/* 
(n = 10 => 7.5ms)
(n = 20 => 35ms)
(n = 30 => 80ms)
(n = 40 => 4320ms)
(n = 45 => 46791ms)
*/

const fib = n => (n < 2 ? n : fib(n - 1) + fib(n - 2));

// Recursive solution with memoization - O(2n)
/* 
(n = 100 => 1.8ms)
(n = 1000 => 4.7ms)
*/

function fib(n, memo = {}) {
  if (memo[n]) return memo[n];

  if (n < 2) return n;

  return (memo[n] = fib(n - 1, memo) + fib(n - 2, memo));
}

// ES6 Tail Call optimization

const fib = (n, a = 1, b = 0) => (n === 0 ? b : fib(n - 1, a + b, a));
