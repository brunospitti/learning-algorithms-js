console.log(`


----- Exercise 07 - Mean, Median & Mode -----


`);

// -- helpers
const mergeSort = arr => {
  if (arr.length === 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

const merge = (a1, a2) => {
  let resultArr = [];
  while (a1.length && a2.length) {
    if (a1[0] < a2[0]) {
      resultArr.push(a1.shift());
    } else {
      resultArr.push(a2.shift());
    }
  }

  return [...resultArr, ...a1, ...a2];
}

// code
const getMean = arr => {
  const sumAll = arr.reduce((sum, num) => sum += num);
  return sumAll / arr.length;
}

const getMedian = arr => {
  const middle = Math.floor(arr.length / 2);
  const sortedArr = mergeSort(arr);
  if (arr.length % 2 === 0) {
    return (sortedArr[middle] + sortedArr[middle - 1]) / 2
  } else {
    return sortedArr[middle];
  }
}

const getMode = arr => {
  let hashMap = {}
  let min = false;
  let maxNum = 0;
  let maxEl = [];
  arr.forEach(num => {
    if (!hashMap[num]) hashMap[num] = 1;
    hashMap[num]++
  })

  for (let numCount in hashMap) {
    if (hashMap[numCount] > maxNum) {
      maxNum = hashMap[numCount];
      maxEl.push(numCount);
    } else if (hashMap[numCount] === maxNum) {
      maxEl.push(numCount);
    } else {
      min = true;
    }
  }

  return min ? maxEl : "none";
}

const meanMedianMode = arr =>
  `
    Mean: ${getMean(arr)};
    Median: ${getMedian(arr)};
    Mode: ${getMode(arr)};
  `


// test
let firstArr07 = [13, 18, 13, 14, 13, 16, 14, 21, 13];
let secondArr07 = [1, 2, 3, 4, 5, 4, 6, 1];
let thirdArr07 = [9, 10, 23, 10, 23, 9];

console.log("meanMedianMode(firstArr07) -> ", meanMedianMode(firstArr07));
console.log("meanMedianMode(secondArr07) -> ", meanMedianMode(secondArr07));
console.log("meanMedianMode(thirdArr07) -> ", meanMedianMode(thirdArr07));