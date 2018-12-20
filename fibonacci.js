// Output fibonacci number until index n



// Iterative Solution V1 - Forward (O(n))

function fib(n) {
    const arr = [0, 1];
    const mapper = {};
    let counter = 0;
    
    for (let i = 2; i <= n; i++) {
        let a = arr[i - 1]; 
        let b = arr[i - 2];
        arr.push(a + b);
    }
    
    for (let elem in arr) {
        mapper[counter] = arr[elem];
        counter++;
    }
    
    return console.log(mapper);
}




// Iterative Solution V1 Modified - Forward ( O(n) )
function fib(n) {
    const arr = [0, 1];
    const mapper = {};
    let counter = 0;
    
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    
     for (let elem in arr) {
        mapper[counter] = arr[elem];
        counter++;
    }
    
    return console.log(mapper);
}



// Iterative Solution V1 - Backward (O(n))

function fib(n) {
    if (n < 2) return console.log(n);
    
    let [a, b] = [0, 1];
    
    while (n-- > 1) {
        [a, b] = [b, a + b];
    }
    
    return console.log(b);
}




// Iterative Solution V2 - Forward  ((O(n))
/*
This method has you work upwards from 0 to n (instead of downwards from n to 0) 
and store the results in three variables as you go. 
It makes things faster since you don't have to find 
fibbonacci(n-1) twice, 
fibbonacci(n-2) three times, etc.
*/

function fib(n) {
    if (n < 2) return console.log(n);
    
    let a = 0;
    let b = 1;
    let c;
    
    for(let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    
    return console.log(c);
}




// Iterative Solution V2 - Forward Mod With Array ((O(n))
// Faster
	
function fib(n) {
    
    let a = 0;
    let b = 1;
    let c;
    const arr = [0, 1]
    
    for(let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
        arr.push(c);
    }
    
    return console.log(arr);
}





// Iterative V2 Solution - Backward (O(n)

function fib(n) {
    let a;
    let b = 0;
    let c = 1;
    
    for (let i = 2; i <= n; i++) {
        a = b;
        b = c;
        c = a + b;
    }
    
    return console.log(c);
}





// Recursive Solution V1 (O(2^n))

function fib(n) {
    if (n < 2) {
        return n;
    }
    
    return fib(n - 1) + fib(n - 2);
}





// Recursive Solution V2 (O(2^n))

const fib = (n) => n < 2 ? n : fib(n-1) + fib(n-2);





// Recursive Solution V3 (O(n))

const fib = _.memoize((n)) => n < 2 ? n : fib(n-1) + fib(n-2);





// Generator Solution ( O(n) when all numbers are calculated )

function* fib(n) {
    [a, b] = [0, 1];
    
    while (true) {
        yield a;
        
        [a, b] = [b, a + b];
    }
}

// instantiate the fib generator
const fib_gen = fib();

// get first 10 numbers
for (let i = 0; i < 10; i++) {
    console.log(fib_gen.next().value);
}





// Tail Call optimization
function fib(n, a=1, b=0) {
    if (n === 0) {
        return b;
    } else {
        return fib(n-1, b, a+b);
    }
}





// ES6 Tail Call optimization
const fib = (n, a = 1, b = 0) => (n === 0) ? b : fib(n - 1, a + b, a);





