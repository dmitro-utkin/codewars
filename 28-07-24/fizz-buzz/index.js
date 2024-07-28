// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

// input: number
// output: array  

// algo
// 1. create an array
// 2. iterate from 1 to N
// 3. if the number is a multiple of 3, push "Fizz" to the array
// 4. if the number is a multiple of 5, push "Buzz" to the array
// 5. if the number is a multiple of 3 and 5, push "FizzBuzz" to the array
// 6. if the number is not a multiple of 3 or 5, push the number to the array
// 7. return the array

// v1
// function fizzbuzz(n) {
//   let arr = [];
//   for (let i = 1; i <= n; i+= 1) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       arr.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       arr.push("Fizz");
//     } else if (i % 5 === 0) {
//       arr.push("Buzz");
//     } else {
//       arr.push(i);
//     }
//   }
//   return arr;
// }

// v2
const fizzbuzz = (n)=> 
  Array.from({length: n}, (_,i)=> i+1)
    .map( el=> el % 3 === 0  && el % 5 === 0 ? 'FizzBuzz' : 
          el % 3 === 0 ? 'Fizz' : el % 5 === 0 ? 'Buzz' : el )


console.log(fizzbuzz(3));
console.log(fizzbuzz(10));
console.log(fizzbuzz(15));
