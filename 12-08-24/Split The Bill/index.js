// You're in a restaurant with your friends and it's time to go,
//  but there's still one big problem...the bill. Who will pay what? 
//  Lucky for you, you've got your computer handy! One simple 
//  function and the bill is paid——fairly, too!

// The function should take one parameter: an object/dict
//  with two or more name-value pairs that represent the members 
//  of the group and the amount spent by each.

// Your function should return an object/dict with the same names, 
// showing how much money the members should pay or receive.

// Further points:

// The values should be positive numbers if the person should 
// receive money from the group, negative numbers 
// if they owe money to the group.
// If value is a decimal, round to two decimal places.
// Translations and comments (and upvotes!) welcome.

// Example
// 3 friends go out together: A spends £20, B spends £15, and C spends £10. 
// The function should return an object/dict showing that A should receive £5, 
// B should receive £0, and C should pay £5.

var group = {
    A: 20, 
    B: 15, 
    C: 10
}

console.log(splitTheBill(group)) // returns {A: 5, B: 0, C: -5}

// input object
// output object

// algo
// 1. create an empty object
// 2. iterate through the object
// 3. sum the values
// 4. check if the value is greater than 0
// 5. check if the value is decimal
// 6. if the value is decimal, round to two decimal places
// 7. divide the sum by the number of keys
// 8. compare the divided value to the value of the key
// 9. if the divided value is greater than the key, add the difference to the object
// 10. if the divided value is less than the key, subtract the difference from the object
// 11. return the object

// v1
// function splitTheBill(x) {
//   let sum = 0;
//   let obj = {};

//   // Calculate the sum of the values
//   for (let key in x) {
//     sum += x[key];
//   }

//   // Calculate the amount each person should pay or receive
//   const average = sum / Object.keys(x).length;
//   for (let key in x) {
//     obj[key] = parseFloat((x[key] - average).toFixed(2));
//   }

//   return obj;
// }

// v2
// function splitTheBill(x) {
//   let sum = 0;
//   let obj = {};

//   for (let i = 0; i < Object.keys(x).length; i++) {
//     sum += x[Object.keys(x)[i]];
//   }
//   console.log(sum);

//   const average = sum / Object.keys(x).length;
//   console.log(average);

//   for (let i = 0; i < Object.keys(x).length; i++) {
//     obj[Object.keys(x)[i]] = parseFloat((x[Object.keys(x)[i]] - average).toFixed(2));
//   }
//   console.log(obj);
//   return obj;
// }

// v3
// function splitTheBill(x) {
//   const sum = Object.values(x).reduce((a, b) => a + b, 0);
//   const average = sum / Object.keys(x).length;
//   return Object.fromEntries(Object.entries(x).map(([k, v]) => [k, v - average]));
// }

// v4
function splitTheBill(x) {
  var average = 0;
  var count = 0;
  
  for(item in x){
    average += x[item];
    count++;
  }
  average = average / count;  
  
  for(item in x){
    x[item] = Math.round((x[item] - average) * 100) / 100;
  }
  
  return x;
}