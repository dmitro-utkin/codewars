// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters
//  as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always 
// exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

console.log(findMissingLetter(['a','b','c','d','f'])); //-> 'e'
console.log(findMissingLetter(['O','Q','R','S'])); //-> 'P'
// (Use the English alphabet with 26 letters!)

// ------------------------------------------------------------------------------

// input: array
// output: string

// algo
// 1. iterate through the array of letters in the ASCII table
// 2. if the letter is not in the array, return the letter

// v1
function findMissingLetter(arr) {
  let firstCharCode = arr[0].charCodeAt(0);
  
  for (let i = 1; i < arr.length; i++) {
    let expectedCharCode = firstCharCode + i;
    if (arr[i].charCodeAt(0) !== expectedCharCode) {
      return String.fromCharCode(expectedCharCode);
    }
  }

  return ''; // Якщо відсутній елемент не знайдено
}

// v2
// function findMissingLetter(array) {
  
//   const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
//   'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//   const isUpperCase = array[0] === array[0].toUpperCase();

//   let alphaIndex = alphabet.indexOf(array[0].toLowerCase());
  
//   let letterPos;

//   array.forEach(el => {
//     if(el.toLowerCase() !== alphabet[alphaIndex]) {
//       letterPos = alphaIndex;
//     } else {
//       alphaIndex++;
//     }
//   });
    
//   return isUpperCase ? alphabet[letterPos].toUpperCase() : alphabet[letterPos];
// }