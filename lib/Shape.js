class Shape {
  constructor() {
    this.color = '';
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    throw new Error('The render() method must be implemented by the subclass');
  }
}

module.exports = Shape;
