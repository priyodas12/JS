console.log(Math.max(2,4,15,0,1));

console.log(Math.min(2,-4,5,0,1));

console.log(Math.round(5.79929));//6

console.log(Math.floor(5.92929));//5

console.log(Math.pow(4, 6));//4096

console.log(Math.imul(3, 8))//3

console.log(Math.random());

let a = Math.random();

//console.log(a);
//console.log(Math.floor(a * 1000));

//console.log(Math.round(a * 1000));

let c=new Array(10);

for (let index = 0; index < 10; index++) {
    const b = Math.random();
    const element = Math.floor(b * 10) + 1;
    c[index] = element;
    console.log(`element: ${element}`);
}
console.log(c);

for (let i = 0; i < c.length; i++) {
    console.log("arr: " + c[i]);    
}