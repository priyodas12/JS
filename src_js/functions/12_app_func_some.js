const words = ["bag", "log", "tag", "mug", "jug", "jogger"];
//check conditions for each elemnts and returns true for any of the elemnts passes.
const isAnyElementLength3 = words.some((n) => {
  return n.length === 2;
});

console.log(isAnyElementLength3);
