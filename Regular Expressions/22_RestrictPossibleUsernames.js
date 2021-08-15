let username = "J";
// let userCheck = /^[a-z]{2,}\d*$/i; // Change this line
let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);

console.log(result);
