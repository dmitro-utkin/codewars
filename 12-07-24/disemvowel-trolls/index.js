// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove
// all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string
// and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!"
// would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// input string
// output string

// algo
// 1. split the string
// 2. iterate through the array

// v1
// const disemvowel = (str) => {
//   let arr = str.split("");
//   for (let i = 0; i < arr.length; i += 1) {
//     if (
//       arr[i] === "a" ||
//       arr[i] === "e" ||
//       arr[i] === "i" ||
//       arr[i] === "o" ||
//       arr[i] === "u" ||
//       arr[i] === "A" ||
//       arr[i] === "E" ||
//       arr[i] === "I" ||
//       arr[i] === "O" ||
//       arr[i] === "U"
//     ) {
//       arr[i] = "";
//     }
//   }
//   return arr.join("");
// };

// v2
// const disemvowel = (str) => {
//   const vowel = "aeiouAEIOU";
//   return str
//     .split("")
//     .filter((char) => !vowel.includes(char))
//     .join("");
// };

// v3
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

console.log(disemvowel("This website is for losers LOL!"));
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"));
console.log(disemvowel("What are you, a communist?"));


// Цей вираз використовує метод replace() рядків JavaScript, щоб видалити всі 
// голосні літери (як великі, так і малі) з рядка.

// Розглянемо кожну частину виразу детально:

// str.replace():

// Це метод рядків, який дозволяє замінити певні частини рядка на інші.
// Він приймає два аргументи: шаблон (або регулярний вираз) для пошуку, 
// і рядок або функцію для заміни. /[aeiou]/gi:

// Це регулярний вираз, який використовується для пошуку.
// /[aeiou]/ - це шаблон, який шукає будь-яку літеру з набору a, e, i, o, u.
// g - це глобальний прапор, який означає, що шаблон буде шукатися в усьому 
// рядку, а не лише в першому збігу.
// i - це прапор, який означає, що пошук буде нечутливим до регістру 
// (тобто, будуть знайдені як великі, так і малі голосні літери).
// '':

// Це порожній рядок, який використовується як заміна для знайдених голосних літер.
// Отже, вираз str.replace(/[aeiou]/gi, '') замінює всі голосні літери (як великі, так і малі) 
// в рядку str на порожній рядок, ефективно видаляючи їх.

// Наприклад, якщо str = "Hello, World!", то результатом буде "Hll, Wrld!".