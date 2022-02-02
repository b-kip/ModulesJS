import { counter, incrementCounter } from './lib.js';

incrementCounter();
console.log('Logger');
// console.log(counter);
export default () => { console.log('Logger', counter)}