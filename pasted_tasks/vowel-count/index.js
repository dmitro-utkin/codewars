// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// input: string
// output: number

// algo
// 1. make an empty count
// 2. create an array of vowels
// 3. iterate through the string
// 4. if the string includes the vowel, add 1 to the count
// 5. return the count

// v1
// const getCount = (str) => {
//   let count = 0;

//   const vowels = ["a", "e", "i", "o", "u"];
//   for (let i = 0; i < str.length; i += 1) {
//     if (vowels.includes(str[i])) {
//       count += 1;
//     }
//   }

//   return count;
// };

// v2
const getCount = (str) => {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (vowel of str) {
    if (vowels.includes(vowel)) {
      count += 1;
    } else {
      continue;
    }
  }

  return count;
};

// v3
// function getCount(str) {
//   return str.split("").filter((c) => "aeiouAEIOU".includes(c)).length;
// }

// v4
// function getCount(str) {
//   var vowelsCount = 0;
//   str.split("").forEach(function(x){
//     if(x == "a" | x == "e" | x == "i" | x == "o" | x == "u"){
//       vowelsCount += 1;
//     }
//   });  
//   return vowelsCount;
// }

console.log(getCount("abracadabra"));
console.log(getCount("my dbr"));
