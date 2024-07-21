// There is an array with some numbers. All numbers
// are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// -----------

// input: array
// output: number

// algo
// 1. filter the array
// 2. find the unique number
// 3. return the unique number

// v1 (для невеликих масивів)
// function findUniq(arr) {
//   return arr.filter((x) =>
//     arr.filter((y) => y === x).length === 1)[0];
// }

// v2
// function findUniq(arr) {
//   let count = {};

//   for (let num of arr) {
//     // Конвертація числа до рядка для забезпечення єднання ключа
//     let key = (num === 0 ? '0' : num.toString());
//     count[key] = (count[key] || 0) + 1;
//   }

//   for (let key in count) {
//     if (count[key] === 1) {
//       return parseFloat(key); // Конвертація рядка назад до числа
//     }
//   }
// }

console.log(findUniq([1, 1, 1, 2, 1, 1])); // === 2
console.log(findUniq([0, 0, 0.55, 0, 0])); // === 0.55
console.log(findUniq([1, 0, 0]));
console.log(findUniq([0, 1, 0]));
console.log(findUniq([0, 0, 1]));
console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([1, 1, 2, 1, 1]));
console.log(findUniq([3, 10, 3, 3, 3]));

// Звичайна унікальна функція findUniq приймає масив чисел 
// arr і шукає унікальний елемент у масиві. Ось пояснення роботи функції 
// крок за кроком:

// Створення об'єкту count для підрахунку кількості кожного елемента в масиві.

// Проходимося по кожному елементу num масиву arr.

// Для кожного числа num ми додаємо або інкрементуємо значення 
// в об'єкті count за допомогою ключа num. Це допомагає підрахувати кількість 
// кожного унікального елемента у масиві.

// Після завершення циклу ми перевіряємо об'єкт count за допомогою ключів key, 
// які відповідають унікальним елементам.

// Якщо зустрічається унікальний елемент (тобто кількість його зустрічань дорівнює 1),
//  то повертаємо цей елемент. При цьому, оскільки ключі об'єкта є рядками, 
//  ми використовуємо parseInt для перетворення рядка на ціле число.

// Ця функція дозволяє швидко і просто знайти унікальний елемент в масиві, 
// навіть якщо він великий,

// v3
// function findUniq(arr) {
//   arr.sort((a,b)=>a-b);
//   return arr[0]==arr[1]?arr.pop():arr[0]
// }

// v4
// function findUniq(arr) {
//   return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
// }