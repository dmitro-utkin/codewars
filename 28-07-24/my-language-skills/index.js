// Task
// You are given a dictionary/hash/object containing 
// some languages and your test results in the given languages. 
// Return the list of languages where your test score 
// is at least 60, in descending order of the scores.

// Note: the scores will always be unique (so no duplicate values)

// Examples
console.log(myLanguages({"Java": 10, "Ruby": 80, "Python": 65}))    //-->  ["Ruby", "Python"]
console.log(myLanguages({"Hindi": 60, "Dutch" : 93, "Greek": 71})) //-->  ["Dutch", "Greek", "Hindi"]
console.log(myLanguages({"C++": 50, "ASM": 10, "Haskell": 20}))   //-->  []

// input object
// output array

// algo
// 1. create an empty array
// 2. iterate through the object
// 3. if the value is greater than 60, push the key to the array
// 4. return the array

// v1
// function myLanguages(results) {
//   const res = [];
//   for (let key in results) {
//     if (results[key] >= 60) {
//       res.push(key);
//     }
//   }

//   // Sort the languages based on their scores in descending order
//   res.sort((a, b) => results[b] - results[a]);

//   return res;
// }

// v2
// const myLanguages = results => Object.entries(results)
//   .filter(([name, points]) => points >= 60)
//   .sort(([name1, points1], [name2, points2]) => points2 - points1)
//   .map(([name, points]) => name);

// v3
function myLanguages(results) {
  return Object.entries(results)
    .filter(([_, points]) => points >= 60)
    .sort(([, points1], [, points2]) => points2 - points1)
    .map(([name, _]) => name);
}