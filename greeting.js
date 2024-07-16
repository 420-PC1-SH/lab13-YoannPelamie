function greet(name) {
    if (name === null || name === "") {
        return "Hello there";
    }

    if (name === name.toUpperCase()) {
        return `HELLO ${name}`;
    }

    if (Array.isArray(name) && name.length === 2) {
        return `Hello, ${name[0]} and ${name[1]}`;
    }
    return `Hello, ${name}`;
}

module.exports = greet;
