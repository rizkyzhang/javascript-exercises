function dropElements(arr, func) {
  for (const elem of arr) {
    if (func(elem)) {
      return arr.slice(arr.indexOf(elem));
    }
  }

  return [];
}
