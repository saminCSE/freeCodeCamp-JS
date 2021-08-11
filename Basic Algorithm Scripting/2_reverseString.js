function reverseString(str){
    //Reversing string using built-in functions
    //=============================================
    return str.split("").reverse().join("");
    /**
   * Reversing string with recursion
   */
  //   if (str === "") return str;
  //   else return reverseString(str.substr(1) + str.charAt(0));
}
console.log(reverseString('apple'));

//Reversing string using decrementing for loop
//=============================================
  function reverseString2(str){
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }

    return newString;
  }
console.log(reverseString2('apple'));


let str = "Hello world!";
console.log(str.substr(6,3));//wor
console.log(str.charAt(6));//w 