
let degreeCount = 10000;
let moneyCount = 0;


function totalDegree() {
    degreeCount--;
    console.log(degreeCount);
}

function totalMoney() {
    moneyCount++;
    console.log(moneyCount);
}

function click() {
    let click = document.querySelector("terre");
    if (click.onclick == true)
    {
        degreeCount--;
        moneyCount++;
        console.log(degreeCount, moneyCount);
    }
}

function stopInterval(){
    if (degreeCount == 15)
    {
        console.log('the earth is now habitable');
        clearInterval(interval);
    }
}

function frame(){
    totalDegree();
    totalMoney();
    click();
    stopInterval();
    console.log(degreeCount, moneyCount);
}
let interval = setInterval(frame, 1000);
