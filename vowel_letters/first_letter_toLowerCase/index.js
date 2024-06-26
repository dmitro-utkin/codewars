// input: string
// output: string

// algo
// 1. split into substring with a space
// 2. make the first letter of each substring capitalized
// 3. join substring to string

let str = 'make the first, letter of each substring capitalized!!';
console.log(str);

let newStr = str.split(" ");
console.log(newStr);

for (let i = 0; i < newStr.length; i += 1) {
  newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1);
}
console.log(newStr);

let newString = newStr.join(" ");
console.log(newString)