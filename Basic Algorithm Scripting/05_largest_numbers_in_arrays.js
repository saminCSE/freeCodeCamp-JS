function largestOfFour(arr) {
  // Step 1. Map over the main arrays
  // Step 2. Return the largest numbers for each sub-arrays with Math.max() method
  // Step 3. Return the largest numbers of each sub-arrays => returns [5,27,39,1001]

  return arr.map((subArr) => Math.max.apply(null, subArr));
}

const largeArray = largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
console.log(largeArray);

//================================================================
const numbers = [9, 4, 25, 16];
const newArr = numbers.map(Math.sqrt);
console.log(newArr);
console.log(
  numbers.sort(function (a, b) {
    return a - b;
  })
);

const points = [40, 100, 1, 5, 25, 10];
const p = points.sort(function (a, b) {
  return 0.5 - Math.random();
});
console.log(p);

const flattenArr = [
  [0, 1],
  [2, 3],
].reduce((acc, curr) => {
  return [...acc, ...curr];
});
console.log(flattenArr);
