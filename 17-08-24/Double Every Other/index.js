// Write a function that doubles every second integer in a list, starting from the left.

// Example:

// For input array/list :

// the function should return :

// [1,4,3,8]

// ---------------------------------------------------------------------

// algo 
// 1. create an empty array
// 2. create a for loop
// 3. check if the index is even
// 4. if it is, double the element and push it to the array
// 5. return the array

// v2
// function doubleEveryOther(a) {
//   let result = []
  
//   for (let i = 0; i < a.length; i++){
//     if (i % 2 === 1){
//       result.push(a[i] * 2)
//     } else {
//       result.push(a[i])
//     }
//   }
//   return result
// }

// v2
// function doubleEveryOther(a) {
//   for (let i = 1; i < a.length; i += 2) {
//     a[i] *= 2;
//   }
//   return a;
// }

// v3
// function doubleEveryOther(arr) {
//   return arr
//     .map((el, index) => 
//       index % 2 === 0 
//         ? el 
//         : el * 2);
// }

// v4
function doubleEveryOther(arr) {
  return arr
    .map((el, index) => {
      if (index % 2 === 0) {
        return el;
      } else {
        return el * 2;
      }
    });
}

console.log(doubleEveryOther([1, 2, 3, 4]));