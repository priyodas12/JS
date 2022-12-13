var complexName="Hey there it's over 'NOW'";
console.log(complexName);

var foo="foo";
var joe=foo+"joe";

let myTeam = "Argentina";

//indexOf() operation case sensitive;
console.log(myTeam.indexOf('t'));//5
console.log(myTeam.indexOf('gen'));//2
console.log(myTeam.indexOf('o')); // -1

let myWcTeam = "Morocco";

//str[x]= x will be inclusive;
console.log(myWcTeam.slice(3));
console.log(myWcTeam.slice(4, 6));

let expressionOnFb = "Football is my favorite game!";

// string must be matched!
let changedExpression=expressionOnFb.replace("Football", "Cricket");

console.log(expressionOnFb);
console.log(changedExpression);

//-------------------String special syambol-------------------------

let testSentence1 = "hey there \n I am using \n whatsapp!";

console.log(testSentence1);

let testSentence2 = "hey there \' I \' am using \t whatsapp!";

console.log(testSentence2);

let testSentence3 = "hey there \\ I \\ am using \\ whatsapp!";

console.log(testSentence3);

let testSentence4 = "hey there \" I \" am using \t whatsapp!";

console.log(testSentence4);

//----------------------String Template Literals----------------------
let counterString = `I have counted ${4 * 5} time today: ${new Date()}`;
console.log(counterString);

let userName = "priyobrato";
console.log(`${userName.toUpperCase()}`)


