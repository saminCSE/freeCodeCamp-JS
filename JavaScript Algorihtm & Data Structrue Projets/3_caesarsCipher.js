let lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
};

function rot13(str) {
  let codeArr = str.split(""); // String to Array
  let decodedArr = []; // Your Result goes here

  decodedArr = codeArr.map(function (letter) {
    if (lookup.hasOwnProperty(letter)) {
      letter = lookup[letter];
    }
    return letter;
  });

  return decodedArr.join(""); // Array to String
}

console.log(rot13("SERR PBQR PNZC"));
