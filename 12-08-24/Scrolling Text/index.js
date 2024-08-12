// Let's create some scrolling text!

// Your task is to complete the function which takes a string, 
// and returns an array with all possible rotations of the given string, in uppercase.

// Example
// console.log(scrollingText("codewars")); // should return:

// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]

// input string
// output array

// algo
// 1. create an empty array
// 2. create a for loop
// 3. iterate through the string
// 4. push the string to the array
// 5. return the array

// v1
// function scrollingText(text){
//   let bigText = text.toUpperCase();
//   const res = [];
//   for (let i = 0; i < bigText.length; i++) {
//     res.push(bigText.slice(i) + bigText.slice(0, i));
//   }
//   return res;
// }

// v2
// function scrollingText(text){
//   let result = []
  
//   for( let i = 0; i < text.length; i++){
//     result.push((text.slice(i) + text.slice(0,i)).toUpperCase())
//   }
  
//   return result
// }

// let text = "codewars";


// console.log(text.slice(0) + text.slice(0,0))
// console.log(text.slice(1) + text.slice(0,1))
// // console.log(text.slice(1, 2).toUpperCase())