// Iterative O(sqrt(n))

function isPrime(n) {
	  if (!Number.isInteger(n) || n < 0) return `${n} is not a positive integer`;
	
    if (n < 2) return false;
    else if (n <= 3) return true;
    else if (n % 2 === 0) return false;
    
    const sqrt = Math.sqrt(n);
    
    for (let i = 3; i <= sqrt; i += 2) {
        if (n % i === 0) return false;
    }
    
    return true;
}

// Recursive

function isPrime(n, i = 3) {
	  if (!Number.isInteger(n) || n < 0) return `${n} is not a positive integer`;
	
    if (n < 2) return false;
    else if (n <= 3) return true;
    else if (n % 2 === 0) return false;
    
    const sqrt = Math.sqrt(n);
    
    if (n % i === 0) return false;
    
    if (i >= sqrt) return true; 
    
    return isPrime(n, i + 2);
}


// Output

function primeFactorsTo(n) {
	  const prime = [];
	
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) prime.push(i);
    }
    
    return prime;
}
