// Solution 1

function hasSpaces(str) {
  for (let char of str) {
    if (char === " ") {
      return true;
    }
  }

  return false;
}

// Solution 2

const hasSpaces = str => str.includes(" ");
