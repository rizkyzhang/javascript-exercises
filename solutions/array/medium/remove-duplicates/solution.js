// Solution 1

function removeDuplicates(array) {
  const filteredArray = [];

  for (const element of array) {
    if (!filteredArray.includes(element)) {
      filteredArray.push(element);
    }
  }

  return filteredArray;
}

// Solution 2

const removeDuplicates = array => array.filter((element, index) => array.indexOf(element) === index);

// Solution 3

const removeDuplicates = array => [...new Set(array)];

