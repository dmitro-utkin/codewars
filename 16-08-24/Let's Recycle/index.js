// Task
// You will be given a list of objects. Each object has type, 
// material, and possibly secondMaterial. 
// The existing materials are: paper, glass, organic, and plastic.

// Your job is to sort these objects across the 4 recycling bins 
// according to their material (and secondMaterial if it's present), 
//   by listing the type's of objects that should go into those bins.

// Notes
// The bins should come in the same order as the materials listed above
// All bins should be listed in the output, even if some of them are empty
// If an object is made of two materials, its type should be listed in both of the respective bins
// The order of the type's in each bin should be the same as the order
// of their respective objects was in the input list

// Example

const input = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]

// output = [
//   ["wine bottle", "amazon box", "beer bottle"],
//   ["wine bottle", "beer bottle"],
//   ["rotten apples", "out of date yogurt"],
//   ["out of date yogurt"]
// ]

// ------------------------------------
// input: array of objects
// output: array of arrays
// algo 
// 1. create an empty array
// 2. iterate through the array
// 3. push the type to the array
// 4. return the array
// ------------------------------------

// v1
// function recycle(arr) {
//   const paper = [];
//   const glass = [];
//   const organic = [];
//   const plastic = [];

//   for (let obj of arr) {
//     if (obj.material === 'paper' || (obj.secondMaterial && obj.secondMaterial === 'paper')) {
//       paper.push(obj.type);
//     } 
//     if (obj.material === 'glass' || (obj.secondMaterial && obj.secondMaterial === 'glass')) {
//       glass.push(obj.type);
//     } 
//     if (obj.material === 'organic' || (obj.secondMaterial && obj.secondMaterial === 'organic')) {
//       organic.push(obj.type);
//     } 
//     if (obj.material === 'plastic' || (obj.secondMaterial && obj.secondMaterial === 'plastic')) {
//       plastic.push(obj.type);
//     }
//   }
  
//   return [paper, glass, organic, plastic];
// }

// v2
// function recycle(arr) {
//   const bins = {
//     paper: [],
//     glass: [],
//     organic: [],
//     plastic: []
//   };

//   for (let obj of arr) {
//     if (obj.material === 'paper' || obj.secondMaterial === 'paper') {
//       bins.paper.push(obj.type);
//     } 
//     if (obj.material === 'glass' || obj.secondMaterial === 'glass') {
//       bins.glass.push(obj.type);
//     } 
//     if (obj.material === 'organic' || obj.secondMaterial === 'organic') {
//       bins.organic.push(obj.type);
//     } 
//     if (obj.material === 'plastic' || obj.secondMaterial === 'plastic') {
//       bins.plastic.push(obj.type);
//     }
//   }
  
//   return [bins.paper, bins.glass, bins.organic, bins.plastic];
// }

// v3
// function recycle(arr) {
//   const bins = ['paper', 'glass', 'organic', 'plastic'];
//   console.log('Input:', arr);
//   const recycledBins = bins.map(bin => {
//     console.log(`Filtering for bin: ${bin}`);
//     const filteredArr = arr
//       .filter(obj => obj.material === bin || (obj.secondMaterial && obj.secondMaterial === bin));
//     console.log(`Filtered array for bin ${bin}:`, filteredArr);
//     const recycledTypes = filteredArr.map(obj => obj.type);
//     console.log(`Recycled types for bin ${bin}:`, recycledTypes);
//     return recycledTypes;
//   });
//   console.log('Output:', recycledBins);
//   return recycledBins;
//   return bins.map(bin => arr
//     .filter(obj => obj.material === bin || (obj.secondMaterial && obj.secondMaterial === bin))
//     .map(obj => obj.type));
// }


// v4
// function recycle(arr) {
//   let paper = [], glass = [], organic = [], plastic = [];

//   arr.forEach(obj => {  
//     if(obj.material === 'paper' || obj.secondMaterial === 'paper' ) paper.push(obj.type)
//     if(obj.material === 'glass' || obj.secondMaterial === 'glass') glass.push(obj.type)
//     if(obj.material === 'organic' || obj.secondMaterial === 'organic') organic.push(obj.type)
//     if(obj.material === 'plastic' || obj.secondMaterial === 'plastic') plastic.push(obj.type)
//   });

//   return [paper, glass, organic, plastic]
// }


// console.log(recycle(input))

// --------------------------------------------
// --------------------------------------------
// --------------------------------------------
// --------------------------------------------
// --------------------------------------------
// --------------------------------------------
// --------------------------------------------

