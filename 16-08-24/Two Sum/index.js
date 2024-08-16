// Write a function that takes an array of numbers 
// (integers for the tests) and a target number. 
// It should find two different items in the array that, 
// when added together, give the target value. 
// The indices of these items should then be returned 
// in a tuple / list (depending on your language) like so: 
// (index1, index2).

// For the purposes of this kata, some tests may have 
// multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be 
//   an array of length 2 or greater, and all of the items 
//   will be numbers; target will always be the 
//   sum of two different items from that array).

// Based on: https://leetcode.com/problems/two-sum/

console.log(twoSum([1, 2, 3], 4)) // returns [0, 2] or [2, 0]
console.log(twoSum([3, 2, 4], 6)) // returns [1, 2] or [2, 1]

// ---------------------------------------------

// input array
// output array
// algo
// 1. create an empty array
// 2. iterate through the array
// 3. find the sum of the numbers
// 4. if the sum is equal to the target, push the index of the number
// 5. return the array

// v1
// function twoSum(numbers, target) {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

// v2
function twoSum(numbers, target) {
  console.log(`Input: numbers = ${numbers}, target = ${target}`);

  let numMap = new Map();

  for (let i = 0; i < numbers.length; i++) {
    let complement = target - numbers[i];

    console.log(`Iteration ${i}: number = ${numbers[i]}, complement = ${complement}`);

    if (numMap.has(complement)) {
      let result = [numMap.get(complement), i];
      console.log(`Found result: ${result}`);
      return result;
      return [numMap.get(complement), i];
    }

    numMap.set(numbers[i], i);
  }

  console.log('No result found.');
}
