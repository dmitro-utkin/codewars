// You have two arguments: string - a string of random letters(only lowercase) and array - an array
// of strings(feelings). Your task is to return how many specific feelings are in the array.

// For example:
// string -> 'yliausoenvjw'
// array -> ['anger', 'awe', 'joy', 'love', 'grief']
// output -> '3 feelings.' // 'awe', 'joy', 'love'

// string -> 'griefgriefgrief'
// array -> ['anger', 'awe', 'joy', 'love', 'grief']
// output -> '1 feeling.' // 'grief'

// string -> 'abcdkasdfvkadf'
// array -> ['desire', 'joy', 'shame', 'longing', 'fear']
// output -> '0 feelings.'

// algo
// 1. iterate through the array
// 2. iterate through the string
// 3. itrate through the array
// 4. if the array includes the string
// 5. count += 1
// 6. return count

// const str = "yliausoenvjw";
// const arr = ["anger", "awe", "joy", "love", "grief"];

// function countFeelings(string, array) {
//   console.log("string:", string);
//   console.log("array:", array);

//   let count = 0;

//   array.forEach((element) => {
//     console.log("Checking if string includes:", element);
//     if (string.includes(element)) {
//       console.log("Found a match:", element);
//       count += 1;
//     }
//   });

//   console.log("Total count:", count);
//   return count;
// }

// console.log(countFeelings(str, arr));

// v1
// function countFeelings(string, feelings) {
//   console.log("string:", string);
//   console.log("feelings:", feelings);

//   const stringLetters = string.split('');
  
//   let count = 0;

//   feelings.forEach(feeling => {
//       const feelingLetters = feeling.split('');
//       console.log("Checking feeling:", feeling);
//       console.log("feeling letters:", feelingLetters);
//       let valid = true;
      
//       feelingLetters.forEach(letter => {
//           if (!stringLetters.includes(letter)) {
//               valid = false;
//               console.log(`Feeling letter ${letter} not found in string`);
//           }
//       });

//       if (valid) {
//           count++;
//           console.log("Feeling found in string:", feeling);
//       }
//   });

//   console.log("Total count:", count);
//   return count;
// }

// v2
// function countFeelings(string, feelings) {
//   const counts = feelings.reduce((counts, feeling) => {
//     const feelingLetters = new Set(feeling);
//     const valid = [...string].every(letter => feelingLetters.has(letter));
//     return valid ? counts + 1 : counts;
//   }, 0);

//   console.log("Total count:", counts);
//   return counts;
// }

// function isSetsEqual(set1, set2) {
//   if (set1.size !== set2.size) return false;
//   for (let element of set1) {
//       if (!set2.has(element)) return false;
//   }
//   return true;
// }

// Example usage
// const string = "ahappinessjoygratitude";
// const feelings = ["happiness", "joy", "love", "gratitude"];
// const string1 = "yliausoenvjw";
// const feelings1 = ["anger", "awe", "joy", "love", "grief"];
const string2 = 'griefgriefgrief';
const feelings2 = ["anger", "awe", "joy", "love", "grief"];
const string3 = 'abcdkasdfvkadf';
const feelings3 = ['desire', 'joy', 'shame', 'longing', 'fear'];

// console.log(countFeelings(string, feelings));
console.log(countFeelings(string2, feelings2));
console.log(countFeelings(string3, feelings3));