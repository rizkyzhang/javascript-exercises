// Solution 1

function getSecondsToday() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diff = now - today; // ms difference

  return Math.round(diff / 1000); // convert ms to s
}

// Solution 2

function getSecondsToday() {
  const now = new Date();

  return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
}

