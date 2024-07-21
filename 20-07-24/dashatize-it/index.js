// Given an integer, return a string with dash '-' marks
// before and after each odd digit, but do not begin or end
// the string with a dash mark.

// Ex:

// 274 -> '2-7-4'
// 6815 -> '68-1-5'

// -----------------------------------------------------

// input: integer
// output: string

// algo
// 1. split the number
// 2. iterate through the array
// 3. add dash after every odd number
// 4. return the array

// v1
// function dashatize(num) {
//   if (isNaN(num)) {
//       return "Invalid input";
//   }
  
//   let str = Math.abs(num).toString().split("");
//   for (let i = 0; i < str.length; i++) {
//       // Check if the current character is a digit
//       if (/\d/.test(str[i])) {
//           // If it's odd and not the first digit, add a dash before it
//           if (parseInt(str[i]) % 2 !== 0 && i !== 0) {
//               str[i] = "-" + str[i];
//           }
//           // If it's odd and not the last digit, add a dash after it
//           if (parseInt(str[i]) % 2 !== 0 && i !== str.length - 1) {
//               str[i] = str[i] + "-";
//           }
//       }
//   }
  
//   return str.join("").replace(/--/g, "-");
// }


console.log(dashatize(274));
console.log(dashatize(6815));
console.log(dashatize(5311));
console.log(dashatize(86320));
console.log(dashatize(974302));
console.log(dashatize(0));
console.log(dashatize(-1));
console.log(dashatize(-28369));
