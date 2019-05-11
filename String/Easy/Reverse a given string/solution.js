// Solution 1

function reverseStr(str) {
  let revStr = "";

  for (let i = 0; i < str.length; i++) {
    revStr = str[i] + revStr;
  }

  return revStr;
}

// Solution 2

function reverseStr(str) {
  let revStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    revStr = revStr + str[i];
  }

  return revStr;
}

// Solution 3

function reverseStr(str) {
  let revStr = "";

  for (let char of str) {
    revStr = char + revStr;
  }

  return revStr;
}

// Solution 4

const reverseStr = str =>
  str.split("").reduce((revStr, char) => char + revStr, "");

// Solution 5

const reverseStr = str =>
  str
    .split("")
    .reverse()
    .join("");
