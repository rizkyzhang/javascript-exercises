function generateRandomNumber(min, max) {
  const range = max - min;

  return Math.random() * range + min;
}

