// Solution 1

function whereforeArtThou(collection, source) {
  const sourceKeys = Object.keys(source);

  return collection.filter(obj => {
    return sourceKeys.every(key => {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    })
  });
}

// Solution 2

function whereforeArtThou(collection, source) {
  const sourceKeys = Object.keys(source);

  return collection.filter(obj => {
    return sourceKeys
      .map(key => obj.hasOwnProperty(key) && obj[key] === source[key])
      .reduce((a, b) => a && b);
  });
}

