// The number
// 89
// 89 is the first integer with more than one digit that fulfills the property partially
// introduced in the title of this kata. What's
// the use of saying "Eureka"? Because this sum gives the same number:
// 89
// =
// 8
// 1
// +
// 9
// 2
// 89=8
// 1
//  +9
// 2

// The next number in having this property is
// 135
// 135:

// See this property again:
// 135
// =
// 1
// 1
// +
// 3
// 2
// +
// 5
// 3
// 135=1
// 1
//  +3
// 2
//  +5
// 3

// Task
// We need a function to collect these numbers, that may receive two integers
// 𝑎
// a,
// 𝑏
// b that defines the range
// [
// 𝑎
// ,
// 𝑏
// ]
// [a,b] (inclusive) and outputs a list of the sorted numbers in the range
// that fulfills the property described above.

// Examples
// Let's see some cases (input -> output):

// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range
// [
// 𝑎
// ,
// 𝑏
// ]
// [a,b] the function should output an empty list.

// 90, 100 --> []

// ----------------

// input: two integers
// output: array

// algo
// 1. create an empty array
// 2. iterate from a to b
// 3. For each number n:
//    a. Divide the number n into digits.
//    b. Calculate the sum of the squares of the numbers.
//    c. If the sum of the squares of the digits is n, add n to the list.
// 4. Sort the list in ascending order.
// 5. Return the list.

// v1
// function sumDigPow(a, b) {
//   let result = [];

//   for (let i = a; i <= b; i++) {
//     let sum = 0;
//     let digits = i.toString().split("");

//     for (let j = 0; j < digits.length; j++) {
//       sum += Math.pow(parseInt(digits[j]), j + 1);
//     }

//     if (sum === i) {
//       result.push(i);
//     }
//   }

//   return result;
// }

// v2
function sumDigPow(a, b) {
  return Array.from({ length: b - a + 1 }, (_, i) => i + a)
    .filter(num => {
      const digits = num.toString().split('').map(Number);
      const sum = digits.reduce((acc, digit, index) => acc + Math.pow(digit, index + 1), 0);
      return sum === num;
    })
    .sort((a, b) => a - b);
}

console.log(sumDigPow(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sumDigPow(1, 100)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
console.log(sumDigPow(10, 100)); // [89]
console.log(sumDigPow(90, 100)); // []
console.log(sumDigPow(90, 150));
