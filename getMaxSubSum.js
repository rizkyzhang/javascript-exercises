// Kadane's Algorithm V1 - O(n)

const getMaxSubSum = arr => {
	  if (!arr || arr.length === 0) return 0;
	  else if (arr.length === 1) return arr;
	
    const temp = {
        start: 0,
        sum: 0
    };
    
    const result = {
        start: 0,
        end: 0,
        sum: 0
    };
    
    let i = 0;
    
    for (let item of arr) {
        temp.sum += item;
        
        if (temp.sum > result.sum) {
            result.start = temp.start;
            result.end = i;
            result.sum = temp.sum;
        } else if (temp.sum < 0) {
            temp.sum = 0;
            temp.start = i + 1;
        }
        
        i++;
    }
    
    return result;
};

// Kadane's Algorithm V2 - O(n) (Work with negative number)

const isAllPositives = arr => arr.every(n => n > 0);

const isAllNegatives = arr => arr.every(n => n < 0);

const sum = arr => arr.reduce((prev, curr) => prev + curr, 0);

const getMaxSub = arr => Math.max(...arr);

function getMaxSubSum(arr) {
    
    if (!Array.isArray(arr) || !arr.length) return null;
    else if (arr.length === 1) return arr;
    
    if (isAllPositives(arr)) return sum(arr);
    else if (isAllNegatives(arr)) return getMaxSub(arr);
    
    const temp = {
        start: 0,
        sum : 0
    };
    
    const result = {
        start: 0,
        end: 0,
        sum: 0
    };
    
    for (let i = 0; i < arr.length; i++) {
        temp.sum += arr[i];
        
        if (temp.sum > result.sum) {
            result.start = temp.start;
            result.end = i;
            result.sum = temp.sum;
        } else if (temp.sum < 0) {
            temp.sum = 0;
            temp.start = i + 1;
        }
    }
    
    return result;
};


/*
Kadane's algorithm is assumming that the max sum of subarray is either the current sum or previous max sum + current sum. 

1. Check if the array is valid.
2. Check if all subarray is positive number, if true, sum all of it.
3. Check if all subarray is negative number, if true, return the largest number.
4. temp.start and temp.sum is 0.
5. result.start, result.end, and result.sum is 0.
6. The loop start from index 0, the loop will stop when the index is same as arr.length.
7. temp.sum is 2.
8. temp.sum is more than result.sum which is 0, assign temp.sum to result.sum, result.start = temp.start, result.end = i.
9. Increment the index number.
10. temp.sum(2) + arr[1](-1) = 1.
11. temp.sum is less than result.sum, so go to the next index.
12. temp.sum(1) + arr[2](-3) = -2.
13. temp.sum is less than 0, reset temp.sum to 0, temp.start = i(2) + 1 = 3.
14. And so on.
*/



