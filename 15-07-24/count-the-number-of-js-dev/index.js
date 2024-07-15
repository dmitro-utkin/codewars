// You will be given an array of objects (hashes in ruby) representing data 
// about developers who have signed up to attend the coding meetup 
// that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

// For example, given the following list:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

// your function should return number 1.

// If, there are no JavaScript developers from Europe then your function should return 0.

// Notes:

// The format of the strings will always be Europe and JavaScript.
// All data will always be valid and uniform as in the example above.

// ------------------------

//input: array
//output: number

// algo
// 1. iterate through the array
// 2. if the continent is 'Europe' and the language is 'JavaScript' add 1 to the count
// 3. return the count

// v1 
// function countDevelopers(list) {
//   let count = 0;
//   for (let el of list) {
//     if (el.continent === "Europe" && el.language === 'JavaScript' ) {
//       count += 1;
//     }
//   }
//   return count;
// }

// v2
// const countDevelopers = list => {
//   return list
//     .filter(el => el.continent === "Europe" && el.language === 'JavaScript')
//     .reduce((acc, curr) => acc + 1, 0);
// }

// v3
// const countDevelopers = list => {
//   return list.reduce((acc, curr) => {
//     if (curr.continent === 'Europe' && curr.language === 'JavaScript') {
//       return acc + 1;
//     } else {
//       return acc;
//     }
//   }, 0);
// }

// v4
function countDevelopers(list) {
  return list.filter(x=>x.continent=='Europe'&&x.language=='JavaScript').length
}

console.log(countDevelopers(list1));