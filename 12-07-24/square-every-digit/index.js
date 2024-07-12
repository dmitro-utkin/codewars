// Welcome. In this kata, you are asked to square every 
// digit of a number and concatenate them.

// For example, if we run 9119 through the function, 
// 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 
// because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// input: integer
// output: integer

// algo
// 1. create an empty string
// 2. split the num 
// 3. square up every num
// 4. joined squred numbers


// v1
// function squareDigits(num) {
//   let res = '';
//   let numb = num.toString().split('');

//   for (let i = 0; i < numb.length; i += 1) {
//     res += numb[i] ** 2;
//   }

//   return Number(res);
// }

// v2
const squareDigits = num => {
  let temp = num.toString().split('').map(el => el ** 2).join('');
  return Number(temp);
};
console.log(squareDigits(23));
console.log(squareDigits(345));