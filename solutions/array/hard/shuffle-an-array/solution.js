function shuffleArray(array) {
  const arrayClone = JSON.parse(JSON.stringify(array));
  const lastIndex = array.length - 1;

  for (let i = lastIndex; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    let temp = arrayClone[i];
    arrayClone[i] = arrayClone[j];
    arrayClone[j] = temp;
  }

  return arrayClone;
}

function shuffleArray(array) {
  const arrayClone = JSON.parse(JSON.stringify(array));
  const lastIndex = array.length - 1;

  for (let i = lastIndex; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [arrayClone[i], arrayClone[j]] = [arrayClone[j], arrayClone[i]];
  }

  return arrayClone;
}

