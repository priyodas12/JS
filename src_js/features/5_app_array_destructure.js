const names = ["Robin", "Makou", "Devis", "Mike", "Tommas"];

//before array destructuring
// const gold = names[0];
// const silver = names[1];
// const bronze = names[2];

const [gold, silver, bronze] = names;

const [first, , , fourth] = names;

const [winner, ...others] = names;

console.log(gold, silver, bronze);
console.log(first, fourth);
console.log(winner, others);
