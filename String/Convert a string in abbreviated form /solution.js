function abbrevName(string) {
  return string
    .split(" ")
    .map((name, index) => (index === 0 ? name : name[0].toUpperCase()))
    .join(".");
}
