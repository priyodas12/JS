const votes = [
  "Y",
  "N",
  "Y",
  "N",
  "Y",
  "N",
  "Y",
  "N",
  "Y",
  "N",
  "N",
  "N",
  "Y",
  "N",
  "N",
];

const result = votes.reduce((tally, val) => {
  if (tally[val]) {
    tally[val]++;
  } else {
    tally[val] = 1;
  }
  return tally;
}, {});

console.log(result);
