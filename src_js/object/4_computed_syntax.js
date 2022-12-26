const role1 = "Developer";
const person1 = "Rohom";
const role2 = "Devops";
const person2 = "James";

const team = {};
team[person1] = role1;
team[person2] = role2;
team[1 + 3] = "its break time!";

console.log(team);
