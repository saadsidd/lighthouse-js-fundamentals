// Function to create array of increasing numbers at a given step
let range = function(start, end, step) {
  let numbers = [];
  if ((start === undefined || end === undefined || step === undefined) || start > end || step <= 0) {
    return [];
  } else {
    for (let i = start; i <= end; i += step) {
      numbers.push(i);
    }
    return numbers;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(20, 12, 1));
console.log(range(3, undefined, 1));