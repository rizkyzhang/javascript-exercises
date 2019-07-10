const getStrLength = str => !str ? 0 : 1 + getStrLength(str.slice(1));
