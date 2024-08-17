// Task
// Provided is a function Kata which accepts two parameters 
// in the following order: array, element and returns 
// the index of the element if found and "Not found" otherwise. 
// Your task is to shorten the code as much as possible in order 
// to meet the strict character count requirements of the Kata. 
// (no more than 161) You may assume that all array elements are unique.

// input: array, element
// output: number

// algo
// 1. use the .indexOf() method or findIndex()
// 2. if the index is -1, return 'Not found'
// 3. else, return the index

// v1
// function find(array, element) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === element) return i;
//   }
//   return "Not found";
// }

// v2
const find = (arr, el) => arr.indexOf(el) === -1 ? "Not found" : arr.indexOf(el);

