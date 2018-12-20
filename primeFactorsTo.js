// Iterative O(sqrt(n))

function isPrime(n) {
    if (n < 2) return false;
    else if (n <= 3) return true;
    else if (n % 2 === 0 || n % 3 === 0) return false;
    
    const limit = Math.floor(Math.sqrt(n));
    
    for (let i = 5; i <= limit; i += 2) {
        if (n % i === 0) return false;
    }
    
    return true;
}

// Recursive

function isPrime(n, i = 5) {
    if (n < 2) return false;
    else if (n <= 3) return true;
    else if (n % 2 === 0 || n % 3 === 0) return false;
    
    const limit = Math.floor(Math.sqrt(n))
    
    if (n % i === 0) return false;
    
    if (i >= limit) return true; 
    
    return isPrime(n, i += 2);
}


function primeFactorsTo(n) {
	  const prime = [];
	
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) prime.push(i);
    }
    
    return prime;
}

        
