// let counter = 3;
let counter = { value: 3};
function incrementCounter() {
  counter.value++;
}

module.exports = { 
  counter:counter, 
  incrementCounter: incrementCounter
};