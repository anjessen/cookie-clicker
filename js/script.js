
class Item {
    constructor (inc, growth, cost) {
        this.inc = inc;
        this.quantity = 0;
        this.growth = growth;
        this.cost = cost * (growth ** quantity);
        this.temperature = inc;
        this.level = 0;
    }
}

let compost = new Item (0.1, 1.01, 10);
let tree = new Item (1, 1.02, 30);
let sunpanel = new Item (10, 1.03, 300);
let car = new Item (50, 1.04, 1000);
let windturbine = new Item (300, 1.05, 4500);
let recycle = new Item (1000, 1.06, 10000);
let factory = new Item (3000, 1.08, 20000);
let politician = new Item (10000, 1.1, 50000);

let items = [compost, tree, sunpanel, car, windturbine, recycle, factory, politician];


console.log(sunpanel.cost, windturbine.cost);

let degreeCount = 10000;
let moneyCount = 0;

items.forEach((element, i) => {
    document.getElementById(`${element}`).addEventListener("click", () => {
        if (moneyCount >= element["cost"]) {
            element["quantity"]++;
            moneyCount -= element["cost"];
            degreeCount -= element["temperature"];
        }
    })
})


function totalMoney() {
    items.forEach(element => {
        moneyCount += element["inc"] * element["quantity"];
    })
}

function click() {
    document.querySelector("terre").addEventListener("click", function(){
        degreeCount--;
        moneyCount++;
        console.log(degreeCount, moneyCount);
    });
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