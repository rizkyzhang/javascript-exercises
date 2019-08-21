function chunkArrayInGroups(array, size) {
  const result = [];
  const totalElements = array.length;
  let sliceIndex = 0;

  while (sliceIndex < totalElements) {
    result.push(array.slice(sliceIndex, sliceIndex += size));
  }

  return result;
}
