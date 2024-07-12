// You probably know the "like" system from Facebook and other pages.
// People can "like" blog posts, pictures or other items.
// We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing
// the names of people that like an item.
// It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// input: array
// output: string

// algo
// 1. if the array is empty return 'no one likes this'
// 2. if the array has one element return 'the element likes this'
// 3. if the array has two elements return 'the first and the second like this'
// 4. if the array has three elements return 'the first, the second and 2 others like this'

// v1
// function likes(names) {
//   switch (names.length) {
//     case 0:
//       return "no one likes this";
//     case 1:
//       return `${names[0]} likes this`;
//     case 2:
//       return `${names[0]} and ${names[1]} like this`;
//     case 3:
//       return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//     case 4:
//       return `${names[0]}, ${names[1]} and 2 others like this`;
//   }
// }

// v3
function likes(names) {
  if (names.length === 0) return "no one likes this";
  if (names.length === 1) return `${names[0]} likes this`;
  if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
  if (names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}

console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
