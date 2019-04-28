// Solution 1

function getIndexToInsert(arr, num) {
  if (arr.length === 0) return 0;

  const sortedNums = [...arr].sort((a, b) => a - b);

  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] === num) {
      return sortedNums.indexOf(arr[i]);
    }
  }

  const firstNumLargerThanN = sortedNums.find(currNum => currNum > num);

  if (firstNumLargerThanN === undefined) {
    return sortedNums.length;
  }

  return sortedNums.indexOf(firstNumLargerThanN);
}

// Solution 2

function getIndexToInsert(arr, num) {
  const sortedNums = [...arr].sort((a, b) => a - b);

  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] >= num) {
      return i;
    }
  }

  return sortedNums.length;
}

// Solution 3

function getIndexToInsert(arr, num) {
  const sortedNums = [...arr].sort((a, b) => a - b);
  const index = sortedNums.findIndexOf(currNum => currNum >= num);

  return index === -1 ? sortedNums.length : index;
}

// Solution 4

function getIndexToInsert(arr, num) {
  const sortedNums = [...arr].concat(num).sort((a, b) => a - b);
  const index = sortedNums.indexOf(num);

  return index;
}
