// Solution 1

function filterUniqueElements(array) {
  const filteredArray = [];

  for (const element of array) {
    if (!filteredArray.includes(element)) {
      filteredArray.push(element);
    }
  }

  return filteredArray;
}

// Solution 2

function filterUniqueElements(array) {
  return array.filter((element, index) => array.indexOf(element) === index);
}

// Solution 3

const filterUniqueElements = array => [...new Set(array)];
