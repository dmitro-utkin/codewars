// If we list all the natural numbers below 10 that are multiples of 3 or 5,
//  we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples 
// of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// input number
// output number

// algo
// 1. make an empty sum
// 2. iterate from 1 to the number
// 3. if the number is a multiple of 3 or 5, add it to the count
// 4. return the count

// v1
// function solution(number){
//   let sum = 0;

//   for (let i = 1; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i
//     } else if (number < 0) {
//       sum = 0
//     } 
//   }
//   return sum
// }

// v2
function solution(number) {
  return number < 0 
    ? 0 
    : [...Array(number).keys()]
      .filter(x => x % 3 === 0 || x % 5 === 0)
      .reduce((a, b) => a + b)
}
console.log(solution(10));
console.log(solution(-10));
