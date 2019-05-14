// Solution 1

function getDiffBetweenArrays(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter((elem) => !arr1.includes(elem) || !arr2.includes(elem)); 
}

// Solution 2

function getDiffBetweenArrays2(arr1, arr2) {
  const filtered = (arr1, arr2) => arr1.filter(elem => arr2.indexOf(elem) === -1);
  
  return [...filtered(arr1, arr2), ...filtered(arr2, arr1)];
}
