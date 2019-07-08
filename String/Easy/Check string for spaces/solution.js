function hasSpaces(str) {
  for (let char of str) {
    if (char === " ") {
      return true;
    }
  }

  return false;
}
