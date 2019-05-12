function chunkArrayInGroups(arr, size) {
  const result = [];
  let index = 0;

  while (index < arr.length) {
    result.push(arr.slice(index, (index += size)));
  }

  return result;
}
