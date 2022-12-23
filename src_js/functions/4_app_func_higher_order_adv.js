//funtions takes funtion as argument.

function callMultipleTimes(func) { 
    func();
    func();
    func();
}

function greetMe() { 
    console.log("Hi, There!");
}

//callMultipleTimes(greetMe);


// return type as a function.
function multiplyBy(num){ 
    return function (x) { 
        return x * num;
    }
}
const a = multiplyBy(4);

let result=a(30);

console.log(result);


