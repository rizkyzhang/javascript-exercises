// Reverse and invert all integer values in a given list.

function reverseInvert(arr) {
    let filtered = arr.filter(num => Number.isInteger(num))
    
    return filtered.map(num => {
        let abs = Math.abs(num);
        let reversedInt = +(abs.toString().split("").reverse().join(""));
        
        return num >= 0 ? -reversedInt : reversedInt ;
    });
}

console.log(reverseInvert([1, 2, 3, 4, 50, 0,0]))