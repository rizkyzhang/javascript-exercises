function parameterizeStr(str) {
    return str
                .trim()
                .toLowerCase()
                .split(" ")
                .join("-");
}

console.log(parameterizeStr("Robin Singh from USA."))