// Create range generator function that will take up 
// to 3 parameters - start value, step and stop value. 
// This function should return an iterable object with numbers. 
// For simplicity, assume all parameters to be positive numbers.

// Examples:

console.log(range(5)) //--> 1,2,3,4,5
console.log(range(3, 7)) //--> 3,4,5,6,7
console.log(range(2, 3, 15)) //--> 2,5,8,11,14

// input: start value, step, stop value
// output: array

// algo
// 1. create an empty array
// 2. check if there are 3 parameters
// 3. if there are 3 parameters, push the start value
// 4. if there are 3 parameters, push the step
// 5. if there are 3 parameters, push the stop value
// 6. return the array

// v1
function range(start, step, stop) {
  let res = [];
  if (arguments.length === 3) {
    for (let i = start; i <= stop; i += step) {
      res.push(i);
    }
  } else if (arguments.length === 2) {
    for (let i = start; i <= step; i++) {
      res.push(i);
    }
  } else if (arguments.length === 1) {
    for (let i = 1; i <= start; i++) {
      res.push(i);
    }
  }
  return res;
}

// v2
// function range(start, step, stop) {
//   let res = [];

//   switch (arguments.length) {
//     case 3:
//       for (let i = start; i <= stop; i += step) {
//         res.push(i);
//       }
//       break;
//     case 2:
//       for (let i = start; i <= step; i++) {
//         res.push(i);
//       }
//       break;
//     case 1:
//       for (let i = 1; i <= start; i++) {
//         res.push(i);
//       }
//       break;
//   }
//   return res;
// }

