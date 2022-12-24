const feline = {
  legs: 4,
  family: "Felide",
};

const canine = {
  family: "Canine",
  furry: true,
};

const dog = {
  ...canine,
  isPet: true,
  adorable: true,
};

console.log(dog);

const houseCat = {
  ...feline,
  isGummpy: true,
  personality: "unpredictable",
};

console.log(houseCat);
