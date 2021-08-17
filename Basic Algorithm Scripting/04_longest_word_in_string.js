// 1st Method
//===========================================
function findLongestWordLength(str) {
  let strSplit = str.split(" ");
  let longestWord = 0;
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord) {
      longestWord = strSplit[i].length;
    }
  }
  return longestWord;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);

// 2nd Method
//===========================================
function findLongestWordLength(str) {
  return str.split(" ").sort((a, b) => b.length - a.length)[0].length;
}
console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);

//=================================================
let randomString = "hello brother";
let see = randomString.split(" ").sort((a, b) => b.length - a.length)[0].length;
let see1 = randomString.split(" ");
let see2 = randomString.split(" ").sort();
console.log(see2);
