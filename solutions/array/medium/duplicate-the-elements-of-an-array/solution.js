// Solution 1

const duplicateElements = array => array.concat(array);

// Solution 2

const duplicateElements = array => [...array, ...array];

