const greet = require('./greeting.js');

describe("greet function", function () {

    test("returns greeting message with name", function () {
        let result = greet("Yoann");
        expect(result).toBe("Hello, Yoann");
    });

    test("returns greeting message with no name", function () {
        let result = greet("");
        expect(result).toBe("Hello, there");
    });

    test("returns greeting message with no name", function () {
        let result = greet(undefined);
        expect(result).toBe("Hello, there");
    });

    test("returns greeting message with no name", function () {
        let result = greet(null);
        expect(result).toBe("Hello, there");
    });

    test("returns 'HELLO HAN' if name is all uppercase", function () {
        let result = greet("YOANN");
        expect(result).toBe("HELLO YOANN");
    });

    test("returns 'Hello, Jango and Boba' if name is an array of 2 elements", function () {
        let result = greet(["Yoann", "Dimitri"]);
        expect(result).toBe("Hello, Yoann and Dimitri");
    });

    test("returns 'Hello, Yoann, Jane, and Dimitri' if name is an array of 3 elements", function () {
        let result = greet(["Yoann", "Jane", "Dimitri"]);
        expect(result).toBe("Hello, Yoann, Jane, and Dimitri");
    });

});
