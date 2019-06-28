console.log(`


----- Exercise 06 - Reverse Array In Place -----


`);

// code
const reverseArray = arr => {
	for(let i = 0; i < arr.length/2; i++){
		let item = arr[i];
		let counterItem = arr[arr.length - 1 - i];
		arr[i] = counterItem;
		arr[arr.length - 1 - i] = item;
	}
	return arr;
}

// test
let arrayToBeReversed1 = ['Banana', 'Apple', 'Monkey', 'Light'];
let arrayToBeReversed2 = ['1', '2', '3', '4', '5', '6', '7'];

reverseArray(arrayToBeReversed1);
reverseArray(arrayToBeReversed2);

console.log(arrayToBeReversed1);
console.log(arrayToBeReversed2);