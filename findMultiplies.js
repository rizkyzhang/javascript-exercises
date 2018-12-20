// Hard way

function findMultiples(integer, limit) {
    const arr = [];
    let temp = 0;
    let i = 1;
    
    while (true) {
        temp = integer * i;
        if (temp > limit) break;
        arr.push(temp);
        ++i;
    }
    
    return arr;
}


// Simple way

function findMultiples(int, limit) {
    const arr = [];
    
    for (let i = 1 ; int * i <= limit; i++) {
        arr.push(int * i);
    }
    
    return arr;
}


// Simplest way

function findMultiples(int,limit){
    const result = []
    
    for (let i = int; i <= limit ; i += int) {
        result.push(i)
    }
    
    return result
}
