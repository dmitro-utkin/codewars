// You are given a list of unique integers arr, 
// and two integers a and b. Your task is to find out whether
// or not a and b appear consecutively in arr, 
// and return a boolean value (True if a and b are 
// consecutive, False otherwise).

// It is guaranteed that a and b are both present in arr.

// input: array
// output: boolean

// algo
// 1. sort the array
// 2. compare the sorted array with the original array
// 3. return the boolean

// v1
// function consecutive(arr, a, b) {
//   const idxA = arr.indexOf(a);
//   const idxB = arr.indexOf(b);
//   if (idxA === -1 || idxB === -1) {
//     return false; // якщо a або b відсутні в масиві, повертаємо false
//   }
//   return Math.abs(idxB - idxA) === 1 || Math.abs(idxA - idxB) === 1; // перевіряємо, чи вони упорядковані поруч 
// }

// v2
function consecutive(arr, a, b) {
  return Math.abs(arr.indexOf(a) - arr.indexOf(b)) == 1;
}

console.log(consecutive([1, 3, 5, 7], 3, 7)); // returns false
console.log(consecutive([1, 3, 5, 7], 3, 1)); // returns true
console.log(consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4)); // returns true