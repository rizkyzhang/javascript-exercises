function getTruthyElement(array, func) {
  for (const element of array) {
    if (func(element)) {
      return element;
    }
  }

  return undefined;
}
