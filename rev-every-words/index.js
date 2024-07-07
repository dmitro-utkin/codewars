// example
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// algo 
// 1. split the string into an array
// 2. reverse every word
// 3. join the array into a string
// 4. return the string

// v1 
// const reverseEveryWord =(str) => {
//   str = str.split(' ');
//   for (let i = 0; i < str.length; i += 1) {
//     str[i] = str[i].split('').reverse().join('');
//   }
//   return str.join(' ');
// }

// v2
const reverseEveryWord =(str) => {
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

// v3
// const reverseEveryWord =(str) => {
//   return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
// }

const string1 = "This is an example!";
const string2 = "double  spaces";
console.log(reverseEveryWord(string1));
console.log(reverseEveryWord(string2))