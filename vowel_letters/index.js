let str = "This website is for \n You losers LOL!";
// str.split(" ");
// console.log(str)

let newString = "";



// v1
for (let i = 0; i < str.length; i += 1) {
  const letter = str[i].toLowerCase();
  if (!["a", "e", "i", "o", "u", "y"].includes(letter)) {
    newString += str[i];
  }
}

// v2
// let res = str
//   .split("")
//   .filter(
//     (leetter) =>
//       !["a", "e", "i", "o", "u", "y"].includes(letter.toLowerCase()).join
//   );
// console.log(res)

// v3
// let newString = "";
// for (let i = 0; i < str.length; i += 1) {
//   const letter = str[i].toLowerCase();
//   if ('aeiouy'.indexOf(letter) === -1) {
//     newString += str[i];
//   }
// }

console.log(newString);
