class Shape {
  constructor() {
    this.color = '';
    this.textColor = '';
    this.text = '';
  }

  setColor(color) {
    this.color = color;
  }

  setTextColor(textColor) {
    this.textColor = textColor;
  }

  setText(text) {
    this.text = text;
  }

  render() {
    throw new Error('The render() method must be implemented by the subclass');
  }
}

module.exports = Shape;