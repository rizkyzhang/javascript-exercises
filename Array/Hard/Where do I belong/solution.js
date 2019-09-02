// Solution 1

function getIndexToInsert(array, number) {
  const sortedNumbers = [...array].sort((a, b) => a - b);

  for (let i = 0; i < sortedNumbers.length; i++) {
    if (sortedNumbers[i] >= number) {
      return i;
    }
  }

  return sortedNumbers.length;
}

// Solution 2

function getIndexToInsert(array, number) {
  const sortedNumbers = [...array].sort((a, b) => a - b);
  const index = sortedNumbers.findIndexOf(
    currentNumber => currentNumber >= number
  );

  return index === -1 ? sortedNumbers.length : index;
}

// Solution 3

function getIndexToInsert(array, number) {
  const sortedNumbers = [...array].concat(number).sort((a, b) => a - b);
  const index = sortedNumbers.indexOf(number);

  return index;
}
