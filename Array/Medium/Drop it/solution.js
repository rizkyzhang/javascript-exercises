function dropElements(arr, func) {
  for (let elem of arr) {
    if (func(elem)) {
      return arr.slice(arr.indexOf(elem));
    }
  }

  return [];
}
