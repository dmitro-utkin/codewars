// You are fleeing from enemies through a maze.
// You need to reach the exit through many rooms that
// are laid out in a straight line.

// Some rooms have a light bulb. If the light bulb is lit
// when you enter the room, the enemy will see you and you will be caught.
// In other words, you can only walk in the darkness.

// Fortunately, the status of these bulbs (on/off)
// is switched automatically every minute. So you have a chance to go through the maze,
// if the lightbulbs are turned off at the right time.

// You have to be constantly on the move, otherwise the enemy will catch up to you.

// Specifications
// The rooms are represented by a string, e.g. "xo oxox".

// 'x' means there is a bulb in the room, and its initial status is off
// 'o' means there is a bulb in the room, and its initial status is on
// ' '(space) means a room without bulb, it is always dark.
// Your task is to determine if you can go through the maze. Return true if you can, false otherwise.

// Notes
// Your initial position is at the leftmost room; the exit position is at the rightmost.
// Your moving speed is 1 minute per room. You have to keep moving constantly, i.e.
// you cannot wait for the next room to become dark.
// You have to start moving immediately.
// Examples
// For "xo oxox", the output should be true:
// step 0 :  xo oxox
//           ^ <--------You are here
// step 1 :  ox xoxo
//            ^ <--------You are here
// step 2 :  xo oxox
//             ^ <--------You are here
// step 3 :  ox xoxo
//              ^ <--------You are here
// step 4 :  xo oxox
//               ^ <--------You are here
// step 5 :  ox xoxo
//                ^ <--------You are here
// step 6 :  xo oxox
//                 ^ <--------You are here
// step 7 :  ox xoxo
//                  ^ <--------You've go through the maze :)
// For "xo  oxox", the output should be false:

// step 0 :  xo  oxox
//           ^ <--------You are here
// step 1 :  ox  xoxo
//            ^ <--------You are here
// step 2 :  xo  oxox
//             ^ <--------You are here
// step 3 :  ox  xoxo
//              ^ <--------You are here
// step 4 :  xo  oxox
//               ^ <--------You were caught by the enemy :(

// ---------------------

// input string
// output boolean

// algo
// 1. split the string
// 2. iterate through the array
// 3. if the array does not includes the string
// 4. return true
// 5. return false

// // v1
// function bulbMaze(map){
//   const pos = ['x', 'o']
//   const arr = [...map]
//   const result = arr.map((el, i) => el === ' ' || el === pos[i % 2])
//   return result.every(el => el === true)
// }

// v2
// function bulbMaze(map) {
//   //input is a string
//   //bulb turns on and off each minute ('x' for on, 'o' for off)
//   //blank space has no bulb
//   //each step takes a minute

//   //convert to array
//   let maze = map.split("");
//   //iterate thru string turning bulbs on and off each step
//   for (let i = 0; i < maze.length; i++) {
//     //check if we walk in a bright room (bulb is on) and get caught
//     if (maze[i] === "o") return false;
//     maze = maze.map((room) => {
//       if (room === "x") return "o";
//       if (room === "o") return "x";
//       else return " ";
//     });
//   }
//   //return true or false (true if can go through maze without getting caught)
//   return true;
// }

// v3
function bulbMaze(maze) {
  //coding and coding..
  for (let i = 0; i < maze.length; ++i) {
    const bulb = maze[i];

    if (bulb === 'o' && i % 2 === 0) {
      return false;
    }

    if (bulb === 'x' && i % 2 === 1) {
      return false;
    }
  }

  return true;
}

console.log(bulbMaze("xo oxox"));
console.log(bulbMaze("xo  oxox"));
