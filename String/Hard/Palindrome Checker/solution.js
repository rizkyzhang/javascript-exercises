function isPalindrome(str) {
  const initialStr = str.replace(/[\W_]/g, "").toLowerCase();
  const reversedStr = str
    .replace(/[\W_]/g, "")
    .toLowerCase()
    .split("")
    .reverse()
    .join("");

  return initialStr === reversedStr;
}
