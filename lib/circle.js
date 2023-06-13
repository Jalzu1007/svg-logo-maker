const Shape = require('./Shape');

class Circle extends Shape {
  constructor() {
    super();
    this.radius = 50;
  }

  render() {
    return `<svg height="200" width="300">
              <circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />
            </svg>`;
  }
}

module.exports = Circle;
