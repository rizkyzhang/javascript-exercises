/*
  Title:
    Capitalize the first letter of each word of a given string

  Description:
    Write a JavaScript program to capitalize the first letter of each word of a given string.

  Examples:
    console.log(capitalizeWord("This is cool")); // -> "This Is Cool"

  Link:
    https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-50.php
*/

function capitalizeWord(word) {
  return word
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
