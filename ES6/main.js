// import { counter, incrementCounter } from './lib.js';
import * as lib from './lib.js'; // namespace import
import logger from './logger.js';

// console.log(lib);

// allows be 4. Exported an expression rather than variable
// that can be pointed at.
console.log('Count', lib.default);

console.log(lib.counter); // counter === 4 because logger has been executed.
lib.incrementCounter();
console.log(lib.counter); // counter === 5.
loadLogger(); // counter = 5

// allows be 4. Exported an expression rather than variable
// that can be pointed at.
// console.log('Count', count);

function loadLogger() {
  // import logger from './logger.js'; // should be at top level
  logger()
}

// imports are hoisted.
// import count from './lib.js';
// count = 3; // Error: assignment to a constant variable.