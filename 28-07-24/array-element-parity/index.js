// In this Kata, you will be given an array of integers
// whose elements have both a negative and a positive value,
// except for one integer that is either only negative
// or only positive. Your task will be to find that integer.

// Examples:

console.log(solve([1, -1, 2, -2, 3])); //=> 3

// 3 has no matching negative appearance

console.log(solve([-3, 1, 2, 3, -1, -4, -2])); // => -4

// -4 has no matching positive appearance

console.log(solve([1, -1, 2, -2, 3, 3])); //=> 3

// (the only-positive or only-negative integer may appear more than once)

// input: array
// output: number

// algo
// 1. iterate through the array
// 2. 

// v1
// function solve(arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr.indexOf(-arr[i]) === -1) return arr[i];
//   }

//   return arr[0];
// }

// v2
// const solve = array => array.find(value => !array.includes(-value))

// v3
// const solve = arr => [...new Set(arr)].reduce((a, c) => a + c);
