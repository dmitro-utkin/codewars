// Given n, take the sum of the digits of n.
// If that value has more than one digit,
// continue reducing in this way until a
// single-digit number is produced.
// The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// input number
// output number

// algo
// 1. split the number
// 2. iterate through the array
// 3. return the sum of the array
// 4. if the number is less than 10 return the number
// 5. if the number is greater than 10, return the digital root

// v1
function digitalRoot(n) {
  let res = "";

  while (n > 9) {
    n = n
      .toString()
      .split("")
      .map(Number)
      .reduce((acc, digit) => acc + digit, 0);
  }
  res = n;

  return res;
}

// v2
// const digitalRoot = (n) => {
//   let sum = 0;
//   while (n > 9) {
//     while (n > 0) {
//       sum += n % 10;
//       n = Math.floor(n / 10);
//     }
//     n = sum;
//     sum = 0;
//   }
//   return console.log(n);
// };

// v3
// const digitalRoot = (n) => {
//   let sum = 0;
//   if (n < 10) {
//     return console.log(n);
//   } else {
//     n.toString().split('')
//     for (let i = 0; i < n.toString().length; i += 1) {
//       sum += Number(n.toString()[i]);
//     }
//     return digitalRoot(sum);
//   }
// }


console.log(digitalRoot(456));
console.log(digitalRoot(10));
console.log(digitalRoot(9));
console.log(digitalRoot(16));
console.log(digitalRoot(132189));
console.log(digitalRoot(132189));
console.log(digitalRoot(493193));
