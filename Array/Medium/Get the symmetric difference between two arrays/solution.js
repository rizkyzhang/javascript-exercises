// Solution 1

function getDiffBetweenArrays(array1, array2) {
  return array1
    .concat(array2)
    .filter((element) => !array1.includes(element) || !array2.includes(element)); 
}

// Solution 2

function getDiffBetweenArrays(array1, array2) {
  const uniqueElementInArray1 = array1.filter(element => !array2.includes(element));
  const uniqueElementInArray2 = array2.filter(element => !array1.includes(element));
  
  return [...uniqueElementInArray1, ...uniqueElementInArray2];
}
