// A square of squares

// You like building blocks. You especially like
// building blocks that are squares. And what you even like more,
// is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square.
// Instead, you end up with an ordinary rectangle! Those blasted things!
// If you just had a way to know, whether you're currently working in vain…
// Wait! That's it! You just have to check if your number of
// building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer
// that is the square of an integer; in other words,
// it is the product of some integer with itself.

// The tests will always use some integral number,
// so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

// ------------------------------

// input: integer
// output: boolean

// algo
// 1. check if the number is a perfect square
// 2. if the number is a perfect square, return true
// 3. if the number is not a perfect square, return false

// v1
// var isSquare = function(n){
//   if (Math.sqrt(n) % 1 === 0) {
//     return true;
//   }
//   return false; // fix me
// }

// v2 (with for)
// const isSquare = (n) => {
//   for (let i = 0; i <= n; i++) {
//     if (i * i === n) {
//       return true;
//     }
//   }
//   return false;
// }

// v3 (binary search)
const isSquare = (n) => {
  if (n < 0) {
    return false;
  }
  let left = 0;
  let right = n;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid === n) {
      return true;
    } else if (mid * mid < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
};

console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(3));
console.log(isSquare(4));
console.log(isSquare(25));
console.log(isSquare(26));
