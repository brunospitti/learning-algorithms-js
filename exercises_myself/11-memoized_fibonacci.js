console.log(`


----- Exercise 11 - Memoized Fibonacci -----


`);

// code

const memoize = fn => {
  let cache = {};
  return function(...args){
    if(!cache[args]){
      cache[args] = fn.apply(this, args)
    }
    return cache[args];
  }
}

function fib (pos) {
  if(pos <= 2){
    return 1
  }

  return fib(pos-1) + fib(pos-2);
}

fib = memoize(fib)

// test
console.log(fib(102));