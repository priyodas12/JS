const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(function (index,num) { 
    console.log(index,num * num);
})

console.log("**************** by arrow funtions **********")
numbers.forEach(num => { console.log(num*num) });