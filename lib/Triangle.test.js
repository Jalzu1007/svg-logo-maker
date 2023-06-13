const Triangle = require('./Triangle');

describe('Triangle', () => {
  describe('render', () => {
    it('should render a triangle SVG with the specified color', () => {
      const triangle = new Triangle();
      triangle.setColor('#FF0000');
      expect(triangle.render().trim().replace(/\s/g, '')).toEqual('<svg height="200" width="300"><polygon points="150,20 280,180 20,180" fill="#FF0000" /></svg>'.replace(/\s/g, ''));
    });
  });
});

module.exports = Triangle;