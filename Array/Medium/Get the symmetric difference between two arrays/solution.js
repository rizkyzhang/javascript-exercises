// Solution 1

function getDiffBetweenArrays(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter((elem) => !arr1.includes(elem) || !arr2.includes(elem)); 
}

// Solution 2

function getDiffBetweenArrays(arr1, arr2) {
  const uniqueElemInArr1 = arr1.filter(elem => !arr2.includes(elem));
  const uniqueElemInArr2 = arr2.filter(elem => !arr1.includes(elem));
  
  return [...uniqueElemInArr1, ...uniqueElemInArr2];
}
