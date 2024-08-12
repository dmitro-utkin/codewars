// Complete the keysAndValues function so that it takes 
// in an object and returns the keys and values as separate arrays.

// Example:

console.log(keysAndValues({a: 1, b: 2, c: 3})) // should return [['a', 'b', 'c'], [1, 2, 3]]

// Style Points (JS/CoffeeScript only): This kata only tests f
// or data that uses object literal notation (simple objects). 
// For extra style, can you get your method to check for 
// objects that extend their prototype?

// input object
// output array of arrays

// algo
// 1. create an empty array
// 2. create a loop
// 3. push the key to the array
// 4. push the value to the array
// 5. return the array

// v1.
// function keysAndValues(data){
//   const res = [];
//   const keys = [];
//   const values = [];

//   for (const key in data) {
//     keys.push(key);
//     values.push(data[key]);
//   }
//   res.push(keys);
//   res.push(values);
//   return res;
// }

// v2
function keysAndValues(data) {
  return [Object.keys(data), Object.values(data)];
}