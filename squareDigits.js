/*
Square every digit of a number.
For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.
Note: The function accepts an integer and returns an integer
*/


function squareDigits(num){
    if (!Number.isInteger(num)) return;
    
    let result = num
        .toString()
        .split("")
        .map(num => num * num)
        .join("");
    
    return +result;
}

console.log(squareDigits(1755584));
