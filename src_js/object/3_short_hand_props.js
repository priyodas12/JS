const getStats = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce(
    (accoumulator, currentVal) => accoumulator + currentVal
  );
  const avg = sum / arr.length;

  return {
    max,
    min,
    sum,
    avg,
  };
};

const nums = [100.78, 23.83, 91.34, 20.122];

const stat = getStats(nums);

console.log(stat);
