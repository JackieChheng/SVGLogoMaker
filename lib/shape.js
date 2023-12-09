const fs = require('fs');

class Shape {
    constructor(color, text) {    
        this.color = color;
        this.text = this.validateText(text);
        this.data = [
            '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">',
            '',
            `<text x="150" y="125" font-size="45" text-anchor="middle" fill="white">${this.text}</text>`,
            '</svg>'
        ];
    }

    validateText(text) {
        if (text.length !== 3) {
            throw new Error("Must enter 3 characters exactly");
        }
        return text;
    }

    setColor(color) {
        this.color = color;
    }

    setText(text) {
        this.text = this.validateText(text);
    }

    create() {
        fs.writeFile('logo.svg', this.data.join('\n'), (err) => err && console.error(err));
        console.log('Generated logo.svg');
    }
}

class Circle extends Shape {
    render() {
        this.data[1] = `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
        this.create();
    }
}

class Square extends Shape {
    render() {
        this.data[1] = `<rect x="100" y="50" width="100" height="100" fill="${this.color}"/>`;
        this.create();
    }
}

class Triangle extends Shape {
    render() {
        this.data[1] = `<polygon points="150, 20 50, 150 250, 150" fill="${this.color}"/>`;
        this.create();
    }
}

module.exports = {
    Circle,
    Square,
    Triangle,
};
