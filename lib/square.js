const Shape = require('./Shape');

class Square extends Shape {
  render() {
    const textElement = this.text ? `<text x="150" y="100" text-anchor="middle" fill="${this.textColor}">${this.text}</text>` : '';

    return `<svg height="200" width="300">
              <rect x="50" y="50" width="200" height="100" fill="${this.color}" />
              ${textElement}
            </svg>`;
  }
}

module.exports = Square;
