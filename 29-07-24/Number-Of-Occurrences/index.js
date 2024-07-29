// Write a function that returns the number of 
// occurrences of an element in an array.

// This function will be defined as a property of Array 
// with the help of the method Object.defineProperty, 
// which allows to define a new method directly on the
//  object (more info about that you can find on MDN).

// Examples
// let arr = [0, 1, 2, 2, 3];
// console.log(arr.numberOfOccurrences(0)) //=== 1;
// console.log(arr.numberOfOccurrences(4)) //=== 0;
// console.log(arr.numberOfOccurrences(2)) //=== 2;
// console.log(arr.numberOfOccurrences(3)) //=== 1;

// input array
// output number

// v1

Object.defineProperty(Array.prototype, 'numberOfOccurrences', {
  value: function(element) {
    return this.reduce((count, value) => (value === element ? count + 1 : count), 0);
  }
});

let arr = [0, 1, 2, 2, 3];
console.log(arr.numberOfOccurrences(0)); // 1
console.log(arr.numberOfOccurrences(4)); // 0
console.log(arr.numberOfOccurrences(2)); // 2
console.log(arr.numberOfOccurrences(3)); // 1