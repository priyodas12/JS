function callMultipleTimes(func) { 
    func();
    func();
    func();
}

function greetMe() { 
    console.log("Hi, There!");
}

callMultipleTimes(greetMe);