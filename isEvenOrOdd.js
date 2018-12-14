// Using remainder operaror

function isEvenOrOdd(n) {
    if (!Number.isInteger(n)) return console.log(`${n} is not an integer number`);
    
    if (n % 2 === 0) return "even";
    else return "odd";
}

// Recursive 

function isEvenOrOdd(n) {
    if (!Number.isInteger(n)) return console.log(`${n} is not an integer number`);
    
    if (n === 0) return "even";
    else if (n === 1) return "odd";
    
    return isEvenOrOdd(n - 2);
}



function outputEvenNumTo(n) {
    for (let i = 0; i <= n; i++) {
        if (isEvenOrOdd(i) === "even") console.log(i);
    }
}



function outputOddNumTo(n) {
    for (let i = 0; i <= n; i++) {
        if (isEvenOrOdd(i) === "odd") console.log(i);
    }
}


