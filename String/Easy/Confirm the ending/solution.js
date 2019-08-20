function confirmEnding(string, ending) {
  return string.slice(string.length - ending.length) === ending;
}
