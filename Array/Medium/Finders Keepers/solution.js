function getTruthyElement(array, function) {
  for (let element of array) {
    if (function(element)) {
      return element;
    }
  }

  return undefined;
} 
