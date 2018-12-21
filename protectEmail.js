function protectEmail(email) {
    let [x, y] = email.split("@");
    const result = x.slice(0, 3) + "...@" + y;
    return result;
}


