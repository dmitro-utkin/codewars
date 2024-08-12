// Define a method/function that removes from a given array 
// of integers all the values contained in a second array.

// Examples (input -> output):
// * [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
// * [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
// * [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1]

// input array
// output array

// algo
// 1. create an empty array
// 2. create a for loop
// 3. check if the element is not in the second array
// 4. if not, push the element to the array
// 5. return the array

// v1
Array.prototype.remove_ = function(values_list) {
  return this.filter((num) => !values_list.includes(num));
};

console.log([1, 1, 2, 3, 1, 2, 3, 4].remove_([1, 3])); //-> [2, 2, 4]
console.log([1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8].remove_([1, 3, 4, 2])); //-> [5, 6, 7, 8]
console.log([8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3].remove_([2, 4, 3])); //-> [8, 7, 6, 5, 1]
