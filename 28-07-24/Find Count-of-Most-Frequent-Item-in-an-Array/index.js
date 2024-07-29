// Complete the function to find the count 
// of the most frequent item of an array. 
// You can assume that input is an array of integers. 
// For an empty array return 0

// Example
// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5 
// The most frequent number in the array is -1 and it occurs 5 times.

// algo 
// 1. create count
// 2. iterate through the array
// 3. if the number is not in the count, add it
// 4. if the number is in the count, increment the count
// 5. return the count

// v1
// function mostFrequentItemCount(collection) {
//   let count = {};
//   for (let i = 0; i < collection.length; i += 1) {
//     if (count[collection[i]] === undefined) {
//       count[collection[i]] = 1;
//     } else {
//       count[collection[i]] += 1;
//     }
//   }
//   let max = 0;
//   for (let key in count) {
//     if (count[key] > max) {
//       max = count[key];
//     }
//   }
//   return max;
// }

// v2
// function mostFrequentItemCount(collection) {
//   if (collection.length === 0) return 0;
  
//   var count = Object.create(null);
  
//   collection.forEach( item => {
//     count[item] = (count[item] || 0) + 1;
//   });
  
//   return Math.max(...Object.values(count));
// }


// v3
function mostFrequentItemCount(collection) {
  var count = 0,
  frequentCount = 0;
//At the start of the process this FOR loop starts at index 0 (var i)
 
 for (var i = 0; i < collection.length; i++) {

//This FOR loop also starts at index 0 (var j)
      for (var j = 0; j < collection.length; j++) {

//Var i remains on index 0 as var j cycles through the entire array comparing each number in the array to that first index (var i).
//if var i and var j are ever the same count gets incremented.
          
          if (collection[i] == collection[j]) { 
              count++; 
          }
//IF after cycling through the array a new more frequent number is found, that count is stored in frequentCount.
          if (frequentCount < count) {
              frequentCount = count; 
          }

      }
//Count then gets reset. Process starts again
      count = 0;  
      
  }
//A final count gets returned from function
  return frequentCount; 
}


console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]))