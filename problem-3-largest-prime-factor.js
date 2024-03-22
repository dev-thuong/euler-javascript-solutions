// Problem 3: Largest prime factor
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the given number?

// Tests
// largestPrimeFactor(2) should return a number.
// largestPrimeFactor(2) should return 2.
// largestPrimeFactor(3) should return 3.
// largestPrimeFactor(5) should return 5.
// largestPrimeFactor(7) should return 7.
// largestPrimeFactor(8) should return 2.
// largestPrimeFactor(13195) should return 29.
// largestPrimeFactor(600851475143) should return 6857.

// Method 1: Using the prime number definition: A prime number is a number that can only be divided by itself and 1 without remainders
function largestPrimeFactor(number) {

  // Get the list of factors of "number"
  let diviArr = [];
  for (let i = 2; i <= number; i++) {
    if (number % i === 0) diviArr.push(i);
  }

  // Remove numbers divisible by 5 and 2 (excluding 5 and 2), reducing the load on the last loop
  diviArr = diviArr
    .filter(i => { if (i % 5 !== 0 || i === 5) return i })
    .filter(i => { if (i % 2 !== 0 || i === 2) return i })

  // Return largest prime factor
  for (let x = diviArr.length - 1; x >= 0; x--) {
    const diviList = [];
    for (let y = 2; y * y < diviArr[x]; y++) {
      if (diviArr[x] % y === 0) diviList.push(y)
    }
    if (diviList.length === 0) return diviArr[x]
  }
}
// => Can't pass freeCodeCamp's test, needs another more efficient algorithm.

// Method 2: A natural number > 2 can be written as a product of prime factors
// For example: 195 = 3 × 5 × 13;
// For example: 8 = 2 × 2 × 2;
// Use a recursive function to parse number into prime factors.
function largestPrimeFactor(number) {
  const diviArr = [];
  function getFactor(num){
    let n = num;
    for (let i = 2; i <= n; i++) {
      if (n % i === 0) {
        n = n / i;
        diviArr.push(i);
        break;
      }
    }
    if (n !== 1) getFactor(n)
  }
  getFactor(number);
  return Math.max(...diviArr)
}
