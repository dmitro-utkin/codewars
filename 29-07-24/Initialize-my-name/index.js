// Some people just have a first name; 
// some people have first and last names 
// and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).

// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

// -------------------------------------------------------------------

// algo
// 1. split the string
// 2. check the length of the string
// 3. if the length is 1, return the string
// 4. if the length is 2, return the string
// 5. if the length is 3 or more, 
//    return the string with the first and 
//    the last name separated by a big middle words 

// v1
function initializeNames(name) {
  const str = name.split(' ');
  if (str.length > 2) {
    for (let n = 1; n < str.length - 1; n++) {
      str[n] = str[n].charAt(0) + '.';
    }
  }
  
  return str.join(' ');
}

console.log(initializeNames('Jack Ryan'));
console.log(initializeNames('Lois Mary Lane'));
console.log(initializeNames('Dimitri'));
console.log(initializeNames('Alice Betty Catherine Davis'));
