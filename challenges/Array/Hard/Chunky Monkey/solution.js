function chunkArrayInGroups(array, size) {
  if (size < 1) {
    return "Size must be more than 0";
  }

  const arrays = [];
  const totalElements = array.length;
  let sliceIndex = 0;

  while (sliceIndex < totalElements) {
    arrays.push(array.slice(sliceIndex, sliceIndex += size));
  }

  return arrays;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4], 1));

