// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position
// in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest
// in the original string.

// All letters will be lowercase and all inputs will be valid.

// input: string
// output: string

// algo
// 1. split the string into an array
// 2. iterate through the array
// 3. calculate the score of each word
// 4. return the highest scoring word

// v1
// function high(x) {
//   let arr = x.split(" ");
//   let max = 0;
//   let word = "";

//   for (let i = 0; i < arr.length; i += 1) {
//     let sum = 0;

//     for (let j = 0; j < arr[i].length; j += 1) {
//       sum += arr[i].charCodeAt(j) - 96;
//     }
//     if (sum > max) {
//       max = sum;
//       word = arr[i];
//     }
//   }
//   return word;
// }

// v2
// function high(x){
//   let alphabets = [
//     'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
//     'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
//   ];
  
//   let words = x.split(" ");
//   let highestScore = 0;
//   let highestScoreWord = "";
  
//   for (let word of words) {
//     let lettersSum = 0;
    
//     for (let letter of word) {
//       lettersSum += alphabets.indexOf(letter) + 1;
//     }
    
//     if (lettersSum > highestScore) {
//       highestScore = lettersSum;
//       highestScoreWord = word;
//     }
//   }
  
//   return highestScoreWord;
// }

// v3
function high(s){
  let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
  return s.split(' ')[as.indexOf(Math.max(...as))];
}

console.log(high('man i need a taxi up to ubud'));
console.log(high('what time are we climbing up the volcano'));
console.log(high('take me to semynak'));
console.log(high('aa b'));
console.log(high('b aa'));
console.log(high('bb d'));
console.log(high('d bb'));
console.log(high('aaa b'));