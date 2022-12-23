function callMultipleTimes(func) { 
    func();
    func();
    func();
}

function sayHello() { 
    console.log("Hi, There!");
}

//callMultipleTimes(sayHello);// here greetMe is a call back funtions.

function makeAlert() { 
    console.log("alert!")
    alert("Test Alert!")
}

setTimeout(function () { 
    alert("welcome!");
},2000);