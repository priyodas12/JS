function callMultipleTimes(func) { 
    func();
    func();
    func();
}

function sayHello() { 
    console.log("Hi, There!");
}

callMultipleTimes(greetMe);// here greetMe is a call back funtions.