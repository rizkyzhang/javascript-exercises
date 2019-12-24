function confirmEnding(str, ending) {
  return str.slice(str.length - ending.length) === ending;
}
