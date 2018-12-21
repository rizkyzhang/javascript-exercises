/*
Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

alternative text

#Hint: See Fibonacci sequence

#Ref: http://oeis.org/A000045

The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.
    
perimeter(5)  should return 80
perimeter(7)  should return 216
*/


function perimeter(n) {
	  if (n === 0) return 4;
	
    const arr = [1, 1];
    
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    
    return 4 * arr.reduce((prev, curr) => prev + curr, 0)
}

