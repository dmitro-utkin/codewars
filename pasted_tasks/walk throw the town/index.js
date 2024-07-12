// v1
// function isValidWalk(direction) {
//   if (direction.length !== 10) return false;
//   let x = 0;
//   let y = 0;
//   for (let i = 0; i < direction.length; i++) {
//     if (direction[i] === 'n') y++;
//     if (direction[i] === 's') y--;
//     if (direction[i] === 'e') x++;
//     if (direction[i] === 'w') x--;
//   }
//   return x === 0 && y === 0;
// }

// v3
function isValidWalk(direction) {
  if (direction.length !== 10) return false;
  let x = 0, y = 0;
  for (let i = 0; i < direction.length;) {
    const dir = direction[i++];
    y += {n: 1, s: -1}[dir] || 0;
    x += {e: 1, w: -1}[dir] || 0;
  }
  return x === 0 && y === 0;
}

const walkDirections = ['n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 's'];

console.log(isValidWalk(walkDirections))