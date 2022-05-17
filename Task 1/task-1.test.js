const stringLength = require('./task-1');

it('Length', () =>
  expect(stringLength('happy')).toBe(5));

it('"" Empty string error', () =>
  expect(() => stringLength('')).toThrow());

it('More than 10 characters', () =>
  expect(() => stringLength('supercalifragilisticexpialidocious ')).toThrow());

