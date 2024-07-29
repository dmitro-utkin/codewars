// Your task is to write a function called valid_spacing()
// or validSpacing() which checks if a string has valid spacing.
// The function should return either true or false
// (or the corresponding value in each language).

// For this kata, the definition of valid spacing is
// one space between words, and no leading or trailing spaces.
// Words can be any consecutive sequence of non space characters.
// Below are some examples of what the function should return:

// * 'Hello world'   => true
// * ' Hello world'  => false
// * 'Hello world  ' => false
// * 'Hello  world'  => false
// * 'Hello'         => true

// Even though there are no spaces, it is still valid because none are needed:
// * 'Helloworld'    => true
// * 'Helloworld '   => false
// * ' '             => false
// * ''              => true

// input: string
// output: boolean

// algo
// 1. split the string
// 2. check if the array includes only spaces
// 3. return the boolean

// v1
// function validSpacing(s) {
//   return s === s.trim() && !s.includes('  ');
// }

// v2
function validSpacing(s) {
  if (s == "")
    return true
  else
    return !s.split(" ").includes("")
}

console.log(validSpacing("Hello world")); //=> true
console.log(validSpacing(" Hello world")); //=> false
console.log(validSpacing("Hello world  ")); //=> false
console.log(validSpacing("Hello  world")); //=> false
console.log(validSpacing("Hello")); //=> true
console.log(validSpacing("Helloworld")); //=> true
console.log(validSpacing("Helloworld ")); //=> false
console.log(validSpacing(" ")); //=> false
console.log(validSpacing("")); //=> true
