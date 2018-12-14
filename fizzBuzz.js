/*
1. Print all number from 1 to 100;
2. If diviseable by 3, print "Fizz"
3. If diviseable by 5, print "Buzz"
4. If diviseable by 3 and 5, print "FizzBuzz"
*/

// V1

function fizzBuzz() {
	for (let i = 1; i <= 100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log("FizzBuzz");
		} else if (i % 3 === 0) {
			console.log("Fizz");
		} else if (i % 5 === 0) {
			console.log("Buzz")
		}
		
		console.log(i); 
	}
}

// V2

function fizzBuzz() {
    for (let i = 1; i <= 100; n++) {
        let output = "";
        if (i % 3 === 0) output += "Fizz";
        if (i % 5 === 0) output += "Buzz";
        console.log(output || i);
    }
}
