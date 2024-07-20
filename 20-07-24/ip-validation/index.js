// Write an algorithm that will identify valid IPv4 addresses
// in dot-decimal format. IPs should be considered valid
// if they consist of four octets, with values between 0 and 255, inclusive.

// Valid inputs examples:

// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89
// Invalid input examples:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089

// input: string
// output: boolean

// algo
// 1. split the string
// 2. check if the string is valid
// 3. return the result

// -----------------

// v1
// function isValidIP(str) {
//   if (str === undefined || str.trim() === "") {
//     return false; // Повертаємо false для пустого вводу
//   }

//   let arr = str.split(".");
//   if (arr.length !== 4) {
//     return false; // Повертаємо false, якщо кількість октетів не дорівнює 4
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "" || isNaN(arr[i]) || Number(arr[i]) < 0 || Number(arr[i]) > 255 || arr[i].includes(" ") || arr[i].includes("\n") || (arr[i].length > 1 && arr[i][0] === '0' && arr[i][1] !== '.') || arr[i].includes('e')) {
//       return false; // Повертаємо false, якщо октети не відповідають критеріям IPv4
//     }
//   }
//   return true;
// }

// v2
function isValidIP(str) {
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
}



console.log(isValidIP("0.0.0.0"));
console.log(isValidIP("0.0.0.0"));
console.log(isValidIP("12.255.56.1"));
console.log(isValidIP("137.255.156.100"));
console.log(isValidIP(""));
console.log(isValidIP("abc.def.ghi.jkl"));
console.log(isValidIP("123.456.789.0"));
console.log(isValidIP("12.34.56"));
console.log(isValidIP("01.02.03.04"));
console.log(isValidIP("256.1.2.3"));
console.log(isValidIP("1.2.3.4.5"));
console.log(isValidIP("123,45,67,89"));
console.log(isValidIP("1e0.1e1.1e2.2e2"));
console.log(isValidIP(" 1.2.3.4"));
console.log(isValidIP("1.2.3.4 "));
console.log(isValidIP("12.34.56.-7"));
console.log(isValidIP("1.2.3.4\n"));
console.log(isValidIP("\n1.2.3.4"));
