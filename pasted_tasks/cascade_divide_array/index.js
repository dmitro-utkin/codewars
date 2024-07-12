const arr = [1, 2, 3, 4]; // -> shold be [[1, 2], [2, 3], [3, 4],]

// algo
// 1. make an empty array
// 2. iterate through the  array
// 3. make an empty array
// 4. iterate through the array
// 5. push the array into the empty array
// 6. return the array

const cascadeDivideArray = (arr, n) => {
  let res = [];
  for (let i = 0; i <= arr.length - n; i += 1) {
    // console.log(i);
    let temp = [];
    for (let j = i; j < i + n; j += 1) {
      temp.push(arr[j]);
    }
    res.push(temp);
  }
  return res;
};

console.log(cascadeDivideArray(arr, 2));
console.log(cascadeDivideArray(arr, 3));
