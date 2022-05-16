// Return calculated age given current year & year of birth
let ageCalculator = function(name, yearOfBirth, currentYear) {
  return `${name} is ${currentYear - yearOfBirth} years old.`;
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));