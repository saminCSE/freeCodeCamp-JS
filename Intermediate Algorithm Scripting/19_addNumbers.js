function addTogether() {
  let a = arguments[0];
  if (toString.call(a) !== "[object Number]") return;
  if (arguments.length === 1) {
    return function (b) {
      if (toString.call(b) !== "[object Number]") return;
      return a + b;
    };
  }
  let b = arguments[1];
  if (toString.call(b) !== "[object Number]") return;
  return a + arguments[1];
}

console.log(addTogether(2, 3));
console.log(addTogether(2, [3]));
