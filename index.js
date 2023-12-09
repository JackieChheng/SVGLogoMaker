const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js');

function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter three characters for your logo:'
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Choose a shape:',
                choices: ['Triangle', 'Square', 'Circle']
            },
            {
                type: 'input',
                name: 'color',
                message: 'Enter the background color (keyword or #hex):',
            }
        ])
        .then(({ text, shape, color }) => {
            validateInput(text);
            const logo = createLogo(shape, color, text);
            logo.render();
        })
        .catch((error) => console.error(error.message));
}

function validateInput(text) {
    if (text.length !== 3) {
        throw new Error('Must enter exactly 3 characters');
    }
}

function createLogo(shape, color, text) {
    switch (shape.toLowerCase()) {
        case 'triangle':
            return new shapes.Triangle(color, text);
        case 'square':
            return new shapes.Square(color, text);
        case 'circle':
            return new shapes.Circle(color, text);
        default:
            throw new Error('Invalid shape');
    }
}

init();
