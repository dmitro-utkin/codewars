// Task
// Write a function three_powers() to accept a number,
// to check can it represent as sum of 3 powers of 2.
// (n == 2**i + 2**j + 2**k, i, j, k >= 0)

// For example:

// three_powers(2)  # False
// three_powers(3)  # True, 3 = 2**0 + 2**0 + 2**0
// three_powers(5)  # True, 5 = 2**0 + 2**1 + 2**1
// three_powers(15)  # False
// Input
// - `n` must be an integer.
// - `1` <= `n` <= `2 ** 100 - 1`
// There are 2000 random tests for the speed test, good luck and happy coding.

// input number
// output boolean

// algo
// 1. check if n is an integer and between 1 and 2 ** 100 - 1
// 2. initialize i, j, k to 0
// 3. loop for i from 0 to 100
// 4. loop for j from 0 to 100
// 5. loop for k from 0 to 100
// 6. check if n is equal to 2**i + 2**j + 2**k
// 7. return true if n is equal to 2**i + 2**j + 2**k
// 8. return false if n is not equal to 2**i + 2**j + 2**k
// 9. return false if n is not an integer or not between 1 and 2 ** 100 - 1

// v1
function threePowers(n) {
  if (typeof n !== "number" || n < 1 || n > 2 ** 100 - 1) return false;
  for (let i = 0; i <= 100; i += 1) {
    for (let j = 0; j <= 100; j += 1) {
      for (let k = 0; k <= 100; k += 1) {
        if (n === 2 ** i + 2 ** j + 2 ** k) return true;
      }
    }
  }
  return false;
}

// v2
// function threePowers(n) {
//   if (typeof n !== "number" || n < 1 || n > 2 ** 100 - 1) return false;
//   const limit = Math.floor(Math.log2(n));
//   for (let i = 0; i <= limit; i++) {
//     for (let j = i; j <= limit; j++) {
//       const k = Math.log2(n - (2 ** i + 2 ** j));
//       if (k % 1 === 0 && k >= 0 && k <= limit) return true;
//     }
//   }
//   return false;
// }

// v3

console.log(threePowers(2));
console.log(threePowers(3));
console.log(threePowers(5));
console.log(threePowers(15));
