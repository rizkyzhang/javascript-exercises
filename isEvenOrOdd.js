// Using remainder operator

function isEvenOrOdd(n) {
    if (!Number.isInteger(n)) return `${n} is not an integer`;
    
    if (n % 2 === 0) return "even";
    return "odd";
}

// Recursive 

function isEvenOrOdd(n) {
    if (!Number.isInteger(n)) return `${n} is not an integer`;
    
    if (n === 0) return "even";
    else if (n === 1) return "odd";
    
    return isEvenOrOdd(n - 2);
}

// Using bitwise operator

const isEvenOrOdds = n => (n & 1) ? "odd" : "even";

// Output

function outputEvenNumTo(n) {
	  const evenNum = [];

    for (let i = 0; i <= n; i += 2) {
        evenNum.push(i);
    }
    
    return evenNum;
}


function outputOddNumTo(n) {
	  const oddNum = [];

    for (let i = 1; i <= n; i += 2) {
        oddNum.push(i);
    }
    
    return oddNum;
}

