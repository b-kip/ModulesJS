import { logger } from './logger.js';
// import logger from './logger.js';
// import * as loggerContainer from './logger.js';
// const {logger} = loggerContainer;
// console.log(typeof logger);

console.log('MODULE: lib');
var counter;
// var counter = 3;
function incrementCounter() {
  console.log('Before increment', counter);
  counter++;
  console.log("Lib incrementCounter")
  logger(counter);
}

function init() {
  console.log('MODULE: lib -> init')
  counter = 3;
}

init()
// export default const number = 2; // variable declarations can't be used in default exports
// export default function(){ } // allowed.
export default counter+1; // expressions that create values

console.log('Lib exports loaded');
export { counter, incrementCounter };