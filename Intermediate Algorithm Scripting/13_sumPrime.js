function isPrime(number) {
  let start = 2;
  while (start <= Math.sqrt(number)) {
    if (number % start++ < 1) return false;
  }
  return number > 1;
}

function sumPrimes(num) {
  let total = 0;
  let primes = [];

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      total = total + i;
    }
  }
  return total;
}

console.log(sumPrimes(10));
