const Square = require('./Square');

describe('Square', () => {
  describe('render', () => {
    it('should render a square SVG with the specified color', () => {
      const square = new Square();
      square.setColor('green');
      expect(square.render().trim().replace(/\s/g, '')).toEqual('<svg height="200" width="300"><rect x="50" y="50" width="200" height="100" fill="green" /></svg>'.replace(/\s/g, ''));
    });
  });
});

module.exports = Square;