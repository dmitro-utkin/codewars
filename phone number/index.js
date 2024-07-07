const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,];

// v1
// const phone = (number) => {
//   const code = `(${number[0]}${number[1]}${number[2]});`;
//   const firstPart = `${number[3]}${number[4]}${number[5]}`;
//   const secondPart = `${number[6]}${number[7]}`;
//   const thirdPart = `${number[8]}${number[9]}`
//   return `${code} ${firstPart}-${secondPart}-${thirdPart}`
// };

// v2
const phoneNumber = (numbers) => {
  let formattedNumber = '(xxx) xxx-xx-xx';
  for (let i of numbers.keys()) {
    formattedNumber = formattedNumber.replace('x', numbers[i]);
  }
  return formattedNumber;
}

console.log(phoneNumber(numbers));
