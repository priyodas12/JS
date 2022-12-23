function addition(x, y) {
    return x + y;
}
 
function substraction(x, y) { 
    return x - y;
}

function multiplication(x, y) { 
    return x * y;
}

function division(x, y) { 
    return x / y;

}
//putting functions to an array.
const operations = [addition, substraction, multiplication, division];

for (let func of operations) {
    let result = func(100, 4);
    console.log(`opearation: ${func.name} : result: ${result}`);
}
//putting function to an object
const listOps = {
    A: addition,
    S: substraction,
    M: multiplication,
    D: division
}

console.log(listOps.A(100, 2));