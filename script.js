"use strict";

// const multiplesOf3and5 = (number) => {
//     let arrs = [...Array(number - 1).keys()].map(arr => {
//         return arr + 1;
//     });

//     return arrs.filter(arr => arr % 3 === 0 || arr % 5 === 0).reduce((a, b) => a + b)

// }

//   console.log(multiplesOf3and5(1000));

// const fiboEvenSum = n =>
//   [...Array(n)]
//     .reduce(
//       (arr, _, i) => arr.concat(i > 1 ? arr[i - 1] + arr[i - 2] : i + 1),
//       []
//     )
//     .filter(a => a % 2 === 0)
//     .reduce((a, b) => a + b);

// console.log(fiboEvenSum(10));

// const largestPrimeFactor = number => {
//   let arr = [];
//   for (let i = 2; i <= number; i++) {
//     while (number % i === 0) {
//       arr.push(i);
//       number = number / i;
//     }
//   }
//   return arr.sort((a, b) => b - a)[0];
// }

// console.log(largestPrimeFactor(100));

const sumSquareDifference = (n) => {
  const numbers = [...Array(n).keys()].map(a => a + 1);
  const eachSquareSum = numbers.map(num => Math.pow(num, 2)).reduce((a, b) => a + b, 0);
  const totalSumSquare = Math.pow(numbers.reduce((a, b) => a + b, 0), 2);
  return totalSumSquare - eachSquareSum;
  
}

console.log(sumSquareDifference(100));
