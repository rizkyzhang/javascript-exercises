function getLocalDay(date) {
  let day = date.getDay();

  return day === 0 ? 7 : day;
}
