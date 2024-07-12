// Build a pyramid-shaped tower, as an array/list of strings,
//  given a positive integer number of floors. A tower block
//  is represented with "*" character.

// For example, a tower with 3 floors looks like this:
// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:
// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

// input number
// output array

// algo
// 1. create an empty array
// 2. create an empty string
// 3. iterate through the number
// 4. push the string to the array
// 5. return the array
// 6. add a space to the string
// 7. add a star to the string

// v1
function towerBuilder(nFloors) {
  let tower = [];

  for (let i = 1; i <= nFloors; i += 1) {
    tower.push(
      " ".repeat(nFloors - i) + "*".repeat(2 * i - 1) + " ".repeat(nFloors - i)
    );
  }
  return tower;
}

console.log(towerBuilder(3));
console.log(towerBuilder(2));
console.log(towerBuilder(6));
