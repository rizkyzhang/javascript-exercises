// Solution 1

function seekAndDestroy(arr) {
  const initialArr = arguments[0];
  const elemToDestroy = [];
  
  for (let i = 1; i < arguments.length; i++) {
    elemToDestroy.push(arguments[i]);
  }

  return initialArr.filter(elem => !elemToDestroy.includes(elem));
}

// Solution 2

function seekAndDestroy(arr, ...elemToDestroy) {
  return arr.filter(elem => !elemToDestroy.includes(elem));
}
