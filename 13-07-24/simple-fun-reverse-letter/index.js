// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

// algo
// 1. split the string
// 2. iterate through the array
// 3. if the array includes not a letter or number del them
// 4. return the reversed array

// v1 
// function reverseLetter(str) {
//   const arr = str.split("");
//   for (let i = 0; i < arr.length; i += 1) {
//     if (!/[a-z]/.test(arr[i])) {
//       arr.splice(i, 1);
//     }
//   }
//   return arr.reverse().join("");
// };

// v2
function reverseLetter(str) {
  const letters = str.match(/[a-z]/g) || [];
  return letters.reverse().join('');
}

console.log(reverseLetter("krishan"));
console.log(reverseLetter("ultr53o?n"));
console.log(reverseLetter("ab23c"));
console.log(reverseLetter("krish21an"));