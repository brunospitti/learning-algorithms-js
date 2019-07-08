console.log(`


----- Exercise 13 - Bubble Sort -----


`);

// code
const bubbleSort = arr => {
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < (arr.length - i - 1); j++){
      if(arr[j] > arr[j + 1]){
        let arrJ = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = arrJ;
      }
    }
  }
  return arr;
}

// test
firstArr13 = [8, 5, 3, 6, 1, 2, 7, 4];
secondArr13 = [20, 20, 31, 56, 1, 12, 12];
thirdArr13 = [3, -9, -12, -1, 8];

console.log("firstArr13 -> ", bubbleSort(firstArr13));
console.log("secondArr13 -> ", bubbleSort(secondArr13));
console.log("thirdArr13 -> ", bubbleSort(thirdArr13));