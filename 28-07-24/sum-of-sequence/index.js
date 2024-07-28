// Your task is to write a function which 
// returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step.

// If begin value is greater than the end, your function should return 0. 
// If end is not the result of an integer number of steps, 
// then don't add it to the sum. See the 4th example below.

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)

// --------------------------

// input: number
// output: number

// algo
// make validation
// if begin is greater than the end, return 0
// if end is not the result of an integer number of steps, return 0
// iterate through the array
// return the sum of the array

// v1
// const sequenceSum = (begin, end, step) => {
//   // May the Force be with you
//   if (begin > end && end === step) {
//     return 0;
//   }

//   let res = 0; 
//   for (let i = begin; i <= end; i += step) {
//     res += i;
//   }

//   return res;
// };

// v2
// const sequenceSum = (begin, end, step) => {
//   if (begin > end || step <= 0) {
//     return 0;
//   }

//   const sequence = [];
//   for (let i = begin; i <= end; i += step) {
//     sequence.push(i);
//   }

//   return sequence.reduce((acc, el) => acc + el, 0);
// };

// v3
const sequenceSum = (begin, end, step) => {
  if (begin > end) {
    return 0;
  }
  return begin + sequenceSum(begin + step, end, step);
};
console.log(sequenceSum(2,2,2))
console.log(sequenceSum(2,6,2))
console.log(sequenceSum(1,5,1))
console.log(sequenceSum(1,5,3))