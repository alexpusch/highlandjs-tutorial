const hl = require('highland');

/**
 * We can rate limit a stream
 */
hl([1,2,3,4,5])
  .map(n => {
    console.log(n)
    return n;
  })
  .ratelimit(2, 1000)
  .toArray((arr) => console.log(arr))


/**
 * We can merge several streams into one
 */
hl([
  hl([1,2,3,4,5]),
  hl([6,8,9,10])]
).merge()
  .tap(console.log)
  .done(() => {})


/**
 * We can fork a stream and read its values multiple times
 */
const stream = hl([1,2,3,4,5]);
const fork1 = stream.fork();
const fork2 = stream.fork();

fork1
  .tap(n => console.log('fork 1', n))
  .done(() => {})

fork2
  .tap(n => console.log('fork 2', n))
  .done(() => {})