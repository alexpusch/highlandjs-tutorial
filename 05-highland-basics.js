const hl = require('highland');

/**
 * supports arrays as values source
 */
hl([1,2,3,4])

/**
 * supports promises. This will create a stream with a single value - the promise resolve value
 */
hl(axios.get('http://example.com'))

/**
 * works best with node streams
 */
hl(fs.createReadStream('./file'))

