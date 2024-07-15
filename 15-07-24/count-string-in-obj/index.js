// Create a function strCount (takes an object as argument) that will count
// all string values inside an object.

// For example:
strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  })
//   //returns 3

// ---------------------------

// input: object
// output: number

// algo
// 0. create a count variable
// 1. iterate through the object
// 2. check if the value is a string
// 3. if the value is a string, increment the count
// 4. return the count

// v1
// function strCount(obj) {
//   return Object.values(obj).reduce((count, value) => {
//     if (typeof value === "string") {
//       return count + 1;
//     } else if (Array.isArray(value)) {
//       return count + value.filter(item => typeof item === "string").length;
//     } else {
//       return count;
//     }
//   }, 0);
// }

// v2
// function strCount(obj) {
//   return Object.values(obj).reduce((count, value) => {
//     if (typeof value === "string") {
//       return count + 1;
//     } else if (Array.isArray(value)) {
//       return count + value.reduce((arrayCount, item) => {
//         if (typeof item === "string") {
//           return arrayCount + 1;
//         } else if (typeof item === "object" && item !== null) {
//           return arrayCount + strCount(item);
//         } else {
//           return arrayCount;
//         }
//       }, 0);
//     } else if (typeof value === "object" && value !== null) {
//       return count + strCount(value);
//     } else {
//       return count;
//     }
//   }, 0);
// }

// v3
function strCount(obj){
  let count = 0;
  for (key in obj) {
    if (typeof obj[key] == 'string') count++;
    if (typeof obj[key] == 'object') count += strCount(obj[key]);
  }
  return count;
}

console.log(strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  }));
