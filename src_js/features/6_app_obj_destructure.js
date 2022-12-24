const country = {
  name: "India",
  capital: "Delhi",
  currency: "Rupee",
  avgTemp: 40,
  gdp: 6.4,
};

//const { capital, gdp } = country;
//renaming the destructuring
const { name: nation } = country;

//console.log(`Capital :${capital} ,GDP: ${gdp}`);
console.log(nation);
