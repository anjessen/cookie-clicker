
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
    console.log(degreeCount, moneyCount);
}
setInterval(frame, 1000);
