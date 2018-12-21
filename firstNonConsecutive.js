/*
Your task is to find the first element of an array that is not consecutive.
E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non consecutive number.
If the whole array is consecutive then return null
The array will always have at least 2 elements and all the elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
*/

// V1

function firstNonConsecutive(arr) {
    for (let i = 1; i <= arr.length; i++) {
        if (i === arr.length) return null;
        
        if (arr[i] - arr[i - 1] !== 1) {
            return arr[i];
        }
    }
}



// V2

function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
        if (arr[i] + 1 !== arr[i + 1]) {
            return arr[i + 1]
        }
    }
    
    return null
}



// V3 - Best way

function firstNonConsecutive (arr) {
    const result = arr.find((num, i) => num !== i + arr[0]);
    
    return (result !== undefined) ? result : null;
}


