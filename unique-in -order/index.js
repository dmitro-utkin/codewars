// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// algo
// 1. iterate through the array
// 2. split the array
// 3. to compare the elements of array
// 4. return the array

// v1
// const uniqueInOrder = (iterable) => {
//   let arr = iterable.split('');
//   console.log(arr)
//   let newArr = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] !== arr[i + 1]) {
//       newArr.push(arr[i]);
//     }
//   }
  
//   return newArr
// }

// v2
const uniqueInOrder = (iterable) => {
  let newArr = [];
  for (let i = 0; i < iterable.length; i += 1) {
    if (iterable[i] !== iterable[i + 1]) {
      newArr.push(iterable[i]);
    }
  }
  
  return newArr
}

// v3
// const uniqueInOrder =(iterable) => {
//   return [...iterable].filter((item, index) => item !== iterable[index + 1])
// }

const string1 = "AAAABBBCCDAABBB";
const string2 = "ABBCcAD";
const array = [1, 2, 2, 3, 3];
console.log(uniqueInOrder(string1));
console.log(uniqueInOrder(string2));
console.log(uniqueInOrder(array))