// Task
// Given an array of integers , Find the maximum product obtained 
// from multiplying 2 adjacent numbers in the array.

// Notes
// Array/list size is at least 2.

// Array/list numbers could be a mixture of positives, negatives also zeroes .

// Input >> Output Examples
console.log(adjacentElementsProduct([1, 2, 3])); //==> return 6
// Explanation:
// The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])); //==> return 50
// Explanation:
// Max product obtained from multiplying 5 * 10  =  50 .

console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]))  //==>  return -14
// Explanation:
// The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.

// input: array
// output: number

// algo
// 1. find the max product
// 2. multiply witn the next number
// 2. if the product is greater than the max product
//    - update the max product
// 3. return the max product

// v1
// function adjacentElementsProduct(array) {
//   let result = array[0] * array[1];
  
//   for (let i = 1; i < array.length - 1; i += 1) {
//     result = Math.max(result, array[i] * array[i + 1]);
//   }
  
//   return result;
// }

// v2
// const adjacentElementsProduct = (array) => array.slice(1).reduce(
//   (max, cur, i) => Math.max(array[i] * cur, max), -Infinity
// );