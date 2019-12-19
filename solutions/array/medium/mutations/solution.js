function mutation(array) {
  const word1 = array[0].toLowerCase();
  const word2 = array[1].toLowerCase();

  for (const character of word2) {
    if (!word1.includes(character)) {
      return false;
    }
  }

  return true;
}

