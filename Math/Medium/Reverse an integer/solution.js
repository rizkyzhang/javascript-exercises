function reverseInt(int) {
  if (!Number.isInteger(int)) return `${int} is not an integer`;

  const abs = Math.abs(int);
  const str = String(abs);
  const reversedInt = +str
    .split("")
    .reverse()
    .join("");

  return reversedInt < 0x7fffffff ? Math.sign(int) * reversedInt : 0;
}
