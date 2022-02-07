import * as lib from './lib.js'; // namespace import
import * as reexport from './reexport.js';
import logger from './logger.js';

console.log(reexport);

console.log('Count', lib.default);

console.log(lib.counter); // counter === 4 because logger has been executed.
lib.incrementCounter();
console.log(lib.counter); // counter === 5.
loadLogger(); // counter = 5


function loadLogger() {
  // import logger from './logger.js'; // should be at top level
  logger()
}
