const calculator = require('./task-3');
const calc = new calculator();

describe('Addition', () => {
  it('1 + 3 = 4', () => expect(calc.add(1, 3)).toBe(4));
  it('5 + 3 = 8', () => expect(calc.add(5, 3)).toBe(8));
  it('7 + 3 = 10', () => expect(calc.add(7, 3)).toBe(10));
});

describe('Subraction', () => {
  it('7 - 3 = 4', () => expect(calc.subtract(7, 3)).toBe(4));
  it('5 - 3 = 2', () => expect(calc.subtract(5, 3)).toBe(2));
  it('3 - 3 = 0', () => expect(calc.subtract(3, 3)).toBe(0));
});

describe('Division', () => {
  it('6 / 3 = 2', () => expect(calc.divide(6, 3)).toBe(2));
  it('9 / 3 = 3', () => expect(calc.divide(9, 3)).toBe(3));
  it('12 / 3 = 4', () => expect(calc.divide(12, 3)).toBe(4));
});

describe('Multiplication', () => {
  it('6 * 3 = 18', () => expect(calc.multiply(6, 3)).toBe(18));
  it('7 * 3 = 21', () => expect(calc.multiply(7, 3)).toBe(21));
  it('8 * 3 = 24', () => expect(calc.multiply(8, 3)).toBe(24));
});
