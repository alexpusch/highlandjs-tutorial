const hl = require('highland');
const fs = require('fs');
const linestream = require('line-stream');

/**
 * Enters highland.js
 */
const stream = hl(fs.createReadStream('./data').pipe(linestream())); 

stream
  .map((data) => parseInt(data, 10))
  .reduce(0, (result, n) => result + n)
  .toCallback((err, result) => console.log('sum', result));
