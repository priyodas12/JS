let num_one = [1, 2, 3];

let num_two = [4, 5, 6];

let num_the = [7, 8, 9];
//concatenating arrays
let nums = num_one.concat(num_two,num_the);

console.log(nums);//[1, 2, 3, 4, 5, 6, 7, 8, 9]
//reversing array
num_four = nums.reverse();

console.log(num_four);

//join
let num_five = nums.join();
num_five = ["one", "two", 1, 2].join("*");//default sepeartor ","
console.log(num_five);//9,8,7,6,5,4,3,2,1