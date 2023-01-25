console.log("first!");
setTimeout(() => {
  console.log("third!!!---executed by browser, JS has not capability here!");
}, 3000);
console.log("second!!");
