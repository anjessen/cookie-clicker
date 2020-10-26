
let degreeCount = 20;
let moneyCount = 0;


function totalDegree() {
    degreeCount--;
    console.log(degreeCount);
}

function totalMoney() {
    moneyCount++;
    console.log(moneyCount);
}

function frame(){
    totalDegree();
    totalMoney();
}
if (degreeCount == 15)
{
    console.log(`Well done! the earth is now Habitable!`);
    break;
}
else
    setInterval(frame, 1000 / 60);