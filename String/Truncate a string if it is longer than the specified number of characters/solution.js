function truncateStr(str, maxLength) {
  return str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
}
