class Item {
    constructor (inc, quantity, growth, cost) {
        this.inc = inc;
        this.quantity = quantity;
        this.growth = growth;
        this.cost = cost * (growth ** quantity);
        this.temperature = inc;
        this.level = 0;
    }
}

let compost = new Item (0.1, 0, 1.01, 10);

let tree = new Item (1, 0, 1.02, 30);

let sunpanel = new Item (10, 0, 1.03, 300);

let car = new Item (50, 0, 1.04, 1000);

let windturbine = new Item (300, 0, 1.05, 4500);

let recycle = new Item (1000, 0, 1.06, 10000);

let factory = new Item (3000, 0, 1.08, 20000);

let politician = new Item (10000, 0, 1.1, 50000);

console.log(sunpanel.cost, windturbine.cost);

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

setInterval(frame, 1000);