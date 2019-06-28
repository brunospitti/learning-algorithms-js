console.log(`


----- Exercise 14 - Merge Sort -----


`);

// code
const mergeSort = arr => {
	if (arr.length <= 1) {
		return arr;
	} else {
		let middleIndex = arr.length / 2;
		let firstHalf = arr.slice(0,middleIndex);
		let secondHalf = arr.slice(middleIndex, arr.length);
		return merge(mergeSort(firstHalf), mergeSort(secondHalf));
	}
}

const merge = (arr1, arr2) => {
	let finalArr = [];
	while (arr1.length && arr2.length){
		let lowerNum;
		if (arr1[0] < arr2[0]) {
			lowerNum = arr1.shift();
		} else {
			lowerNum = arr2.shift();
		}
		finalArr.push(lowerNum);
	}

	if(arr1.length) {
		finalArr = finalArr.concat(arr1);
	} else {
		finalArr = finalArr.concat(arr2);
	}

	return finalArr;
}

// test
firstArr14 = [6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1];
secondArr14 = [100, -20, 40, -30, 16, -100, -101];

console.log("firstArr14 -> ", mergeSort(firstArr14));
console.log("secondArr14 -> ", mergeSort(secondArr14));