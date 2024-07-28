// Are the numbers in order?
// In this Kata, your function receives an array of integers as input.
//  Your task is to determine whether the numbers are in ascending order.
//  An array is said to be in ascending order if there are no two adjacent
//  integers where the left integer exceeds the right integer in value.

// For the purposes of this Kata, you may assume that all inputs are valid,
// i.e. arrays containing only integers.

// Note that an array of 0 or 1 integer(s) is automatically considered
// to be sorted in ascending order since all (zero) adjacent pairs of
// integers satisfy the condition that the left integer does not
// exceed the right integer in value.

// For example:
console.log(inAscOrder([1, 2, 4, 7, 19])); // returns true
console.log(inAscOrder([1, 2, 3, 4, 5])); // returns true
console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20])); // returns false
console.log(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1])); // returns false because the numbers are in DESCENDING order
// N.B. If your solution passes all fixed tests but fails at the random tests, make sure you aren't mutating the input array.

//input: array
//output: boolean

//algo
// 1. copy the array
// 2. sort the array
// 3. compare the sorted array with the original array
// 4. return the boolean

// v1
// function inAscOrder(arr) {
//   // Code your algorithm here :)

//   // Hmmm ... maybe we should try our luck out ...
//   // if (Math.random() > 0.5) {
//   //  return true;
//   // } else {
//   //  return false;
//   // }

//   return arr.every((el, i) => i === 0 || el >= arr[i - 1]);
// }

// v2
// function inAscOrder(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }
