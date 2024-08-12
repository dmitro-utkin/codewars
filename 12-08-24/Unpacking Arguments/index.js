// You must create a function, spread, that takes a function 
// and a list of arguments to be applied to that function. 
// You must make this function return the result of calling 
// the given function/lambda with the given arguments.

// eg:

// spread(someFunction, [1, true, "Foo", "bar"] ) 
// // is the same as...
// someFunction(1, true, "Foo", "bar")

function spread(func, args) {
  return func(...args);
}

// Приклад використання:
function someFunction(a, b, c, d) {
  return `${a}, ${b}, ${c}, ${d}`;
}

console.log(spread(someFunction, [1, true, "Foo", "bar"])); 
// Виведе: "1, true, Foo, bar"
