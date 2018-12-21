function setFirstLetterUpCase(str) {
	if (!str) return; //Test empty string
	return str[0].toUpperCase() + str.slice(1);
}


