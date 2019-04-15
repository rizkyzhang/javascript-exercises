function protectEmail(email) {
  const [x, y] = email.split("@");

  return `${x.slice(0, 3)}...@${y}`;
}
