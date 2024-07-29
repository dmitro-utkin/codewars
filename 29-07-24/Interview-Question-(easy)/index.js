// You receive the name of a city as a string, 
// and you need to return a string that shows how many 
// times each letter shows up in the string by using asterisks (*).

// For example:

// "Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
// As you can see, the letter c is shown only once, but with 2 asterisks.

// The return string should include only the letters 
// (not the dashes, spaces, apostrophes, etc). 
// There should be no spaces in the output, 
// and the different letters are separated 
// by a comma (,) as seen in the example above.

// Note that the return string must list the letters 
// in order of their first appearance in the original string.

// More examples:

// "Bangkok"    -->  "b:*,a:*,n:*,g:*,k:**,o:*"
// "Las Vegas"  -->  "l:*,a:**,s:**,v:*,e:*,g:*"

// =----------------------------------------

// algo
// 1. split the string
// 2. iterate through the array
// 3. create count variable
// 4. check if the value is in the array
// 5. if the value is in the array, increment the count
// 6. return the string with the stars 

// v1
// function getStrings(city) {
//   let str = city.toLowerCase().replace(/\s/g, '').split('');

//   let result = `"`;
//   let uniqueChars = Array.from(new Set(str)); // Отримати унікальні символи

//   for (let el of uniqueChars) {
//     if (str.indexOf(el) === str.lastIndexOf(el)) {
//       result += `${el}:*,`;
//     } else {
//       result += `${el}:**,`;
//     }
//   }
//   return result.slice(0, -1); // Видаляємо останній зайвий символ ',' і повертаємо рядок
// }

// v2
function getStrings(city) {
  city = city.toLowerCase();
  let obj = {};
  let str = '';

  for (let elem of city) {
      if (!(elem in obj)) {
          obj[elem] = '*';
      } else {
          obj[elem] += '*';
      }
  }

  for (let key in obj) {
      if (key !== ' ') {
          str += key + ':' + obj[key] + ',';
      }
  }

  return str.substring(0, str.length - 1);
}

console.log(getStrings("Chicago")); // -> "c:**,h:*,i:*,a:*,g:*,o:*"
console.log(getStrings("Bangkok")); // -> "b:*,a:*,n:*,g:*,k:**,o:*"
console.log(getStrings("Las Vegas")); // -> "l:*,a:**,s:**,v:*,e:*,g:*"