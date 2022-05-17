function task1(string) {
  if ( string.length >= 1 && string.length <= 10 ) {
    return string.length
  }
  throw new Error('Invalid string length');
}

module.exports = task1;
