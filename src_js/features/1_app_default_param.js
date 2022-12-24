//default params must come at last in argumnet list.
function multiply(a, b = 10) {
  //   if (typeof b === "undefined") {
  //     b = 10;
  //   }
  return a * b;
}

console.log(multiply(3));
