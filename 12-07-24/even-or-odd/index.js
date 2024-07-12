// Create a function that takes an integer as an argument and returns "Even" 
// for even numbers or "Odd" for odd numbers.

// input: number
// output: string

// algo
// 1. check if the number is even
// 2. if the number is even, return 'Even'
// 3. if the number is odd, return 'Odd'

// v1
// function evenOrOdd(number) {
//   if (number % 2 === 0) {
//     return "Even"
//   }
//   return "Odd"
// }

// v2
const evenOrOdd = num => num % 2 === 0 
  ? "Even"
  : "Odd"

console.log(evenOrOdd(4))
console.log(evenOrOdd(43))