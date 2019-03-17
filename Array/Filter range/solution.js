const filterRange = (arr, a, b) => arr.filter(num => a <= num && num <= b);

const arr = [5, 3, 8, 1];

const filtered = filterRange(arr, 1, 4);
