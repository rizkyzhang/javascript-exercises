// Solution 1

function getLongestWord(str) {
  if (typeof str !== "string") return `${str} is not a string`;

  const words = str.split(" ");
  let longestWordLen = 0;
  let longestWord = "";

  if (words.length === 1) return words[0];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWordLen) {
      longestWordLen = words[i].length;
      longestWord = words[i];
    }
  }

  return longestWord;
}

// Solution 2

function getLongestWord2(str) {
  if (typeof str !== "string") return `${str} is not a string`;

  const words = str.split(" ");

  if (words.length === 1) return words[0];

  return words.sort((a, b) => b.length - a.length)[0];
}
