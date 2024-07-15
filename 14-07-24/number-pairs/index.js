// In this kata the aim is to compare each pair of integers from two arrays, 
// and return a new array of large numbers.

// Note: Both arrays have the same dimensions.

// Example:
// let arr1 = [13, 64, 15, 17, 88];
// let arr2 = [23, 14, 53, 17, 80];
// getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]

// ------------------------------

// algo
// 1. create an empty array
// 2. create a for loop
// 3. push the larger number to the array
// 4. return the array

// v1
// function getLargerNumbers(a, b) {
//   let res = [];
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] > b[i]) {
//       res.push(a[i]);
//     } else {
//       res.push(b[i]);
//     }
//   }
//   return res;
// }

// v2
const getLargerNumbers = (a, b) => {
  return a.map((x, i) => x > b[i] ? x : b[i]);
}

let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];

console.log(getLargerNumbers(arr1, arr2));