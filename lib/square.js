const Shape = require('./Shape');

class Square extends Shape {
  render() {
    return `<svg height="200" width="300">
              <rect x="50" y="50" width="200" height="100" fill="${this.color}" />
            </svg>`;
  }
}

module.exports = Square;
