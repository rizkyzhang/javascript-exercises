function toPigLatin(str) {
  const consonant = str.match(/^[^aeiou]+/);
  const vowel = /^[aeiou]/;

  return vowel.test(str)
    ? `${str.slice()}way`
    : `${str.slice(consonant[0].length)}${consonant[0]}ay`;
}
