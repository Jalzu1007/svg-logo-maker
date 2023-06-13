const Circle = require('./Circle');
const Shape = require('./Shape'); 

describe('Circle', () => {
  describe('render', () => {
    it('should render a circle SVG with the specified color', () => {
      const circle = new Circle();
      circle.setColor('blue');
      expect(circle.render().trim().replace(/\s/g, '')).toEqual('<svg height="200" width="300"><circle cx="150" cy="100" r="50" fill="blue" /></svg>'.replace(/\s/g, ''));
    });
  });
});

module.exports = Circle;
