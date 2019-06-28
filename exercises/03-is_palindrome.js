console.log(`


----- Exercise 03 - Is Palindrome -----


`);

// code
const isPalindrome = string => {
	//all lowercase
	string = string.toLowerCase();
	// transform to array
	const stringArr = string.split('');
	// all lowercase letters
	const validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

	// ignore every character which is not a letter
	let lettersArr = [];
	stringArr.forEach(letter => {
		if (validCharacters.indexOf(letter) > -1) lettersArr.push(letter);
	})

	// check if it's the same as the reserved version of it
	if (lettersArr.join('') === lettersArr.reverse().join('')) return true;
	else return false;
}

// test
console.log("isPalindrome -> ", isPalindrome("Madam I'm Adam"));
console.log("isPalindrome -> ", isPalindrome("race car"));
console.log("isPalindrome -> ", isPalindrome("not a palindrome"));