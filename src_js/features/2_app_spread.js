const nums = [2, 5, 9, 4];
const maxNumFromRawArray = Math.max(nums);
const maxNumWithSpread = Math.max(...nums);

console.log(maxNumFromRawArray, maxNumWithSpread); //NaN 9

function print4Elements(a, b, c, d) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}

print4Elements(10, 12, 13, 14);
/*
a 10
b 12
c 13
d 14
*/

print4Elements(nums);
/*
a [2, 5, 9, 4]
b undefined
c undefined
d undefined
*/

print4Elements(...nums);
/*
a 10
b 12
c 13
d 14
*/
const colors = ["green", "blue", "red", "yellow", "black"];
print4Elements(...colors);

/*
a green
b blue
c red
d yellow
*/
