// Solution 1

function toSpinalCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[\s_-]+/g, "-")
    .toLowerCase();
}

// Solution 2

function toSpinalCase2(str) {
  return str
    .split(/[\s_-]+|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}
