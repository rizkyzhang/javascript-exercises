function generateRandomInteger(min, max) {
  const range = max - min;
  const randomNumber = Math.random() * (range + 1) + min;

  return Math.floor(randomNumber);
}

