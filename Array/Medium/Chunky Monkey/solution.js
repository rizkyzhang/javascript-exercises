function chunkArrayInGroups(arr, size) {
  const result = [];
  const totalOfElements = arr.length;
  let sliceIndex = 0;

  while (sliceIndex < totalOfElements) {
    result.push(arr.slice(sliceIndex, sliceIndex += size));
  }

  return result;
}
