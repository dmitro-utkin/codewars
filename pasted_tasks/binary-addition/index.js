// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

// algo 
// 0. make an empty string
// 1. sum the two numbers
// 2. convert nte number to binary
// 3. return the string

// v1
// const addBinary = (a, b) => {
//   const sum = a + b;
//   return sum.toString(2);
// }

// v2
// const addBinary = (a, b) => (a + b).toString(2);

// v3
function addBinary(a, b) {
  return (a + b).toString(2)
};

console.log(addBinary(1, 1));
console.log(addBinary(5, 9))