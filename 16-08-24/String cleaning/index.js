// Your boss decided to save money by purchasing some cut-rate 
// optical character recognition software for scanning in the text
//  of old novels to your database. At first it seems to capture words okay, 
//  but you quickly notice that it throws in a lot of numbers at random places in the text.

// Examples (input -> output)



// Your harried co-workers are looking to you for a solution to take this
// garbled text and remove all of the numbers. Your program will take in 
// a string and clean out all numeric characters, and return a string with 
// spacing and special characters ~#$%^&!@*():;"'.,? all intact.

// -------------------------------------------------

// input: string
// output: string

// algo
// 1. split the string
// 2. filter the array
// 3. return the result

// v1
// const stringClean = (str) => {
//   return str
//     .split("")
//     .filter((el) => !/[0-9]/.test(el))
//     .join("");
// }

// v2 
function stringClean(str) {
  return str.replace(/[0-9]/g, '');
}

console.log(stringClean('! !'))                 //-> '! !'
console.log(stringClean('123456789'))           //-> ''
console.log(stringClean('This looks5 gr2ea8t!')) //-> 'This looks great!'

// Ця функція stringClean приймає рядок str та 
// здійснює наступні кроки для очищення рядка від цифр:

// .split("") : Розбиває вхідний рядок на масив окремих символів.
// .filter((el) => !/[0-9]/.test(el)) : Використовує метод filter 
//   для відфільтровування масиву окремих символів. При цьому за допомогою 
//   RegExp /[0-9]/ перевіряється, чи символ є цифрою використовуючи метод test.
//   У випадку, якщо символ не є цифрою, він залишається в масиві.
// .join("") : Повертає фінальний рядок, об'єднуючи відфільтрований масив символів у рядок без цифр.
// Отже, вираз /[0-9]/.test(el) перевіряє, чи символ el є цифрою, повертаючи true, якщо це так, і false, якщо ні.