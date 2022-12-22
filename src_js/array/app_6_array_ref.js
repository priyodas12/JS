//reference typed

const eggs = ["brown", "brown"];
console.log(eggs);

eggs.push("white");
console.log(eggs);

eggs[0] = "purple";
console.log(eggs);

//eggs = ["blue", "purple"]; //Uncaught TypeError: Assignment to constant variable.


//value typed.
let a = 10;
let b = a;
console.log(a, b);

a = 12;

console.log(a, b);

