// Best way

function outputTriangle(n) {
	for (let line = "#"; line.length <= n; line += "#") {
		console.log(line);
	}
}

// Not really a effective way 

function outputTriangle(n) {
	let triangle = "#"
	
	for (let i = 1; i <= n; i++) {
		console.log(triangle);
		triangle += "#";
	}
}

// V3

function outputTriangle(n) {
    let result = "#";
    
    while (n) {
        console.log(result);
        result += "#";
        n--;
    }
}





