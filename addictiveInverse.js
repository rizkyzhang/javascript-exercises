/*
Given a set of numbers, return the additive inverse of each. 
Each positive becomes negatives, and the negatives become positives.
*/

// V1

const invert = arr => arr.map(num  => num === 0 ? num : -(num))

// V2 - Best way

const invert = arr => arr.map(num => 0 - num);