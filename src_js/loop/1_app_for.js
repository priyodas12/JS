for (let i = 0; i < 10; i++) { 
    console.log("Outer Loop :" + i)
    for (let j = 10; j > 0; j -= 2) { 
        console.log(" Inner Loop " + j);
    }
}