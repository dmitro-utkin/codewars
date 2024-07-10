// Complete the solution so that the function will break up camel casing, 
// using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// algo 
// 1. split the string into an array
// 2. make the first letter of each word capitalized
// 3. join the array into a string
// 4. return the string

// v1
function breakCamelCase(str) {
  return str.split('').map(char => {
    if (char === char.toUpperCase()) {
      return ' ' + char;
    } else {
      return char;
    }
  }).join('');
}

// v2
// function breakCamelCase(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     let char = str.charAt(i);
//     if (char === char.toUpperCase()) {
//       result += ' ' + char;
//     } else {
//       result += char;
//     }
//   }
//   return result;
// }

// Test cases
console.log(breakCamelCase("camelCasing"));  // Output: "camel Casing"
console.log(breakCamelCase("identifier"));   // Output: "identifier"
console.log(breakCamelCase(""));             // Output: ""