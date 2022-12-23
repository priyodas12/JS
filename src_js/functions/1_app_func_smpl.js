function rollDice() { 
    let randomVal = Math.floor(Math.random() * 6) + 1;
    console.log(`dice value ${randomVal}`);
    return randomVal;
}

function playGame() { 
    let sum = 0;
    for (let i = 1; i<= 6 ; i++) { 
        sum+=rollDice();
    }
    if (sum > 20) {
        console.log("Won this game!")
    } else { 
        console.log("Lost this game!")
    }
}

playGame();