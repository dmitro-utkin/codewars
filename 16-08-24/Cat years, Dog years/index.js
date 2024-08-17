// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

// =------------------------------------------------

// input: number
// output: array

// algo
// 1. create an array
// 2. For a cat, calculate its age in cat years using the following method: 
//  -The first year corresponds to 15 cat years. 
//  -The second year corresponds to 9 cat years. 
//  -After that, each subsequent year corresponds to 4 cat years.
// 3. For a dog, calculate its age in dog years using the following method: 
//  -The first year corresponds to 15 dog years. 
//  -The second year corresponds to 9 dog years. 
//  -After that, each subsequent year corresponds to 5 dog years.
// 4. return the array

// v1
var humanYearsCatYearsDogYears = function(humanYears) {
  let catYears = 0;
  let dogYears = 0;
  
  for (let i = 0; i < humanYears; i++) {
    if (i === 0) {
      catYears += 15;
      dogYears += 15;
    } else if (i === 1) {
      catYears += 9;
      dogYears += 9;
    } else {
      catYears += 4;
      dogYears += 5;
    }
  }
  return [humanYears, catYears, dogYears];
}

console.log(humanYearsCatYearsDogYears(2));

