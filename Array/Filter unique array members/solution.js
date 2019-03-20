// V1

function filterUnique(arr) {
  const result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

// V2

function filterUnique(arr) {
  return arr.filter((elem, index) => arr.indexOf(elem) === index);
}

// V3

const filterUnique = arr => Array.from(new Set(arr));
