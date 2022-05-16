// Function to return x,y coordinates based on number of cardinal direcitons
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

const finalPosition = function(moves) {
  let x = 0, y = 0;
  for (let move of moves) {
    if (move === 'north') {
      y++;
    } else if (move === 'south') {
      y--;
    } else if (move === 'east') {
      x++;
    } else if (move === 'west') {
      x--;
    }
  }
  return [x, y];
}

console.log(finalPosition(moves));