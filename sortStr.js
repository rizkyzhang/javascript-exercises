/* 
Write a JavaScript function that returns a passed string with letters in alphabetical order.
Example string: 'webmaster'
Expected Output: 'abeemrstw'
*/

function sortStr(str) {
    return str.split("").sort((a, b) => a.localeCompare(b)).join("");
}


