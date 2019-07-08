console.log(`


----- Exercise 08 - Two Sum -----


`);

// code
const twoSumOn = (arr, sum) => {
  let finalArr = [];
  let hasTable = [];

  arr.forEach(num => {
    let counterPart = sum - num;
    if(hasTable.indexOf(counterPart) >= 0){
      finalArr.push([num, counterPart]);
    }
    hasTable.push(num);
  })

  return finalArr;

}

// test
let arrOne08 = [1, 10, 6, 5, 8, 4, 3, 6];
let arrTwo08 = [1, 6, 4, 5, 3, 3];
let arrThree08 = [40, 11, 19, 17, -12];

console.log("twoSumOn | arrOne08 -> ", twoSumOn(arrOne08, 11));

console.log("twoSumOn | arrTwo08 -> ", twoSumOn(arrTwo08, 7));

console.log("twoSumOn | arrThree08 -> ", twoSumOn(arrThree08, 28));