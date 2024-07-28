// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, 
// the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), 
// return a new array/tuple of two integers, 
// where the first one is the total weight of team 1, 
// and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.
// Input >> Output Examples
console.log(rowWeights([13, 27, 49])); //  ==>  return (62, 27)
// Explanation:
// The first element 62 is the total weight of team 1,
// and the second element 27 is the total weight of team 2.

console.log(rowWeights([50, 60, 70, 80]));  //==>  return (120, 140)
// Explanation:
// The first element 120 is the total weight of team 1, 
// and the second element 140 is the total weight of team 2.

console.log(rowWeights([80])); // ==>  return (80, 0)
// Explanation:
// The first element 80 is the total weight of team 1, 
// and the second element 0 is the total weight of team 2.

// -------------------------

// input: array
// output: array

// algo
// 1. create an empty array
// 2. create a for loop
// 3. sum the elements
// 4. push the sum to the array
// 5. return the array

// v1
// function rowWeights(array){
//   let sum1 = 0;
//   let sum2 = 0;

//   for (let i = 0; i < array.length; i++) {
//     if (i % 2 === 0) {
//       sum1 += array[i];
//     } else {
//       sum2 += array[i];
//     }
//   }
//   return [sum1, sum2];
// }

// v2
// function rowWeights(array){
//   let t1 = array.filter((x, i)=>i%2==0).reduce((a,item)=>a+item,0);
//   let t2 = array.filter((x, i)=>i%2!=0).reduce((a,item)=>a+item,0);
  
//   return [t1, t2]
// }

// v3
// function rowWeights(array){
//   return array.reduce((a, b, i) => (a[i%2]+=b,a),[0,0])
// }