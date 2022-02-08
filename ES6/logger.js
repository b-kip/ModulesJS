import { counter, incrementCounter } from './lib.js';

console.log('MODULE: Logger');

function logger(value) {
  console.log('Logger', value);
}

incrementCounter();


console.log('Logger exports added');
export { logger };
// export default logger;