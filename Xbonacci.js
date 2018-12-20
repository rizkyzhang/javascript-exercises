/*
Time to expand the family a little more: think of a Quadribonacci starting with a signature of 4 elements and each following element is the sum of the 4 previous, a Pentabonacci (well Cinquebonacci would probably sound a bit more italian, but it would also sound really awful) with a signature of 5 elements and each following element is the sum of the 5 previous, and so on.
    
Well, guess what? You have to build a Xbonacci function that takes a signature of X elements - and remember each next element is the sum of the last X elements - and returns the first n elements of the so seeded sequence.
        
xbonacci {1,1,1,1} 10 = {1,1,1,1,4,7,13,25,49,94}
xbonacci {0,0,0,0,1} 10 = {0,0,0,0,1,1,2,4,8,16}
xbonacci {1,0,0,0,0,0,1} 10 = {1,0,0,0,0,0,1,2,3,6}
xbonacci {1,1} produces the Fibonacci sequence
*/

/*
How it works: 
1. Spread all number inside signature array to result array.
2. x will determine if we are dealing with fibonacci or tribomacci and so on. x is signature.length.
3. Create a loop with index = x, in this case index is 4, we want to find xbonacci number in index 4. 
4. The loop will go on until index is more than n, n is first n xbonacci number we want to find.
5. Now create arraySum function outside xbonacci function, this function will sum 4 number to get next number.
6. Back to the xbonacci function, create prevSum variable inside the loop, assign it with arraySum function.
7. The argument of arraySum is 4 number inside result array, we are going to get it with slice method.
8. result.slice(i - x, i) => result.slice(4 - 4, 4) => it mean take 4 number from index 0 to index 3 => [1,2,3,4].
9. Inside arraySum function, reduce method will sum the numbers and return the result back to prevSum variable.
10. The result will be pushed into result array => [1,2,3,4,10]
11. Increment i by 1, now i is 5. This ensure we get 4 prev number from number we want to find.
12. i still < 10, the loop will go on.
13. result.slice(5 - 4, 5) => result.slice(1, 5) => it mean we take 4 number from index 1 to index 4 => [2,3,4,10].
14. And so on until i > 10, after the loop end, print the first 10 Quadribonacci number.
*/



function Xbonacci(signature, n) {
if (!Array.isArray(signature) || !signature.length) return null;    
    
const result = [...signature];
    
const x = signature.length;
   
    for (let i = x; i < n; i++) {
        const prevSum = arraySum(result.slice(i - x, i));
        
        result.push(prevSum);
        
    }
    
    return result.slice(0, n);
};

const arraySum = arr => arr.reduce((prev, curr) => prev + curr);
 
console.log(Xbonacci([1,2,3,4,],10))
