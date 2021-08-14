const hl = require('highland');
const fs = require('fs');
const linestream = require('line-stream');

/**
 * Lets add another async operation on the stream values
 */

function asyncMultiply(n) {
  return new Promise((resolve) => setTimeout(() => resolve(n * 2), 200));
}

const stream = hl(fs.createReadStream('./data').pipe(linestream())); 

stream
  .map((data) => parseInt(data, 10))
  .tap(console.log)
  .map((n) => hl(asyncMultiply(n)))
  .sequence()
  // .parallel(8)
  .reduce(0, (result, n) => result + n)
  .toCallback((err, result) => console.log('sum', result));
