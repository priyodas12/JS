const number = Math.floor(Math.random() * 10);
//console.log(number);
let guessNum = Math.floor(Math.random() * 10);
//console.log(guessNum);
var counter = 1;
while (true) { 
    console.log("Not Matched!:" + number + "," + guessNum);
    counter++;
    if (number === guessNum) { 
        break;
    }
    guessNum = Math.floor(Math.random() * 10);
}
console.log("Matched!:" + number + "," + guessNum);
console.log(counter)
console.log("Matching Probability: "+(1/counter))