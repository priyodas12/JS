const words = ["bag", "log", "tag", "mug", "jug", "jogger"];
//every function checks on the consitions for every elemnts is passes all elements  then return true;
let isEveryELementLength3 = words.every((w) => w.length === 3);

console.log(isEveryELementLength3); //false as last element length is greater than 3
