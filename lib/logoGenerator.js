const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./shapes');

const generateLogo = async () => {
  try {
    const { text, textColor, shape, shapeColor } = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter the text for the logo (up to 3 characters):',
        validate: (input) => /^[a-zA-Z0-9]{1,3}$/.test(input),
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (color keyword or hexadecimal number):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (color keyword or hexadecimal number):',
      },
    ]);

    let shapeObj;
    switch (shape) {
      case 'circle':
        shapeObj = new Circle(shapeColor);
        break;
      case 'triangle':
        shapeObj= new Triangle(shapeColor);
        break;
      case 'square':
        shapeObj = new Square(shapeColor);
        break;
    }

    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${shape.render()}
      <text x="150" y="130" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`;

    fs.writeFileSync('examples/logo.svg', svgContent);

    console.log('Generated logo.svg');
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

module.exports = generateLogo;
