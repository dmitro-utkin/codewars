// Write a function that takes in a string of one or more words,
// and returns the same string, but with all words that have
// five or more letters reversed (Just like the name of this Kata).
// Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test        --> "This is a test"
// "This is another test" --> "This is rehtona test"

// ----------------------------

// input: string
// output: string

// algo
// 1. split the string
// 2. checked length of the words
// 3. reverse word if it need it
// 4. return the result

// v1
// function spinWords(string) {
//   return string
//     .split(" ")
//     .map((word) =>
//       word.length >= 5 ? word.split("").reverse().join("") : word
//     )
//     .join(" ");
// }

// v2
const spinWords = (string) => {
  let words = string.split(" ");
  
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length >= 5) {
      words[i] = words[i].split("").reverse().join("");
    }
  }
  
  return words.join(" ");
}

console.log(spinWords("Hey fellow warriors"));
// console.log(spinWords("This is a test "));
// console.log(spinWords("This is another test"));
