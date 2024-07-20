// In this kata you will create a function 
// that takes a list of non-negative integers 
// and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// input: array
// output: array  

// algo 
// 1. create an empty array
// 2. iterate through the array
// 3. if the array element is a number, push it to the array
// 4. return the array

// v1
// function filter_list(l) {
//   let res = [];
//   for (let el of l) {
//     if (typeof el === 'number') {
//       res.push(el);
//     }
//   }
//   return res;
// }

// v2
function filter_list(l) {
  return l.filter(el => typeof el === 'number');
}

console.log(filter_list([1,2,'a','b']))
console.log(filter_list([1,'a','b',0,15]))
console.log(filter_list([1,2,'aasf','1','123',123]))
