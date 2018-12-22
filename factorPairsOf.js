function factorPairsOf(n) {
	  if (n === 1) return 1;
	
    const factors = [[`1 * ${n}`]];
    const isEven = n % 2 === 0;
    const sqrt = Math.sqrt(n);
    
    let currFactor = isEven ? 2 : 3;
    let increment = isEven ? 1 : 2; // if n is even, increment the divisor by 1, else increment it by 2, because if n is odd, we only need to divide it with odd number.
    
    
    for (currFactor; currFactor <= sqrt; currFactor += increment) {
        if (n % currFactor === 0) {
        	   let currFactorPair = n / currFactor;
            factors.push([`${currFactor} * ${currFactorPair}`])
        }
    }
    
    return factors;
}



