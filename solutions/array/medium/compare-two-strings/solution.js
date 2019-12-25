function compareStrings(string1, string2) {
  for (const character of string2.toLowerCase()) {
    if (!string1.toLowerCase().includes(character)) {
      return false;
    }
  }

  return true;
}

