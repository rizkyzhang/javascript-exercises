// Iterative

function primeFactorsOf(n, minOrMax) {
	  if (!Number.isInteger(n) && n < 0) return `${n} is not a positive integer`
	  
    let factors = [];
    
    for (let i = 2; i <= n; i++) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }
    
    if (minOrMax === "min") return Math.min(...factors);
    else if (minOrMax === "max") return Math.max(...factors);
    
    return factors.join(" * ");
}



// Recursive

/*
i++ increments the variable, but return the old value.
So the recursive call uses the old value, which means you keep calling recursively with the same value, and never hit the limit that stops recursing.
This will cause "Maximum call stack size exceeded'' error.
You need to use ++i, which increments the variable and returns the new value.
Actually, there's no reason to increment the variable at all, since you never uses it again in that function. Just use i + 1.
*/

function primeFactorsOf(n, factors = [], i = 2) {
	  if (!Number.isInteger(n) && n < 0) return `${n} is not a positive integer`
	
    if (n === 1) return factors.join(" * ");
    
    if (n % i === 0) {
        factors.push(i);
        n /= i;
        return primeFactorsOf(n, factors, i);
    }
    
    return primeFactorsOf(n, factors, i + 1); // See note above
}

