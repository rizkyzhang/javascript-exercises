function getSecondsToTomorrow() {
  const now = new Date()
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), not.getDate() + 1)
  const diff = tomorrow - now;

  return Math.round(diff / 1000)
}
