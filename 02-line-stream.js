const fs = require('fs');
const linestream = require('line-stream');

/**
 * Lets calculate the sum using a stream
 */
const stream = fs.createReadStream('./data').pipe(linestream()); 

let sum = 0;

stream.on('data',(line) => {
  const n = parseInt(line, 10);
  sum += n;
});

stream.on('finish', () => {
  console.log('sum', sum)
})
 
/**
 * Pretty awkward interface
 * What if I have more async operations with this data?
 * How many lines can we process in parallel?
 */