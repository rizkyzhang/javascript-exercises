function truncate(str, maxLength) {
	if (str.length > maxLength) {
		console.log(str.slice(0, maxLength) + "...");
	}
}

truncate("Hello, jo", 5);