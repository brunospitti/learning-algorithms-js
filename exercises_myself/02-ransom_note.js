console.log(`


----- Exercise 02 - Ransom Note -----


`);

// code
const isRansomPossible = (noteText, magText) => {
  let noteArr = noteText.split(' ');
  let magArr = magText.split(' ');
  let magObj = {};
  let ransomPossible = true;

  magArr.forEach(word => {
    if (!magObj[word]) magObj[word] = 1;
    magObj[word]++
  })
  for (let noteWord of noteArr) {
    if (magObj[noteWord] && magObj[noteWord] >= 1) {
      magObj[noteWord]--;
    } else {
      return ransomPossible = false;
    }
  }


  return ransomPossible;
}

// test
const noteText1 = "will not work this is a secret note for you from a secret admirer";
const noteText2 = "this is a secret note for you from a secret admirer";
const magText = "puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited";

console.log("isRansomPossible -> ", isRansomPossible(noteText1, magText));
console.log("isRansomPossible -> ", isRansomPossible(noteText2, magText));