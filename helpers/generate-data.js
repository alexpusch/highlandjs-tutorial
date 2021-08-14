const fs = require('fs/promises')

async function batch(n) {
  const output = []
  for(let i = 0; i < n ; i++){
    const number = Math.round(Math.random() * 1000);

    output.push(number);
  }

  const str = output.join('\n')
  await fs.appendFile('./data', str)
}

async function run(linesInBatch, numBatches){
  for(let i = 0; i < linesInBatch; i++) {
    await batch(numBatches)
  }
}

run(1000, 10000).then(() => console.log('done')).catch(console.log)