// Problem 4: Largest palindrome product
// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two n-digit numbers.

// Tests
// largestPalindromeProduct(2) should return a number.
// largestPalindromeProduct(2) should return 9009.
// largestPalindromeProduct(3) should return 906609.

function largestPalindromeProduct(n) {
  const max = Math.pow(10, n) - 1; // if n = 2; max = 99
  const min = Math.pow(10, n - 1); // if n = 2; min = 10
  for (let x = max; x >= min; x--) {
    
    // get largest palindromic number
    let palin = +(x + x.toString().split('').reverse().join(''));

    // Check conditions
    for (let y = max; y >= min; y--) {
      if (
        palin % y === 0 &&
        palin / y < max
      ) { return palin }
    }
  }
  return 'There are no numbers that match the conditions'
}
