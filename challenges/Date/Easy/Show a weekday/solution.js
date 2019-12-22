function getWeekDay(date) {
  const days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

  return days[date.getDay()];
}
