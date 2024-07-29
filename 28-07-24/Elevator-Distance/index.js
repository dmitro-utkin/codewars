// Imagine you start on the 5th floor of a building, 
// then travel down to the 2nd floor, then back up to the 8th floor. 
// You have travelled a total of 3 + 6 = 9 floors of distance.

// Given an array representing a series of floors you must reach by elevator,
// return an integer representing the total distance travelled 
// for visiting each floor in the array in order.

// // simple examples
// elevatorDistance([5,2,8]) = 9
// elevatorDistance([1,2,3]) = 2
// elevatorDistance([7,1,7,1]) = 18

// // if two consecutive floors are the same,
// //distance travelled between them is 0
// elevatorDistance([3,3]) = 0

// Array will always contain at least 2 floors. 
// Random tests will contain 2-20 elements in array, 
// and floor values between 0 and 30.

// input array
// output integer

// algo
// 1. iterate through the array
// 2. if the floor is not the same as the next one
//    add the distance between them
// 3. return the sum of the distances
// 4. if the floor is the same as the next one
//    return 0

// v1
// function elevatorDistance(array) {
//   return array.reduce((acc, cur, i) => {
//     if (i !== array.length - 1) {
//       return acc + Math.abs(cur - array[i + 1]);
//     }
//     return acc;
//   }, 0);
// }

// v2
function elevatorDistance(array) {
  let distance = 0;
  for (let i = 0; i < array.length - 1; i += 1) {
    distance += Math.abs(array[i] - array[i + 1]);
  }
  return distance;
}


console.log(elevatorDistance([5,2,8]));
console.log(elevatorDistance([1,2,3]));
console.log(elevatorDistance([7,1,7,1]));
