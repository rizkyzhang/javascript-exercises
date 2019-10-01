function primeFactors(n, minOrMax = null) {
  if (!Number.isInteger(n)) return `${n} is not an integer`;
  if (Number.isInteger(n) && n < 0) return `${n} is not a positive integer`

  const factors = [];

  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }

  if (minOrMax === "min") return Math.min(...factors);
  if (minOrMax === "max") return Math.max(...factors);

  return factors.join(" * ");
}

