const repeat = (str, times) => {
  let result = " ";
  for (let i = 0; i < times; i++) {
    result += str;
  }
  console.log("4-repeat");
  return result;
};

const scream = (str) => {
  console.log("3-scream");
  return str.toUpperCase() + "!!!";
};

const getRantText = (p) => {
  console.log("2-getRantText");
  let text = scream(p);
  let rant = repeat(text, 8);
  return rant;
};

const makeRant = (p, el) => {
  console.log("1-makeRant");
  const h5 = document.createElement("h5");
  h5.innerText = getRantText(p);
  el.appendChild(h5);
};

makeRant(" I hate icecream", document.body);
makeRant("if u have caugh,please cover mouth!", document.body);
