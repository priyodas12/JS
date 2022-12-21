let s1 = ["abc", "xys", "wef", "ave", "deg", "lbn"];
//defautlt sort is string character sort.
console.log(s1);//  ['abc', 'xys', 'wef', 'ave', 'deg', 'lbn']
s1.sort();
console.log(s1);//  ['abc', 'ave', 'deg', 'lbn', 'wef', 'xys']

let n1 = [54000, 12111, 111, 321, 14, 1000000];

n1.sort();
console.log(n1);//[1000000, 111, 12111, 14, 321, 54000]=> its started sorting with 1st character.

