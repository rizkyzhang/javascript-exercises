// Fisher-Yates Shuffle Algorithm

function shuffle(array) {
  const lastIndex = array.length - 1;

  for (let i = lastIndex; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

