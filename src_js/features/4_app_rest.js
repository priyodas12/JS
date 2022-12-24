const numbers = [12, 72, 93, 64, 81];
//here we are using rest operator
function printAll(a, b, ...c) {
  console.log(`a: ${a}`);
  console.log(`b: ${b}`);
  console.log(`c: ${c}`);
}

printAll(...numbers); //here we used spread operator
