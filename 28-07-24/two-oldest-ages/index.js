// The two oldest ages function/method needs to be completed. 
// It should take an array of numbers as its argument and return 
// the two highest numbers within the array. 
// The returned value should be an array in the format 
// [second oldest age,  oldest age].

// The order of the numbers passed in could be any order. 
// The array will always include at least 2 items. 
// If there are two or more oldest age, 
// then return both of them in array format.

// For example (Input --> Output):

// [1, 2, 10, 8] --> [8, 10]
// [1, 5, 87, 45, 8, 8] --> [45, 87]
// [1, 3, 10, 0]) --> [3, 10]

// input: array
// output: array

// algo
// 1. sort the array
// 2. return the last two elements

// v1
// function twoOldestAges(ages){
//   const sort = ages.sort((a, b) => a - b);
//   const oldestAge = sort[sort.length - 1];
//   const secondOldestAge = sort[sort.length - 2];

//   return [secondOldestAge, oldestAge]
// }

// v2
function twoOldestAges(ages){
  return ages.sort(function(a,b){return a-b;}).slice(-2);
}

console.log(twoOldestAges([1, 2, 10, 8]))
console.log(twoOldestAges([1, 5, 87, 45, 8, 8]))
console.log(twoOldestAges([1, 3, 10, 0]))