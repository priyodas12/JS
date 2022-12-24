const prices = [1200.45, 700.23, 900.56, 453.55, 22.78, 122.82];

const ascSort = prices.sort((a, b) => a - b);
console.log(`Ascending order: ${ascSort}`);

const descSort = prices.sort((a, b) => b - a);
console.log(`Descending Order: ${descSort}`);

//is main arry mutated? yes its mutaed as last sorting principle.
console.log(prices);

const products = [
  {
    proudctId: 782,
    productName: "sofa",
    productPrice: 600.0,
    productOrigin: "IN",
    rating: 4.6,
  },
  {
    proudctId: 182,
    productName: "sofa",
    productPrice: 1200.98,
    productOrigin: "CA",
    rating: 2.1,
  },
  {
    proudctId: 1192,
    productName: "sofa",
    productPrice: 3630.78,
    productOrigin: "US",
    rating: 3.1,
  },
  {
    proudctId: 352,
    productName: "sofa",
    productPrice: 87432.75,
    productOrigin: "SL",
    rating: 5.0,
  },
  {
    proudctId: 722,
    productName: "sofa",
    productPrice: 279.29,
    productOrigin: "NP",
    rating: 4.1,
  },
];

products.sort((p1, p2) => p1.productPrice - p2.productPrice);

console.log(products);
