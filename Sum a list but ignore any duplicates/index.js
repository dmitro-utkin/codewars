// Please write a function that sums a list, but ignores any duplicated items in the list.

// For instance, for the list [3, 4, 3, 6] the function should return 10,
// and for the list [1, 10, 3, 10, 10] the function should return 4.

// -----------------

// input : array
// output: number

// algo
// 1. iterate through the array
// 2. filtered the duplicates


// v1
// function sumNoDuplicates(numList) {
//   let sum = 0;
//   let addedNumbers = []; // масив для збереження доданих унікальних чисел

//   numList.forEach((value, index, self) => {
//     if (self.indexOf(value) === self.lastIndexOf(value) && !addedNumbers.includes(value)) {
//       sum += value;
//       addedNumbers.push(value); // додаємо додане унікальне число до списку
//     }
//   });

//   return sum;
// }

// v2
// function sumNoDuplicates(numList) {
//   let sum = 0;
//   let addedNumbers = []; // масив для збереження доданих унікальних чисел

//   for (let i = 0; i < numList.length; i++) {
//     if (numList.indexOf(numList[i]) === numList.lastIndexOf(numList[i]) && !addedNumbers.includes(numList[i])) {
//       sum += numList[i];
//       addedNumbers.push(numList[i]); // додаємо додане унікальне число до списку
//     }
//   }

//   return sum;
// }

// v3
// function sumNoDuplicates(numList) {
//   return numList
//     .filter((value, index, self) => self.indexOf(value) === self.lastIndexOf(value))
//     .reduce((acc, curr) => acc + curr, 0);
// }


// v4
function sumNoDuplicates(arr) {
  let uniqueArr = [];
  let sum = 0;
  arr.forEach(num => {
      if (arr.indexOf(num) === arr.lastIndexOf(num)) {
          uniqueArr.push(num);
          sum += num;
      }
  });
  return sum;
}

console.log(sumNoDuplicates([3, 4, 3, 6]));// -> 10
console.log(sumNoDuplicates([1, 10, 3, 10, 10]));// -> 4