const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
  test('render method should return the SVG string with the correct color', () => {
    const triangle = new Triangle('blue');
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});

describe('Circle', () => {
  test('render method should return the SVG string with the correct color', () => {
    const circle = new Circle('green');
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
  });
});

describe('Square', () => {
  test('render method should return the SVG string with the correct color', () => {
    const square = new Square('red');
    expect(square.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="red" />');
  });
});

// lib/shapes.test.js
const { Triangle, Circle, Square } = require("./shapes");

describe("Triangle", () => {
  it("should render a triangle SVG element with the specified color", () => {
    const shape = new Triangle();
    shape.color = "blue";
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});

// Write similar tests for Circle and Square classes
