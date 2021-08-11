//Normal Procedure
//================================================
// function palindrome(str) {
//   const len = str.length;

//   for (let i = 0; i < len / 2; i++) {
//     if (str[i] !== str[len - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }

//Other Procedure
//================================================
function palindrome(str) {
  let string = str
    .toLowerCase()
    .split(/[^A-Za-z0-9]/gi)
    .join("");
  let aux = string.split("");
  if (aux.join("") === aux.reverse().join("")) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("eye"));
console.log(palindrome("not a palindrome"));
