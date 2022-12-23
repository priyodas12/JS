const numbers = [22, 9, 11, 0, 12, 42, 1, 5];
for (let num of numbers) { 
    console.log(num);
}

const twoDnums = [
    [1, 2, 3],
    [3, 9, 2],
    [2, 9, 5]
];

for (let row of twoDnums) { 
    let sum = 0;   
    for (let num of row) { 
        sum += num;
    }
    console.log(`sum of each row elements : ${sum}`);
}