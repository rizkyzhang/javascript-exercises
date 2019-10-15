// Solution 1

function swapCase(str) {
  let result = "";

  for (const letter of str) {
    const lowerCase = letter.toLowerCase();
    const upperCase = letter.toUpperCase();

    letter === lowerCase ? result += upperCase : result += lowerCase;
  }

  return result;
}

// Solution 2

function swapCase(str) {
  return str
    .split("")
    .map(letter => {
      const lowerCase = letter.toLowerCase();
      const upperCase = letter.toUpperCase();

      return letter === lowerCase ? upperCase : lowerCase;
    })
    .join("");
}

