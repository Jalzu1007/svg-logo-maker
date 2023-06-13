const Shape = require('./Shape');

class Triangle extends Shape {
  render() {
    const textElement = this.text ? `<text x="150" y="100" text-anchor="middle" fill="${this.textColor}">${this.text}</text>` : '';

    return `<svg height="200" width="300">
              <polygon points="150, 20 280, 180 20, 180" fill="${this.color}" />
              ${textElement}
            </svg>`;
  }
}

module.exports = Triangle;
