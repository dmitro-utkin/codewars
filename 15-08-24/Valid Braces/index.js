// Write a function that takes a string of braces,
// and determines if the order of the braces is valid.
// It should return true if the string is valid,
// and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata,
// but introduces new characters: brackets [],
// and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only
// consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if
// all braces are matched with the correct brace.

// Examples

console.log(validBraces("(){}[]")); //=>  True
console.log(validBraces("([{}])")); //=>  True
console.log(validBraces("(}")); //=>  False
console.log(validBraces("[(])")); //=>  False
console.log(validBraces("[({})](]")); //=>  False

// -------------------------

// input string
// output boolean

// algo
// 1. split the string
// 2. iterate through the array
// 3. count the number of opening and closing brackets
// 4. return false if the number of opening brackets is greater than the number of closing brackets
// 5. return true if the number of opening brackets is equal to the number of closing brackets

// v1
function validBraces(braces) {
  const matchingBraces = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  let stack = [];

  for (let char of braces) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      let lastOpenBrace = stack.pop();
      if (matchingBraces[char] !== lastOpenBrace) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
