// In software engineering, the singleton pattern is a design pattern 
// that restricts the instantiation of a class to one object. 
// This is useful when exactly one object is needed to coordinate actions 
// across the system.

// Create an Singleton pattern, so there is one object in system.

// Example:


// ------------------------------

// input: object
// output: object

// algo
// 1. create an object
// 2. return the object

// v1
// class Singleton {
//   constructor() {
//     if (!Singleton.instance) {
//       Singleton.instance = this;
//     }
//     return Singleton.instance;
//   }
// }


// v2
var Singleton = function(){
  if (!Singleton.instance) {
    Singleton.instance = this;
  }
  return Singleton.instance;
};



var obj1 = new Singleton();
var obj2 = new Singleton();
console.log(obj1 === obj2); // => true
console.log(obj1.test = 1);
console.log(obj2.test); // => 1