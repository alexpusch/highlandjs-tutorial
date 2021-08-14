const fs = require('fs');

/**
 * Lets read a large file 
 */
fs.readFile('./data', (err, content) => {
  const sum = content.toString()
    .split('\n')
    .map((data) => parseInt(data, 10))
    .reduce((result, n) => result + n, 0)

  console.log(sum)
})

/**
 * this will load the entire data into memory. What if it's too much?
 * node --max-old-space-size=10 00-read-file.js
 */