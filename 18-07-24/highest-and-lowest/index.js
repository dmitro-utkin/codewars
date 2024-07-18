// In this little assignment you are given a string
// of space separated numbers, and have to return the
// highest and lowest number.

// Examples
console.log(highAndLow("1 2 3 4 5")); // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // return "42 -9"  
console.log(highAndLow("1 2 3")); // return "3 1"  

// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space,
// and highest number is first.

// input: string
// output: string

// algo
// make an empty string
// split the string into an array
// find the highest number
// find the lowest number
// return the highest and lowest numbers separated by a space

// v1
// function highAndLow(numbers) {
//   let arr = numbers.split(" ");
//   let max = Math.max(...arr);
//   let min = Math.min(...arr);
//   return `${max} ${min}`;
// }

// v2
// function highAndLow(numbers) {
//   let arr = numbers.split(" ").map(Number);
//   return `${Math.max(...arr)} ${Math.min(...arr)}`
// }

// v3 
function highAndLow(numbers) {
  return numbers
    .split(" ")
    .map(Number)
    .reduce((a, b) => (a > b ? a : b)) +
    " " +
    numbers
      .split(" ")
      .map(Number)
      .reduce((a, b) => (a < b ? a : b));
} 
