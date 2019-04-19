// V1

function filterUnique(arr) {
  const result = [];

  for (let elem of arr) {
    if (!result.includes(elem)) {
      result.push(elem);
    }
  }

  return result;
}

// V2

function filterUnique(arr) {
  return arr.filter((elem, index) => arr.indexOf(elem) === index);
}

// V3

const filterUnique = arr => [...new Set(arr)];
