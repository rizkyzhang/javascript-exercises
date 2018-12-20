/* 
Write a JavaScript function that returns a passed string with letters in alphabetical order.
Example string: 'webmaster'
Expected Output: 'abeemrstw'
*/


function sortByAlphabet(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    
    if (a < b) return -1;
    else if (a > b) return 1;
    
    return 0;
}

function sortStr(str) {
    return str.split("").sort(sortByAlphabet).join("");
}

console.log(sortStr("Wednesday"))