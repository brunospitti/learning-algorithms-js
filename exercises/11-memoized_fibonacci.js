console.log(`


----- Exercise 11 - Memoized Fibonacci -----


`);

// code
const memoFibo = (pos, cache) => {
	cache = cache || [];
	if (cache[pos]) return cache[pos];
	else{
		if (pos <= 2) {
			return 1;
		} else {
			cache[pos] = memoFibo(pos - 1, cache) + memoFibo(pos - 2, cache);
		}
	}
	return cache[pos];
}

// test
console.log(memoFibo(92));