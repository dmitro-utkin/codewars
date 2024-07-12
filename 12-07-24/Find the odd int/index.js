// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// input: array
// output: number

// algo
// 1. iterate through the array
// 2. filter the array
// 3. return the number

// v1
// function findOdd(A) {
//   const odd = A.filter((x) => A.filter((y) => y === x).length % 2);
//   return odd.length > 1 ? odd[0] : odd;
// } 

// v2
// function findOdd(A) {
//   let result;
//   for (let i = 0; i < A.length; i++) {
//     let count = 0;
//     for (let j = 0; j < A.length; j++) {
//       if (A[i] === A[j]) {
//         count++;
//       }
//     }
//     if (count % 2 !== 0) {
//       result = A[i];
//       break;
//     }
//   }
//   return result;
// };

// Ініціалізуємо змінну result, яка буде зберігати результат.
// Проходимо по кожному елементу масиву A за допомогою зовнішнього циклу for.
// Для кожного елемента A[i] підраховуємо кількість його повторень у масиві 
//   A за допомогою внутрішнього циклу for.
// Якщо кількість повторень елемента A[i] непарна, то ми знайшли шуканий елемент і 
//   записуємо його в змінну result, після чого виходимо з циклу за допомогою break.
// Повертаємо значення змінної result.

// v3
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

// xs.reduce((a, b) => a ^ b) - це стрілочна функція, 
// яка передається в якості колбек-функції до методу reduce().

// reduce() застосовує цю колбек-функцію до кожного елемента масиву xs, 
// накопичуючи результат у змінній a.

// Колбек-функція (a, b) => a ^ b використовує оператор побітового 
// XOR (^) для обчислення результату. Побітовий XOR має таку 

// властивість:
// a ^ 0 = a
// a ^ a = 0
// a ^ b ^ a = (a ^ a) ^ b = 0 ^ b = b

// Таким чином, якщо в масиві xs є елемент, який зустрічається непарну кількість разів,
// то після застосування reduce() саме цей елемент і буде результатом.
// Це пов'язано з тим, що всі парні елементи "анулюються" за рахунок властивості a ^ a = 0.

// Наприклад, якщо xs = [1, 1, 2, 2, 3, 3, 3], то результат буде:

// text
// 1 ^ 1 ^ 2 ^ 2 ^ 3 ^ 3 ^ 3 = 0 ^ 3 = 3

// Таким чином, ця реалізація є дуже компактною та ефективною, 
// оскільки вона використовує властивості побітового XOR для знаходження непарного елемента.

console.log(findOdd([7]));
console.log(findOdd([0]));
console.log(findOdd([1,1,2]));
console.log(findOdd([0,1,0,1,0]));
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1] ));