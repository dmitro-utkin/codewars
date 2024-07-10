// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order 
// while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// input: array
// output: array

// algo
// 1. create an array witt only odd numbers from the input array
// 2. sort the array by ascending order
// 3. Create an index variable that will point to the position of the 
//    current odd number in the initial array.
// 4  Walk through a sorted array of odd numbers and replace 
//    the corresponding positions in the original array.
// 5. Return the updated array.

// v1
// function sortArray(array) {
//   const oddArray = array
//     .filter(num => num % 2 !== 0)
//     .sort((a, b) => a - b);
//   let index = 0;
//   return array.map(num => num % 2 !== 0 
//     ? oddArray[index++] 
//     : num
//   );
// }

// v2
function sortArray(array) {
  console.log('input array:', array);
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  console.log('odd array:', odd);
  return array.map((x) => {
    console.log('current element:', x);
    return x % 2 ? odd.shift() : x;
  });
}

// console.log(sortArray([7, 1]))
console.log(sortArray([5, 8, 6, 3, 4]))
// console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))
