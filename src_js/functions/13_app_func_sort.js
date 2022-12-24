const prices = [1200.45, 700.23, 900.56, 453.55, 22.78, 122.82];

const ascSort = prices.sort((a, b) => a - b);
console.log(`Ascending order: ${ascSort}`);

const descSort = prices.sort((a, b) => b - a);
console.log(`Descnding Order: ${descSort}`);
