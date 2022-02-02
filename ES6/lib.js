let counter = 3;
function incrementCounter() {
  counter++;
}

// export default const number = 2; // variable declarations can't be used in default exports
// export default function(){ } // allowed.
export default counter+1; // expressions that create values

export { counter, incrementCounter };