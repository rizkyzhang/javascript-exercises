// Solution 1

function filterUniqueElements(array) {
  const result = [];

  for (const element of array) {
    if (!result.includes(element)) {
      result.push(element);
    }
  }

  return result;
}

// Solution 2

function filterUniqueElements(array) {
  return array.filter((element, index) => array.indexOf(element) === index);
}

// Solution 3

const filterUniqueElements = array => [...new Set(array)];
