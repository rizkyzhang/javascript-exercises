// Solution 1

function getLongestWord(sentence) {
  if (typeof sentence !== "string") return null;

  const words = sentence.split(" ");
  let longestWordLen = 0;
  let longestWord = "";

  if (words.length === 1) return words[0];

  for (let word of words) {
    if (word.length > longestWordLen) {
      longestWordLen = word.length;
      longestWord = word;
    }
  }

  return longestWord;
}

// Solution 2

function getLongestWord(sentence) {
  if (typeof sentence !== "string") return null;

  const words = sentence.split(" ");

  if (words.length === 1) return words[0];

  return words.sort((a, b) => b.length - a.length)[0];
}

