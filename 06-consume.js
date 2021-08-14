const hl = require('highland');

/**
 * All operations are lazy, and are not evaluated until we *consume* them
 */
hl([1,2,3,4,5])
  .map(n => n * 2)
  // .done(() => console.log('done'))

  /**
   * other consuming functions examples
   */
  
  // .toArray((arr) => console.log(arr))
  // .last()
  //   .toPromise(Promise)
  //   .then((result) => console.log('result', result))
