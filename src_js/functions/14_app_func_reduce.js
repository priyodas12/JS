// sum of all elemnts of an array
const numbers = [12, 33, 71, 38, 91, 82, 73];

let sumOfNumbers = numbers.reduce((accumulator, currentValue) => {
  console.log(accumulator, currentValue);
  return accumulator + currentValue;
});

console.log(sumOfNumbers);

/* here 0 indicates initial value if that is not provided it will consider first elements
let sumOfNumbers = numbers.reduce((accumulator, currentValue) => {
  console.log(accumulator, currentValue);
  return accumulator + currentValue;
},0);

console.log(sumOfNumbers);
*/

// multiplication value of all array elemnts.
const allNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sumOfFibboNumbers = allNums.reduce((accumulator, currentValue) => {
  console.log(accumulator, currentValue);
  return accumulator * currentValue;
});

//finding max elemnts from an array.
let maxNumber = numbers.reduce((max, currectValue) => {
  //   if (currectValue > max) return currectValue;
  //   return max;
  return Math.max(max, currectValue);
});

let minNumber = numbers.reduce((max, currectValue) => {
  //   if (currectValue > max) return currectValue;
  //   return max;
  return Math.min(max, currectValue);
});

console.log(`MaxNumber: : ${maxNumber}`);
console.log(`MinNumber: : ${minNumber}`);
