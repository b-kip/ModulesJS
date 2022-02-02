// import { counter, incrementCounter } from './lib.js';
import logger from './logger.js';

// allows be 4. Exported an expression rather than variable
// that can be pointed at.
console.log('Count', count);

console.log(counter); // counter === 4 because logger has been executed.
incrementCounter();
console.log(counter); // counter === 5.
loadLogger(); // counter = 5

// allows be 4. Exported an expression rather than variable
// that can be pointed at.
console.log('Count', count);

function loadLogger() {
  // import logger from './logger.js'; // should be at top level
  logger()
}

// imports are hoisted.
import count from './lib.js';
// count = 3; // Error: assignment to a constant variable.