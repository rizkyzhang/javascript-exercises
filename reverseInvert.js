// Reverse and invert all integer values in a given list.

function reverseInvert(arr) {
    const filtered = arr.filter(num => Number.isInteger(num))
    
    return filtered.map(num => {
        const abs = Math.abs(num);
        const reversedInt = +(abs.toString().split("").reverse().join(""));
        
        return num >= 0 ? -reversedInt : reversedInt ;
    });
}

console.log(reverseInvert([1, 2, 3, 4, 50, 0,0]))
