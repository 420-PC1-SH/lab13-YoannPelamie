function greet(name) {
    if (name === null || name === "") {
        return "Hello there";
    }

    if (name === name.toUpperCase()) {
        return `HELLO ${name}`;
    }

    if (Array.isArray(name)) {
        if (name.length === 2) {
            return `Hello, ${name[0]} and ${name[1]}`;
        } else if (name.length >= 3) {
            let lastElement = name.pop(); // Remove and get the last element
            return `Hello, ${name.join(', ')}, and ${lastElement}`;
        }
    }
    return `Hello, ${name}`;
}

module.exports = greet;
