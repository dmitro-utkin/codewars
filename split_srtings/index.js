// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then
//  it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// input: string
// output: array of strings

// algo
// 1. make an empty array
// 2. split the string
// 3. add '_' if the length of the string is odd
// 4. push the array into the empty array
// 5. return the array

const str = "abc";

// v1
// const solution = (str) => {
//   let rez = [];
//   let newStr = str.split('');
//   for (let i = 0; i < newStr.length; i += 2) {
//     if (newStr[i + 1] === undefined) {
//       newStr[i + 1] = '_';
//     }
//   };

//   for (let i = 0; i < newStr.length; i += 2) {
//     rez.push(newStr.slice(i, i + 2).join(''));
//   }
//   // console.log(str);
//   return rez;
// };

// v2
// const solution = (str) => {
//   let rez = [];
//   for (let i = 0; i < str.length; i += 2) {
//     rez.push(str.slice(i, i + 2).padEnd(2, '_'));
//   }
//   return rez;
// };

// v3
function solution(str){
  return (str+"_").match(/.{2}/g)||[]
}

console.log(solution(str));
