// This kata requires you to write a function which
// merges two strings together.
// It does so by merging the end of the first string with the start of
// the second string together when they are an exact match.

// "abcde" + "cdefgh" => "abcdefgh"
// "abaab" + "aabab" => "abaabab"
// "abc" + "def" => "abcdef"
// "abc" + "abc" => "abc"
// NOTE: The algorithm should always use the longest possible overlap.

// "abaabaab" + "aabaabab" would be "abaabaabab" and not "abaabaabaabab"

// input: two strings
// output: string

// algo
// 1. make an empty string
// 2. make a loop in a loop
// 3. if the strings are the same
// 4. push the string into the empty string
// 5. return the string

// v1
// function mergeStrings(str1, str2) {
//   let overlap = "";
//   for (let i = 1; i <= str1.length; i++) {
//     if (str2.startsWith(str1.slice(-i))) {
//       overlap = str1.slice(-i);
//     }
//   }
//   return str1 + str2.replace(overlap, "");
// }

// v2
function mergeStrings(first, second){
  return (first + ' ' + second).replace(/([^ ]*) \1/, '$1');
}


// Test cases
console.log(mergeStrings("abcde", "cdefgh"));   // Output: "abcdefgh"
console.log(mergeStrings("abaab", "aabab"));   // Output: "abaabab"
console.log(mergeStrings("abc", "def"));       // Output: "abcdef"
console.log(mergeStrings("abc", "abc"));       // Output: "abc"
