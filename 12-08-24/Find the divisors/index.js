// Create a function named divisors/Divisors that takes 
// an integer n > 1 and returns an array with all of the integer's 
// divisors(except for 1 and the number itself), from smallest to largest. 
// If the number is prime return the string '(integer) is prime' 
// (null in C#, empty table in COBOL) (use Either String a in 
//   Haskell and Result<Vec<u32>, String> in Rust).

// Example:
console.log(divisors(12)); // should return [2,3,4,6]
console.log(divisors(25)); // should return [5]
console.log(divisors(13)); // should return "13 is prime"

// input number
// output array or string

// algo
// 1. create an empty array
// 2. check if the number is prime
// 3. if not, push the number to the array
// 4. return the array

// v1
// function divisors(integer) {
//   const arr = [];
//   for (let i = 2; i < integer; i++) {
//     if (integer % i === 0) {
//       arr.push(i);
//     }
//   }
//   if (arr.length === 0) {
//     return `${integer} is prime`;
//   } else {
//     return arr;
//   }
// }

// v2
function divisors(integer) {
  const arr = Array.from({ length: integer - 2 }, (_, i) => i + 2)
    .filter(i => integer % i === 0);

  return arr.length === 0 ? `${integer} is prime` : arr;
}