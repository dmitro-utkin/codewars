// Given two numbers and an arithmetic operator
// (the name of it, as a string), return the result
// of the two numbers having that operator used on them.

// a and b will both be positive integers,
// and a will always be the first number in the operation,
// and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)

// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5

// -------------------------

// input: number, number, string
// output: number

// algo
// 1. if the string is 'add', return the sum of the two numbers
// 2. if the string is 'subtract', return the difference of the two numbers
// 3. if the string is 'multiply', return the product of the two numbers
// 4. if the string is 'divide', return the quotient of the two numbers
// 5. if the string is anything else, return 'unknown operation'

// v1
// function arithmetic(a, b, operator) {
//   switch (operator) {
//     case "add":
//       return a + b;
//     case "subtract":
//       return a - b;
//     case "multiply":
//       return a * b;
//     case "divide":
//       return a / b;
//     default: return 'unknown operation'
//   }
// }

// v2
const arithmetic = (a, b, operator) => ({
  'add'     : a + b,
  'subtract': a - b,
  'multiply': a * b,
  'divide'  : a / b
}[operator]);

console.log(arithmetic(5, 2, "add"))      //--> 7
console.log(arithmetic(5, 2, "subtract")) //--> 3
console.log(arithmetic(5, 2, "multiply")) //--> 10
console.log(arithmetic(5, 2, "divide"))   //--> 2.5
