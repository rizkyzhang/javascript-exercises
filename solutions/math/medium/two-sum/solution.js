// Solution 1 - Brute Force O(n2) 

function twoSum(integers, target) {
  const pairs = [];

  for (let i = 0; i < integers.length - 1; i++) {
    for (let j = i + 1; j < integers.length; j++) {
      if (integers[i] + integers[j] === target) {
        pairs.push([integers[i], integers[j]]);
      }
    }
  }

  return pairs;
}

// Solution 2 - Hash Table O(n)

function twoSum(integers, target) {
  const hashTable = {};
  const pairs = [];

  for (let i = 0; i < integers.length; i++) {
    if (hashTable[integers[i]]) {
      pairs.push([map[integers[i]], integers[i]]);
    } else {
      hashTable[target - integers[i]] = integers[i];
    }
  }

  return pairs;
}


