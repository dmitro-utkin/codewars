// Colour plays an important role in our lifes.
// Most of us like this colour better then another.
// User experience specialists believe that certain colours
// have certain psychological meanings for us.

// You are given a 2D array, composed of a colour and
// its 'common' association in each array element.
// The function you will write needs to return the colour as 'key'
// and association as its 'value'.

// For example:

// var array = [["white", "goodness"], ...] //returns [{white: 'goodness'}, ...]

// ----------------------------

// input: array
// output: object

// algo
// 1. create an empty object
// 2. iterate through the array
// 3. return the object

// v1
// function colourAssociation(array){
//   const arrOfObj = [];
//   for (let i = 0; i < array.length; i++) {
//     arrOfObj.push({[array[i][0]]: array[i][1]});
//   }
//   return arrOfObj
// }

// v2
// const colourAssociation = arr => arr.map(x => ({[x[0]]: x[1]}));

// v3
const colourAssociation = (arr) => {
  return arr.reduce((acc, curr) => {
    const color = curr[0];
    const association = curr[1];
    acc.push({ [color]: association });
    return acc;
  }, []);
};
console.log(
  colourAssociation([
    ["white", "goodness"],
    ["blue", "tranquility"],
  ])
);

console.log(
  colourAssociation([
    ["red", "energy"],
    ["yellow", "creativity"],
    ["brown", "friendly"],
    ["green", "growth"],
  ])
);
