console.log(`


----- Exercise 10 - Fibonacci -----


`);

// code
const fibonacci = pos => {
  if (pos <= 2){
    return 1;
  }

  return fibonacci(pos - 1) + fibonacci(pos - 2);
}

// test
const testNumber10 = 7;
console.log(`the number on fibonacci sequence at position ${testNumber10} is ${fibonacci(testNumber10)}`);