function setFirstLetterUpCase(str) {
	if (!str) return; //Test empty string
	console.log( str[0].toUpperCase() + str.slice(1) );
}


