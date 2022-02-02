let counter = require('./lib.cjs').counter;
const incrementCounter = require('./lib.cjs').incrementCounter;

console.log(counter.value);
// console.log( typeof incrementCounter);
incrementCounter();
console.log(counter.value);
// Assignment to connstant variable.
// counter = 0;
