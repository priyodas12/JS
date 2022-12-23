let fitnessData = {
    stepCountDaily: 3000,
    stepCountWeekly: 89000,
    heartBeat: "82bpm",
    spo2: "98%",
    avgCalBurn: "350Kcal",
    temp: 36.8,
    id: 2345,
    23:" twenty three "
}
//directly access to property values.
for (key in fitnessData) { 
    console.log(key);
}
//print key value pair.
for (let key in fitnessData) { 
    console.log(`${key} : ${fitnessData[key]}`);
}