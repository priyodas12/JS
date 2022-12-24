let randomStr = ["abcd bc nv", "bcv qf jek", "iwk kfhj abc", "qac rvc abc"];

const isPresent = randomStr.find((str) => {
  return str.includes("abc");
});

console.log(isPresent);

const isPresentAnywhere = randomStr.find((str) => {
  return str.indexOf("abc") >= 0;
});

console.log(isPresentAnywhere);
