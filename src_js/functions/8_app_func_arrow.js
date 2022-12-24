const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const square = (x) => {
  return x * x;
};

const result = numbers.map((n) => {
  return square(n);
});

console.log(result);

const oddOrEven = numbers.map((n) => (n % 2 === 0 ? "EVEN" : "ODD"));

console.log(oddOrEven);
