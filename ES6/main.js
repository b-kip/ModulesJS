// import logger from './logger.js';
// import * as loggerContainer from './logger.js';
// const {logger} = loggerContainer;
import { logger } from './logger.js';
import * as lib from './lib.js'; // namespace import
// import * as reexport from './reexport.js';

// console.log(reexport);
console.log('MODULE: main');
console.log('Count default', lib.default);

console.log( 'Count namespaced',lib.counter); // counter === 4 because logger has been executed.
lib.incrementCounter();
console.log(lib.counter); // counter === 5.
loadLogger(lib.counter); // counter = 5


function loadLogger(value) {
  // import logger from './logger.js'; // should be at top level
  // imports are always hoisted
  logger(value)
}
