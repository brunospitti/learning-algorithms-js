console.log(`


----- Exercise 05 - Reverse Words -----


`);

// code
const reverseWords = textToReverse => {
	const textArr = textToReverse.split(' ');
	const reverseThis = word => {
		let wordArr = word.split('');
		let reversedWordArr = [];
		wordArr.map(letter => reversedWordArr.unshift(letter));
		return reversedWordArr.join('');
	}
	let reversedArr = textArr.map(word => reverseThis(word));
	return reversedArr.join(' ');
}

// test
console.log(reverseWords("this is a text to reverse"));
console.log(reverseWords("Coding Javascript!"));