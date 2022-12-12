/*JS Data Types: undefined- just decleared the variable but not set any data
, null- nothing set, boolean- Ture/False, string, symbol, number, object*/

//global scope
var myName="priyo";
console.log(myName);
myName=10;
console.log(myName);
myName=true;
console.log(myName);

// block scope
let myOrg="INFY";
console.log(myOrg);
myOrg=true;
console.log(myOrg);

//similar to constant,never changed
const mySim="VI";
console.log(mySim)
//mySim="JIO";-->TypeError: Assignment to constant variable.
console.log(mySim)

var a;
var b=10;
console.log(a,b);
a=12;
b=a;
console.log(a,b);