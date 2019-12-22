function dropElements(array, func) {
  for (const element of array) {
    if (func(element)) {
      return array.slice(array.indexOf(element));
    }
  }

  return [];
}

