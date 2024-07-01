// input: boo;ean
// output: string

// algo
// 1. return 'Yes' if bool is true
// 2. return 'No' if bool is false

function boolToWord( bool ){
  return bool ? 'Yes' : 'No';
}

console.log(boolToWord(true))