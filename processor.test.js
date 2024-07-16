const processor = require('./processor.js');

describe("transmission processor", function () {

    test("takes a string and returns an object", function () {
        let result = processor("9701::<489584872710>");
        expect(typeof result).toEqual("object");
    });

    test("throws error if '::' not found", function () {
        const expectedError = new Error('Data is invalid ; should contain "::"');
        expect(() => { processor("9701<489584872710>"); }).toThrow(expectedError);
    });

    test("returns id in object", function () {
        let result = processor("9701::<489584872710>");
        expect(result.id).not.toEqual(undefined);
    });

    test("converts id to a number", function () {
        let result = processor("9701::<489584872710>");
        expect(result.id).toEqual(9701);
    });

    test("returns rawData in object", function () {
        let result = processor("9701::<487297403495720912>");
        expect(result.rawData).not.toEqual(undefined);
    });
    test("throws error if rawData does not start with <", function () {
        const expectedError = new Error("rawData must start with '<'");
        expect(() => { processor("9701::489584872710>"); }).toThrow(expectedError);
    });

    test("throws error if rawData does not end with >", function () {
        const expectedError = new Error("rawData must end with '>'");
        expect(() => { processor("9701::<489584872710"); }).toThrow(expectedError);
    });

    test("throws error if rawData does not start with < and end with >", function () {
        const expectedError = new Error("rawData must start with '<' and end with '>'");
        expect(() => { processor("9701::489584872710"); }).toThrow(expectedError);
    });

    test("throws error if id is not a number", function () {
        const expectedError = new Error("id must be a number");
        expect(() => { processor("abcd::<489584872710>"); }).toThrow(expectedError);
    });

});