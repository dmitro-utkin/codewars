// Your task is to make a function that can take any
// non-negative integer as an argument and return it
// with its digits in descending order. Essentially,
// rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// input: number
// output: number

// algo
// 1. split the number
// 2. sort the array
// 3. join sorted array to num

function descendingOrder(n) {
  let arr = n.toString().split('');
  arr.sort((a, b) => b - a);
  return Number(arr.join(''));
}

// v2
// function descendingOrder(n){
//   return +(n + '').split('').sort(function(a,b){ return b - a }).join('');
// }

// v3
// function descendingOrder(n) {
//   return +n.toString().split('').sort().reverse().join('');
// }

console.log(descendingOrder(42145));
console.log(descendingOrder(145263));
console.log(descendingOrder(123456789));
