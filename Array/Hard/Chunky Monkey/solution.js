function chunkArrayInGroups(array, size) {
  const arrays = [];
  const totalElements = array.length;
  let sliceIndex = 0;

  while (sliceIndex < totalElements) {
    arrays.push(array.slice(sliceIndex, sliceIndex += size));
  }

  return result;
}

