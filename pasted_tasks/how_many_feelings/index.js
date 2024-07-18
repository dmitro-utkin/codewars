// You have two arguments: string - a string of
// random letters(only lowercase) and array - an array
// of strings(feelings). Your task is to return how many
// specific feelings are in the array.

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
function countFeelings(string, feelings) {

  const stringLetters = string.split("");

  let count = 0;

  feelings.forEach((feeling) => {
    const feelingLetters = feeling.split("");
    let valid = true;

    feelingLetters.forEach((letter) => {
      if (!stringLetters.includes(letter)) {
        valid = false;
      }
    });

    if (valid) {
      count++;
    }
  });

  return count === 1 ? `${count} feeling.` : `${count} feelings.`;
}

// v2
function countFeelings(string, array) {
  let count = 0;
  
  array.forEach((item) => {
      if (item.split('').every((i) => {
          return string.includes(i); 
      })) {
        count++;
      }
  });
  
  
  return count == 1 ? `${count} feeling.` : `${count} feelings.`; 
}

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

console.log(
  countFeelings("yliausoenvjw", ["anger", "awe", "joy", "love", "grief"])
);
console.log(
  countFeelings("griefgriefgrief", ["anger", "awe", "joy", "love", "grief"])
);
console.log(
  countFeelings("abcdkasdfvkadf", ["desire", "joy", "shame", "longing", "fear"])
);
