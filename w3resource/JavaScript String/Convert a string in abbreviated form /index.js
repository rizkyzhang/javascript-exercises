/*
  Title:
    Convert a string in abbreviated form

  Description:
    Write a JavaScript function to convert a string in abbreviated form.

  Example:
    console.log(abrrevName(""Robin Singh"")); // -> "Robin S."

  Link:
    https://www.w3resource.com/javascript-exercises/javascript-string-exercise-5.php
*/

function abbrevName(string) {
  return string
    .split(" ")
    .map((name, index) => (index === 0 ? name : name[0].toUpperCase()))
    .join(".");
}
