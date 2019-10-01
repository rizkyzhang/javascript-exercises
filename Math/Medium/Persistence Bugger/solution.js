// Solution 1

function persistence(num) {
  if (num.toString().length === 1) return 0;

  let digits = num.toString().split("");
  let multiplicationResult = digits.reduce(
    (accumulator, digit) => accumulator * digit
  );
  let totalDigits = multiplicationResult.toString().length;
  let multiplicativePersistence = 1;

  while (totalDigits !== 1) {
    digits = multiplicationResult.toString().split("");
    multiplicationResult = digits.reduce(
      (accumulator, digit) => accumulator * digit
    );
    totalDigits = multiplicationResult.toString().split("").length;
    multiplicativePersistence++
  }

  return multiplicativePersistence;
}

// Solution 2

function persistence(num) {
  return `${num}`.length > 1
    ? 1 + persistence([...`${num}`].reduce((a, b)) => a * b);
    : 0;
}

