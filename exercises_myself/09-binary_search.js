console.log(`


----- Exercise 09 - Binary Search -----


`);

// code
const binarySearch = (numArr, key) => {
  const middleIndex = Math.floor(numArr.length / 2);
  const middleKey = numArr[middleIndex];

  if(middleKey === key) {
    return true;
  }

  if(numArr.length > 1){
    if(middleIndex > key){
      return binarySearch(numArr.splice(0, middleIndex), key);
    } else {
      return binarySearch(numArr.splice(middleIndex), key);
    }
  } else {
    return false;
  }

}

// test
const firstArr09 = [5, 7, 12, 16, 36, 39, 42, 56, 71];

console.log("binarySearch -> ", binarySearch(firstArr09, 70));
console.log("binarySearch -> ", binarySearch(firstArr09, 16));