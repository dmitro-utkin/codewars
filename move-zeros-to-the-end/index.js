// Write an algorithm that takes
// an array and moves all of the zeros to the end,
// preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// input: array
// output: array

// algo
// 1. creaate an empty array
// 2. iterate through the array
// 3. if the element is 0 push it to the empty array
// 4. if the element is not 0 push it to the empty array
// 5. return the empty array

// v1
// function moveZeros(arr) {
//   const newArr = [];
//   const arrOfZeros = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] !== 0) {
//       newArr.push(arr[i]);
//     } else {
//       arrOfZeros.push(arr[i]);
//     }
//   }
//   // return newArr.concat(arrOfZeros);
//   return [...newArr, ...arrOfZeros];
// }

// v2
const moveZeros = (arr) => {
  return arr
    .filter((el) => el !== 0)
    .concat(arr.filter((el) => el === 0));
};


console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
