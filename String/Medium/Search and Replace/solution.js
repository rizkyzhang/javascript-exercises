function searchAndReplace(str, wordToReplace, replaceWordWith) {
  return /^[A-Z]/.test(wordToReplace)
    ? str.replace(
        wordToReplace,
        `${replaceWordWith[0].toUpperCase()}${replaceWordWith.slice(1)}`
      )
    : str.replace(wordToReplace, replaceWordWith);
}
