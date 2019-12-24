function seekAndDestroy(array, ...elementsToDestroy) {
  return array.filter(element => !elementsToDestroy.includes(element));
}

