let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//slice(index_inclusive,index_exclusive);
console.log(numbers.slice(0, 5));//[0, 1, 2, 3, 4]

//index from delete start,how many numbers will be deleted, numbers to be added.
numbers.splice(4, 2, "four","five");
console.log(numbers);// [0, 1, 2, 3, 'four', 'five', 6, 7, 8, 9]

numbers.splice(7, 2);
console.log(numbers);//[0, 1, 2, 3, 'four', 'five', 6, 9]