let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[a|e|i|o|u]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line

console.log(result);
