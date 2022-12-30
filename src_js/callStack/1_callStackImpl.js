const multiply = (a, b) => {
  console.log("3 - multiply");
  return a * b;
};

const square = (x, y) => {
  console.log("2 - square");
  return multiply(x, y);
};

const isRightAngle = (i, j, k) => {
  console.log("1 - isRightAngle");
  return square(i) + square(j) === square(k);
};

isRightAngle(3, 4, 5);
console.log("finish");
