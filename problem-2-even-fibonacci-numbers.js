// Problem 2: Even Fibonacci Numbers
// Each new term in the Fibonacci sequence is generated by adding the previous two terms.
// By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.

// Tests
// fiboEvenSum(10) should return 10.
// fiboEvenSum(34) should return 44.
// fiboEvenSum(60) should return 44.
// fiboEvenSum(1000) should return 798.
// fiboEvenSum(100000) should return 60696.
// fiboEvenSum(4000000) should return 4613732.

function createFiboArr(n) {
  // Creates an array of Fibonacci numbers based on "n"
  const fibonacciArr = [1];
  for (let i = 1; fibonacciArr[i - 1] <= n; i++) {
    if (i === 1) fibonacciArr.push(2);
    if (i > 1) fibonacciArr.push(fibonacciArr[i - 1] + fibonacciArr[i - 2]);
  };
  // Delete the last value in the Array if it is greater than "n"
  if (fibonacciArr.at(-1) > n) fibonacciArr.pop();
  return fibonacciArr
}

function fiboEvenSum(n) {
  const arr = createFiboArr(n);
  return arr.reduce((a, b) => {
    const removeOdd = (b % 2 === 0) ? b : 0;
    return a + removeOdd
    }, 0);
}
