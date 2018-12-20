/*
Two-Sum Problem

Given an array of integers and a target sum, find all pairs that add up to the target sum. 
You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/



// Brute Force (O(n^2)) 

function twoSum(num, target) {
    let result = [];
    
    for (let i = 0; i < num.length; i++) {
        for (let j = i + 1; j < num.length; j++) {
            if (num[i] + num[j] === target) {
                result.push([num[i], num[j]]);
            }
        }
    }
    
    return result;
}



// Hash Table (O(n))

/*
1. For each element, we record the difference between our target and sum and set that as the key in an object with value true.
2. Then we loop through the elements. For the first one 7 we compute the difference between our target value 5 and it; in other words 5 - 7 which is -2. So we create a key/value pair of -2: 7, which tells us that if we see an element in the array that equals -2 then we have a match!
3. Now on to the second element 0, the difference is 5 - 0 which is 5. Our new key/value pair is 5: 0. As we continue through the array, if we find an element that equals either -2 or 5 we have a result and push it into our results array.
*/

function twoSum(num, target) {
    const map = {};
    let results = [];
    
    for (let i = 0; i < num.length; i++) {
        if (map[num[i]] !== undefined) {
            results.push([map[num[i]], num[i]]);
        } else {
            map[target - num[i]] = num[i];
        }
    }
    
    return results;
}



// This one print the index instead of the number

function twoSum(arr, target) {
    const map = {};
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (map[target - arr[i]] !== undefined) {
            result.push([map[target - arr[i]], i]);
        }
        
        map[arr[i]] = i;
    }
    
    return result;
}



// A bit faster than above solution 

/*
1. For each element, we record the difference between our target and sum and set that as the key in an object with value true.
2. Then we loop through the elements. For the first one 7 we compute the difference between our target value 5 and it; in other words 5 - 7 which is -2. So we create a key/value pair of -2: true, which tells us that if we see an element in the array that equals -2 then we have a match!
3. Now on to the second element 0, the difference is 5 - 0 which is 5. Our new key/value pair is 5: true. As we continue through the array, if we find an element that equals either -2 or 5 we have a result and push it into our results array.
*/


function twoSum(arr, target) {
    const map = {};
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]]) {
            result.push([target - arr[i], arr[i]]);
        }
        
        map[target - arr[i]] = true;
    }
    
    return result;
}


console.log(twoSum([7, 0, -4, 5, 2, 3], 5));





