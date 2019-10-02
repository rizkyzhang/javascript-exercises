function getDiffBetweenArrays(array1, array2) {
  const uniqueElementsInArray1 = array1.filter(element => !array2.includes(element));
  const uniqueElementsInArray2 = array2.filter(element => !array1.includes(element));

  return [...uniqueElementsInArray1, ...uniqueElementsInArray2];
}

