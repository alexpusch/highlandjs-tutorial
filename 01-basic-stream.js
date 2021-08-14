const fs = require('fs')

/**
 * Using node streams we can read the file one chuck at a time
 */
const stream = fs.createReadStream('./data');

stream.on('data', (data) => {
  console.log(data.toString())
  console.log('-------------')
});

stream.on('close', () => console.log('done'));  
