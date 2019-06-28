console.log(`


----- Exercise 04 - Caesar Cipher -----


`);

// code
const caeserCipher = (string, num) => {
	const originalStringArr = string.split('');
	const lowerString = string.toLowerCase();
	const stringArr = lowerString.split('');
	const alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
	let shiftedString = [];

	if ( Math.abs(num) > alphabetArr.length ) num = num % alphabetArr.length;

	stringArr.forEach(letter => {
		var letterIndex = alphabetArr.indexOf(letter);
		if (letterIndex > -1) {
			let shiftedLetterIndex = letterIndex + num;
			if (shiftedLetterIndex >= alphabetArr.length){
				shiftedLetterIndex = shiftedLetterIndex - alphabetArr.length;
			} else if (shiftedLetterIndex < 0) {
				shiftedLetterIndex = shiftedLetterIndex + alphabetArr.length;
			}

			// transform it back to uppercase
			let originalLetterIndex = stringArr.indexOf(letter);
			if(stringArr[originalLetterIndex].toUpperCase() === originalStringArr[originalLetterIndex]) {
				shiftedString.push(alphabetArr[shiftedLetterIndex].toUpperCase());
			} else {
				shiftedString.push(alphabetArr[shiftedLetterIndex]);
			}

		// every other character
		} else {
			shiftedString.push(letter);
		}

	});

	return shiftedString.join('');
}

// test
console.log(caeserCipher("Zoo Keeper", 2));
console.log(caeserCipher("Big Car.", -16));
console.log(caeserCipher("Javascript!", -900));