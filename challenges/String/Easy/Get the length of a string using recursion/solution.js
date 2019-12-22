function getStrLength(str) {
  return !str ? 0 : 1 + getStrLength(str.slice(1));
}
