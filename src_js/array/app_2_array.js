//mutable: altering array data.
let colors = ["blue", "yellow", "orange", "black", "white"];    

//atering existing data.
colors[3] = "violet";
colors[6] = "pink";

console.log(colors);//['blue', 'yellow', 'orange', 'violet', 'white', empty, 'pink']

//Push: add to the end.
colors.push("red");
console.log(colors);//['blue', 'yellow', 'orange', 'violet', 'white', empty, 'pink', 'red']

//Pop: remove from end.
colors.pop();
console.log(colors);//['blue', 'yellow', 'orange', 'violet', 'white', empty, 'pink']

//Shift: remove from start
colors.shift()
console.log(colors);//['yellow', 'orange', 'violet', 'white', empty, 'pink']

//UnShift: add to start.
colors.unshift("mazenda");
console.log(colors);//['mazenda', 'yellow', 'orange', 'violet', 'white', empty, 'pink']