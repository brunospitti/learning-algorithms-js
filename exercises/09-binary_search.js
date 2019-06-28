console.log(`


----- Exercise 09 - Binary Search -----


`);

// code
const binarySearch = (numArr, key) => {
	let middleInd = Math.floor(numArr.length / 2);
	let middleKey = numArr[middleInd];

	if (middleKey === key) {
		return true;
	}	else if (numArr.length > 1) {
		if (middleKey > key) {
			return binarySearch(numArr.splice(0, middleInd), key);
		}
		else if (middleKey < key) {
			return binarySearch(numArr.splice(middleInd, numArr.length), key);
		}
	}	else {
		return false;
	}
}

// test
const firstArr09 = [5,7,12,16,36,39,42,56,71];

console.log("binarySearch -> ", binarySearch(firstArr09, 15));
console.log("binarySearch -> ", binarySearch(firstArr09, 16));