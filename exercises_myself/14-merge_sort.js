console.log(`


----- Exercise 14 - Merge Sort -----


`);

// code
const mergeSort = arr => {
  if(arr.length === 1){
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

const merge = (a1, a2) => {
  let resultArr = []
  while(a1.length && a2.length){
    if(a1[0] < a2[0]){
      resultArr.push(a1.shift());
    } else {
      resultArr.push(a2.shift());
    }
  }

  return [...resultArr,...a1,...a2];
}

// test
firstArr14 = [6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1];
secondArr14 = [100, -20, 40, -30, 16, -100, -101];

console.log("firstArr14 -> ", mergeSort(firstArr14));
console.log("secondArr14 -> ", mergeSort(secondArr14));