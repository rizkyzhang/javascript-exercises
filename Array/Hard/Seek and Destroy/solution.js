// Solution 1

function seekAndDestroy(array) {
  const initialArray = arguments[0];
  const elementsToDestroy = [];

  for (let i = 1; i < arguments.length; i++) {
    elementsToDestroy.push(arguments[i]);
  }

  return initialArray.filter(element => !elementsToDestroy.includes(element));
}

// Solution 2

function seekAndDestroy(array, ...elementToDestroy) {
  return array.filter(element => !elementToDestroy.includes(element));
}
