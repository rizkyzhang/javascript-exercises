// V1

const invert = arr => arr.map(num => (num === 0 ? num : -num));

// V2 - Best way

const invert = arr => arr.map(num => 0 - num);
