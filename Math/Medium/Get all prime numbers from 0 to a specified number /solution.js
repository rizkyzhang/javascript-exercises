function getPrimeNumsTo(n) {
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
