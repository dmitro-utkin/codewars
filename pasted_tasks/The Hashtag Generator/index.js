// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

// input string
// output string

// algo
// 0. if the string is empty return false
// 1. split the string into an array
// 2. make the first letter of each word capitalized
// 3. join the array into a string with '#'
// 4. return the string

// v1
// function generateHashtag(str) {
//   // Перевіряємо, чи вхідний рядок не є порожнім
//   if (str.trim().length === 0) {
//     return false;
//   }

//   let result = '#';
//   let currentWord = '';

//   // Проходимо по кожному символу в рядку
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];

//     // Якщо символ - пробіл, додаємо попереднє слово до результату
//     if (char === ' ') {
//       if (currentWord.length > 0) {
//         result += currentWord.charAt(0).toUpperCase() + currentWord.slice(1);
//         currentWord = '';
//       }
//     } else {
//       // Інакше додаємо символ до поточного слова
//       currentWord += char;
//     }
//   }

//   // Додаємо останнє слово до результату
//   if (currentWord.length > 0) {
//     result += currentWord.charAt(0).toUpperCase() + currentWord.slice(1);
//   }

//   // Перевіряємо, чи довжина результату не перевищує 140 символів
//   if (result.length > 140) {
//     return false;
//   }

//   return result;
// }

// // v2
// function generateHashtag (str) {
//   if (str.length === 0) {
//     return false;
//   }

//   const words = str.trim().split(' ').filter(word => word.length > 0);
//   return '#' + words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
// }

// v3
// function generateHashtag(str) {
//   // Перевіряємо, чи вхідний рядок не є порожнім
//   if (str.trim() === '') {
//     return false;
//   }

//   // Розбиваємо рядок на слова, капіталізуємо перші літери та об'єднуємо в один рядок
//   const words = str.trim().split(/\s+/).map(word => word.charAt(0).toUpperCase() + word.slice(1));
//   const hashtag = '#' + words.join('');

//   // Перевіряємо, чи довжина результату не перевищує 140 символів
//   if (hashtag.length > 140) {
//     return false;
//   }

//   return hashtag;
// }


// v4
function generateHashtag (str) {

  var hashtag = str.split(' ').reduce(function(tag, word) {
    return tag + word.charAt(0).toUpperCase() + word.substring(1);
  }, '#');
  
  return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
}

console.log(generateHashtag(" Hello there thanks for trying my Kata"));
console.log(generateHashtag("    Hello     World   " ));
console.log(generateHashtag(""));