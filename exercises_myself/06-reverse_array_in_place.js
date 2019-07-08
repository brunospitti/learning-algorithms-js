console.log(`


----- Exercise 06 - Reverse Array In Place -----


`);

// code
const reverseArray = arr => {

  for (let i = 0; i < arr.length / 2; i++) {
    let arrI = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = arrI;
  }

  return arr
}

// test
let arrayToBeReversed1 = ['Banana', 'Apple', 'Monkey', 'Light'];
let arrayToBeReversed2 = ['1', '2', '3', '4', '5', '6', '7'];

reverseArray(arrayToBeReversed1);
reverseArray(arrayToBeReversed2);

console.log(arrayToBeReversed1);
console.log(arrayToBeReversed2);