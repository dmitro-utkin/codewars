// Usually when you buy something, you're asked whether your credit card number, 
// phone number or answer to your most secret question is still correct. 
// However, since someone could look over your shoulder, you don't want 
// that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all 
// but the last four characters into '#'.

// Examples (input --> output):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"

// input string
// output string  

// algo
// 0. create an emty string
// 1. split the string
// 2. slice the string
// 3. return the string

// v1
// return masked string
// function maskify(cc) {
//   let maskArr = "";

//   for (let i = 0; i < cc.length - 4; i++) {
//     maskArr += "#";
//   }

//   return maskArr + cc.slice(-4);
// }

// v2
// return masked string
function maskify(cc) {
  return cc
    .slice(0, -4)
    .replace(/./g, "#") + cc.slice(-4);
}

const str1 = "4556364607935616";
const str2 = "1";
const str3 = "0000000000000000";
const str4 = "";
const str5 = "Skippy";
const str6 = "Nananananananananananananananana Batman!";


console.log(maskify(str1))
console.log(maskify(str2))
console.log(maskify(str3))
console.log(maskify(str4))
console.log(maskify(str5))
console.log(maskify(str6))
