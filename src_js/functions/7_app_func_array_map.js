//create new array from an existing array.

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumbers = numbers.map(function (num) {
  return num * 2;
});

const evenOrOddNumbers = numbers.map(function (n) {
  return {
    number: n,
    isEven: n % 2 == 0,
  };
});
console.log(evenOrOddNumbers);
console.log(doubledNumbers);

const words = ["abc", "yr", "wrt", "dgt", "cvf"];

const upperWords = words.map(function (w) {
  return w.toLocaleUpperCase().split("").join(".");
});

console.log(upperWords); // ['A.B.C', 'Y.R', 'W.R.T', 'D.G.T', 'C.V.F']
