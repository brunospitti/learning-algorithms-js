console.log(`


----- Exercise 05 - Reverse Words -----


`);

// code
const reverseWords = str => {
  let wordsArr = str.split(' ');

  for (let i = 0; i < wordsArr.length / 2; i++) {
    let arrI = wordsArr[i];
    wordsArr[i] = wordsArr[wordsArr.length - i - 1];
    wordsArr[wordsArr.length - i - 1] = arrI;
  }

  return wordsArr.join(' ')
}

// test
console.log(reverseWords("this is a text to reverse"));
console.log(reverseWords("Coding Javascript!"));