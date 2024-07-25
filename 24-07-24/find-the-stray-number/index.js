// You are given an odd-length array of integers, 
// in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, 
// and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// -----------------------------
// -----------------------------
// -----------------------------
// -----------------------------
// -----------------------------
// -----------------------------
// -----------------------------
// -----------------------------
// -----------------------------

// input: array
// output: number

// algo
// 1. find the unique number
// 2. return the unique number

// v1
function stray(numbers) {
  return numbers.find(el => numbers.indexOf(el) === numbers.lastIndexOf(el));
};

const arr1 = [1, 1, 2];
const arr2 = [17, 17, 3, 17, 17, 17, 17];

console.log(stray(arr1));
console.log(stray(arr2));