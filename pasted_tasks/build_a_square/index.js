// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

// input: number
// output: string

// algo
// 1. make an empty string
// 2. make a loop in a loop
// 3. add '+' to the string
// 4. go to the next line
// 5. return the string
function generateShape(integer){
  let str = '';

  for (let i = 0; i < integer; i++) {
    for (let j = 0; j < integer; j++) {
      str += '+ ';
    }
    str += '\n';
  }

  return str;
}

console.log(generateShape(5))