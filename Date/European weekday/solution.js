function getLocalDay(date) {
  let day = date.getDay();

  if (day === 0) {
    day = 7;
  }

  return day;
}
