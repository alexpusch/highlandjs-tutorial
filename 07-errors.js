const hl = require('highland');

/**
 * We need to be aware of errors and error handling
 */
hl([1,2,3,4,5])
  .map(n => {
    if(n % 2 === 0) throw new Error('Even numbers not supported');
    return n;
  })
  .errors((error) => console.error(error))
  // .stopOnError((error) => console.error(error))
  .toArray((arr) => console.log(arr))
