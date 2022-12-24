const numbers = [12, 33, 71, 38, 91, 82, 73];

let sumOfNumbers = numbers.reduce((accumulator, currentValue) => {
  console.log(accumulator, currentValue);
  return accumulator + currentValue;
});

console.log(sumOfNumbers);

const allNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sumOfFibboNumbers = allNums.reduce((accumulator, currentValue) => {
  console.log(accumulator, currentValue);
  return accumulator * currentValue;
});
