function abbrevName(name) {
    return name
                .split(' ')
                .map((name, index) => index === 0 ? name : name[0].toUpperCase())
                .join('.');
}


