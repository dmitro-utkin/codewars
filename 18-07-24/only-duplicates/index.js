// Given a string, remove any characters 
// that are unique from the string.

// Example:

// input: "abccdefee"

// output: "cceee"

// input: string
// output: string

// algo 
// 0. create an empty string
// 1. create a for loop
// 2. check if the char unduplicate in the string
// 3. if not, push the char to the string
// 4. return the string

// v1
// Given a string, remove any characters 
// that are unique from the string.

// function onlyDuplicates(str) {
//   let result = ""; // 0. create an empty string
//   for (let i = 0; i < str.length; i++) {
//     let currentChar = str[i];
//     if (str.indexOf(currentChar) !== str.lastIndexOf(currentChar)) { // 2. check if the char is duplicated in the string
//       result += currentChar; // 3. if duplicated, append the char to the result string
//     }
//   }
//   return result; // 4. return the result string
// }

// console.log(onlyDuplicates("abccdefee")); // -> "cceee"

function onlyDuplicates(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    if (str.indexOf(currentChar) !== str.lastIndexOf(currentChar)) {
      result += currentChar;
    }
  }
  return result;
}

// v2
function onlyDuplicates(str) {
  return str.split('').filter(e => str.indexOf(e) != str.lastIndexOf(e)).join('')
}

console.log(onlyDuplicates("abccdefee"));
console.log(onlyDuplicates('hello'));
console.log(onlyDuplicates('colloquial'));
console.log(onlyDuplicates('foundersandcoders'));
