// Solution 1

function whereforeArtThou(collection, source) {
  const sourceKeys = Object.keys(source);

  return collection.filter(obj => {
    for (let key of sourceKeys) {
      if (!obj.hasOwnProperty(key) || obj[key] !== source[key]) {
        return false;
      }
    }

    return true;
  });
}

// Solution 2

function whereforeArtThou(collection, source) {
  const sourceKeys = Object.keys(source);

  return collection.filter(obj => {
    return sourceKeys.every(key => {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    })
  });
}

// Solution 3

function whereforeArtThou(collection, source) {
  const sourceKeys = Object.keys(source);

  return collection.filter(obj => {
    return sourceKeys
      .map(key => obj.hasOwnProperty(key) && obj[key] === source[key])
      .reduce((a, b) => a && b);
  });
}
