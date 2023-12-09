const shape = require('../lib/shapes');

describe('Shape', () => {
    describe('Construction', () => {
        test('should initialize a new shape with specified color', () => {
            const circle = new shape.Circle('red', 'abc');
            expect(circle.color).toEqual('red');
        });

        test('should initialize a new shape with specified text', () => {
            const circle = new shape.Circle('red', 'abc');
            expect(circle.text).toEqual('abc');
        });

        test('setColor method should update the color property', () => {
            const square = new shape.Square('blue', 'xyz');
            square.setColor('red');
            expect(square.color).toEqual('red');
        });

        test('setText method should update the text property', () => {
            const square = new shape.Square('blue', 'xyz');
            square.setText('lol');
            expect(square.text).toEqual('lol');
        });

        test('should throw an error if text length is greater than 3 characters', () => {
            const triangle = new shape.Triangle('orange', 'jkl');
            expect(() => { triangle.setText('1234'); }).toThrow();
        });

        test('should create data for rendering the shape properly', () => {
            const square = new shape.Square('purple', 'aaa');
            const expectedData = [
                `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`,
                `<rect x="100" y="50" width="100" height="100" fill="${square.color}"/>`,
                `<text x="150" y="125" font-size="45" text-anchor="middle" fill="white">${square.text}</text>`,
                '</svg>'
            ];
            square.render();
            expect(square.data).toEqual(expectedData);
        });
    });
});
