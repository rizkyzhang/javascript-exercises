function chunkArrayInGroups(arr, size) {
  const result = [];
  let index = 0;

  for (let i = 0; i < arr.length / size; i++) {
    result.push(arr.slice(index, index + size));

    index += size;
  }

  return result;
}
