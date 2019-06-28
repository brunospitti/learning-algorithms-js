console.log(`


----- Exercise 12 - Sieve of Eratosthenes -----


`);

// code
const sieveOfEra = num => {
	let primes = [];
	for(let i = 0; i < num; i++){
		primes.push(true)
	}

	primes[0] = false
	primes[1] = false

	for(let i = 2; i < Math.sqrt(num); i++){
		for(let j = 2; (j * i) < num; j++) {
			primes[i * j] = false;
		}
	}

	let result = [];
	for (let i = 0; i < primes.length; i++){
		if (primes[i]) result.push(i);
	}

	return result
}

// test
console.log(sieveOfEra(200))