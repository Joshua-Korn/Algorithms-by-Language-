function createHelloWorld() {
  return function() {
    return "Hello World";
  };
}

// Usage:
const helloFunction = createHelloWorld();
console.log(helloFunction()); // Output: "Hello World"
