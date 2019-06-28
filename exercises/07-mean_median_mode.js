console.log(`


----- Exercise 07 - Mean, Median & Mode -----


`);

// code
const getMean = arr => {
	let arrItemsNum = arr.length;
	let sumOfArrItems = arr.reduce((sum, num) => sum + num);
	return sumOfArrItems / arrItemsNum;
}

const getMedian = arr => {
	let isArrOdd = arr.length % 2 === 0 ? false : true;
	let arrMiddleNum = arr.length % 2 === 0 ? arr.length / 2 : (arr.length + 1) / 2;
	let sortedArr = arr.sort((a, b) => a-b);
	if(isArrOdd){
		return sortedArr[arrMiddleNum - 1];
	} else {
		return (
			(sortedArr[arrMiddleNum - 1] + sortedArr[arrMiddleNum]) / 2
		)
	}
}

const getMode = arr => {
	let itemsObj = {};
	for(let item of arr){
		itemsObj[item] ? itemsObj[item] += 1 : itemsObj[item] = 1;
	}
	let objectArr = Object.values(itemsObj);
	let maxFreq = Math.max(...objectArr);
	let item = Object.keys(itemsObj).filter(item => itemsObj[item] === maxFreq);
	return item
}

const meanMedianMode = arr => {
	return {
		"getMean": getMean(arr),
		"getMedian": getMedian(arr),
		"getMode": getMode(arr)
	}
}

// test
let firstArr07 = [13, 18, 13, 14, 13, 16, 14, 21, 13];
let secondArr07 = [1, 2, 3, 4, 5, 4, 6, 1];
let thirdArr07 = [9, 10, 23, 10, 23, 9];

console.log("meanMedianMode(firstArr07) -> ", meanMedianMode(firstArr07));
console.log("meanMedianMode(secondArr07) -> ", meanMedianMode(secondArr07));
console.log("meanMedianMode(thirdArr07) -> ", meanMedianMode(thirdArr07));