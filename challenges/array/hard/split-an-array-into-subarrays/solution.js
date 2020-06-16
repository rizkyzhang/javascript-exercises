function splitArray(array, length) {
  if (length < 1) {
    return "Length must be more than 0";
  }

  const arrays = [];
  const totalElements = array.length;
  let sliceIndex = 0;

  while (sliceIndex < totalElements) {
    arrays.push(array.slice(sliceIndex, sliceIndex += length));
  }

  return arrays;
}

