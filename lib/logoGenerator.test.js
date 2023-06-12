const fs = require('fs');
const { execSync } = require('child_process');

describe('Logo Generator', () => {
  beforeEach(() => {
    fs.existsSync = jest.fn(() => false);
    fs.writeFileSync = jest.fn();
    console.log = jest.fn();
    console.error = jest.fn();
    execSync('rm -f logo.svg');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('logoGenerator should generate a logo.svg file with the given input', async () => {
    jest.spyOn(fs, 'writeFileSync');

    const mockInquirerPrompt = jest.fn().mockResolvedValueOnce({
      text: 'SVG',
      textColor: 'white',
      shape: 'circle',
      shapeColor: 'green',
    });
    jest.doMock('inquirer', () => ({ prompt: mockInquirerPrompt }));

    require('./logoGenerator');

    expect(fs.writeFileSync).toHaveBeenCalledWith(
      'logo.svg',
      expect.stringContaining('<circle cx="150" cy="100" r="80" fill="green" />')
    );
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      'logo.svg',
      expect.stringContaining('<text x="150" y="130" text-anchor="middle" fill="white">SVG</text>')
    );
    expect(console.log).toHaveBeenCalledWith('Generated logo.svg');
  });

  test('logoGenerator should log an error if an error occurs', async () => {
    jest.spyOn(console, 'error');

    const mockInquirerPrompt = jest.fn().mockRejectedValueOnce('Some error');
    jest.doMock('inquirer', () => ({ prompt: mockInquirerPrompt }));

    require('./logoGenerator');

    expect(console.error).toHaveBeenCalledWith('An error occurred:', 'Some error');
  });
});