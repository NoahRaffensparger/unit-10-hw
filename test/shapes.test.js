const generate = require('../lib/shapes');

describe('Generate', () => {
  describe('generateSVG', () => {
    it('should take in an object and generate a SVG file', () => {
        const shape = {
            shape: 'Triangle',
            text: 'HBO',
            textColor: 'blue',
            shapeColor: 'red'
          }
        const expected = `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
  <polygon points="150, 18 244, 182 56, 182" fill="red" />
  
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">HBO</text>

</svg>`
      expect(generate.generateSVG(shape)).toBe(expected);
    });
  });
})
