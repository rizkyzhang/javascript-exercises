// Solution 1

const invert = arr => arr.map(num => (num === 0 ? num : -num));

// Solution 2

const invert = arr => arr.map(num => 0 - num);

