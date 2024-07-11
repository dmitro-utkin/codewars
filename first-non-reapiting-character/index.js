// Write a function named first_non_repeating_letter† that takes a string input,
// and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't',
// since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character,
// but the function should return the correct case for the initial letter. For example,
// the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("");

// † Note: the function is called firstNonRepeatingLetter for historical reasons,
// but your function should handle any Unicode character.

// input: string
// output: string

// algo
// 1. split the string
// 2. iterate through the array
// 3. if the array includes the string
// 4. return the string
// 5. return an empty string

// v1
// function firstNonRepeatingLetter(str) {
//   // Крок 1: Ініціалізуємо об'єкт для зберігання кількості кожного символу
//   let charCount = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     charCount[char] = (charCount[char] || 0) + 1;
//   }

//   // Крок 2: Знаходимо перший символ з кількістю 1
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (charCount[char.toLowerCase()] === 1) {
//       return char;
//     }
//   }

//   // Крок 3: Якщо не знайдено жодного унікального символу, повертаємо порожній рядок
//   return "";
// }

// v2
// function firstNonRepeatingLetter(str) {
//   let charMap = new Map();
//   for (let char of str) {
//     charMap.set(char.toLowerCase(), (charMap.get(char.toLowerCase()) || 0) + 1);
//   }

//   for (let char of str) {
//     if (charMap.get(char.toLowerCase()) === 1) {
//       return char;
//     }
//   }

//   return "";
// }


// v3
// function firstNonRepeatingLetter(s) {
//   for(var i in s) {
//     if(s.match(new RegExp(s[i],"gi")).length === 1) {
//       return s[i];
//     }
//   }
//   return '';
// }

// v4
function firstNonRepeatingLetter(s) {
  var t=s.toLowerCase();
  for (var x=0;x<t.length;x++)
    if(t.indexOf(t[x]) === t.lastIndexOf(t[x]))
      return s[x];
  return "";
}

console.log(firstNonRepeatingLetter("stress"));
console.log(firstNonRepeatingLetter("sTreSS"));
console.log(firstNonRepeatingLetter("saas"));
