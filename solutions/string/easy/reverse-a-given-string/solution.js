// Solution 1

function reverseStr(str) {
  let reversedStr = "";

  for (let i = 0; i < str.length; i++) {
    reversedStr = str[i] + reversedStr;
  }

  return reversedStr;
}

// Solution 2

function reverseStr(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr = reversedStr + str[i];
  }

  return reversedStr;
}

// Solution 3

function reverseStr(str) {
  let reversedStr = "";

  for (const char of str) {
    reversedStr = char + reversedStr;
  }

  return revStr;
}

// Solution 4

const reverseStr = str =>
  str
    .split("")
    .reduce((reversedStr, char) => char + reversedStr, "");

// Solution 5

const reverseString = string => [...string].reverse().join("");

