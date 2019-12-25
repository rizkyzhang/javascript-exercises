// Solution 1

function filterDuplicateElements(array) {
  const filteredArray = [];

  for (const element of array) {
    if (!filteredArray.includes(element)) {
      filteredArray.push(element);
    }
  }

  return filteredArray;
}

// Solution 2

function filterDuplicateElements(array) {
  return array.filter((element, index) => array.indexOf(element) === index);
}

// Solution 3

const filterDuplicateElements = array => [...new Set(array)];

