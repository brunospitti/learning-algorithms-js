console.log(`


----- Exercise 08 - Two Sum -----


`);

// code

// One for loop, consisting on a O(n) function.
// More performant
const twoSumOn = (arr, sum) => {
	let finalArr = [];
	let hashTable = [];

	for(let num of arr){
		let counterPart = sum - num;
		if(hashTable.indexOf(counterPart) > -1){
			finalArr.push([num, counterPart]);
		}
		hashTable.push(num);
	}
	return finalArr;
}

// Two for loops, consisting on a O(n²) function.
// Less performant
const twoSumOn2 = (arr, sum) => {
	let finalArr = [];
	for(let i = 0; i < arr.length; i++){
		let firstNum = arr[i];
		let secondNum;
		for(let u = i; u < arr.length; u++){
			secondNum = arr[u];
			if (firstNum + secondNum === sum) {
				finalArr.push([firstNum, secondNum]);
			}
		}
	}
	return finalArr;
}

// test
let arrOne08 = [1,10,6,5,8,4,3,6];
let arrTwo08 = [1,6,4,5,3,3];
let arrThree08 = [40,11,19,17,-12];

console.log("twoSumOn | arrOne08 -> ", twoSumOn(arrOne08,11));
console.log("twoSumOn2 | arrOne08 -> ", twoSumOn2(arrOne08,11));

console.log("twoSumOn | arrTwo08 -> ", twoSumOn(arrTwo08,7));
console.log("twoSumOn2 | arrTwo08 -> ", twoSumOn2(arrTwo08,7));

console.log("twoSumOn | arrThree08 -> ", twoSumOn(arrThree08,28));
console.log("twoSumOn2 | arrThree08 -> ", twoSumOn2(arrThree08,28));