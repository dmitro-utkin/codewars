// Description
// You have clothes international size as text (xs, s, xxl).
// Your goal is to return European number size as a number from that size.

// Notice that there is arbitrary amount of modifiers (x),
// excluding m size, and input can be any string.

// Linearity
// Base size for medium (m) is 38.
// (then, small (s) is 36, and large (l) is 40)

// The scale is linear; modifier x continues that by adding or
// subtracting 2 from resulting size.

// (For sizes where x modifier makes total size negative,
//   treat that as OK, and return negative size)

// Invalid cases
// Function should handle wrong/invalid sizes.

// Valid input has any base size (s/m/l) and any
// amount of modifiers (x) before base size (like xxl).
// Notice that you cannot apply modifier for m size,
// consider that case as invalid!
// Anything else is disallowed and should be considered
// as invalid (None for Python, 0, false for Go, null for JavaScript).

// Invalid examples: xxx, sss, xm, other string

// Valid Examples
// xs: 34
// s: 36
// m: 38
// l: 40
// xl: 42

// --------------

// input: string
// output: number

// algo
// 1. split the string
// 2. convert the string to number
// 3. return the number

// v1
// function sizeToNumber(size) {
//   const sizes = {
//     xs: 34,
//     s: 36,
//     m: 38,
//     l: 40,
//     xl: 42
//   };
//   if (sizes[size]) {
//     return sizes[size];
//   }

//   return 0 ?? null ;
// }

// v2
// function sizeToNumber(size) {

//   let baseSize = 38;

//   let xCount = size.match(/x/g) ? size.match(/x/g).length : 0;

//   if (size.toLowerCase() === 's') {
//     baseSize = 36;
//   } else if (size.toLowerCase() === 'l') {
//     baseSize = 40;
//   } else if (size.toLowerCase() === 'm' && xCount > 0) { // Недопустимо застосувати модифікатор x до m
//     return null;
//   } else if (size.toLowerCase().includes('m')) { // Недопустимо використовувати m разом з іншим базовим розміром
//     return null;
//   }

//   if (xCount < 0) { // Розмір стає від'ємним, якщо результат вираження менше нуля
//     return baseSize - (2 * Math.abs(xCount));
//   } else {
//     return baseSize + (2 * xCount);
//   }
// }

// v3
// function sizeToNumber(size) {
//   const sizes = {
//     xxxs: 30,
//     xxs: 32,
//     xs: 34,
//     s: 36,
//     m: 38,
//     l: 40,
//     xl: 42,
//     xxl: 44,
//     xxxl: 46,
//   };

//   const baseSize = sizes[size.toLowerCase()];
//   if (baseSize === undefined) return null; // Повертаємо null, якщо базовий розмір не знайдено

//   const xCount = (size.match(/x/g) || []).length;
//   return baseSize + (xCount > 0 ? xCount * 2 : 0);
// }

// v2
function sizeToNumber(size) {
  if (size == "s") return 36;
  if (size == "m") return 38;
  if (size == "l") return 40;
  const x = size.match(/x/g)?.length;
  if (/^x+s$/.test(size)) return 36 - (x * 2);
  if (/^x+l$/.test(size)) return 40 + (x * 2);
  return null
}

console.log(sizeToNumber("xxxs"), 34, "Extra small");
console.log(sizeToNumber("xxs"), 34, "Extra small");
console.log(sizeToNumber("xs"), 34, "Extra small");
console.log(sizeToNumber("s"), 36, "Small size");
console.log(sizeToNumber("m"), 38, "Medium size");
console.log(sizeToNumber("l"), 40, "Large size");
console.log(sizeToNumber("xl"), 42, "Extra large");
console.log(sizeToNumber("xxl"), 34, "Extra large");
console.log(sizeToNumber("xxxl"), 34, "Extra large");
console.log(sizeToNumber("xxxxxxxxxxl"), 34, "Extra large");

// console.log(sizeToNumber(""))
// console.log(sizeToNumber("xm"))
// console.log(sizeToNumber("xxxm"))
// console.log(sizeToNumber("xxxx"))
// console.log(sizeToNumber("ssss"))
// console.log(sizeToNumber("hello world"))
// console.log(sizeToNumber("sm"))
// console.log(sizeToNumber("ml"))
// console.log(sizeToNumber("lm"))
