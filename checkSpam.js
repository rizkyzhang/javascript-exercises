// V1

function checkSpam(str) {
    return ( str.toLowerCase().includes("xxx") || str.toLowerCase().includes("viagra") );
}

// V2

function checkSpam(str) {
    if (str.toLowerCase() === "viagra" || "xxx") return "spam";
}
