// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// input: string
// output: string

// algo
// 1. find the index of the anchor
// 2. splice the string from the index to the end
// 3. return the string

// v1
function removeUrlAnchor(url){
  return url.split("#")[0]
}

console.log(removeUrlAnchor("www.codewars.com#about"))
console.log(removeUrlAnchor("www.codewars.com?page=1"))