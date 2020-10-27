
class Item {
    constructor (name, inc, growth, cost) {
        this.name = name;
        this.inc = inc;
        this.quantity = 0;
        this.growth = growth;
        this.cost = cost * (growth ** this.quantity);
        this.temperature = inc;
        this.level = 0;
    }
}

let compost = new Item ("compost", 0.1, 1.01, 10);
let tree = new Item ("tree", 1, 1.02, 30);
let sunpanel = new Item ("sunpanel", 10, 1.03, 300);
let car = new Item ("car", 50, 1.04, 1000);
let windturbine = new Item ("windturbine", 300, 1.05, 4500);
let recycle = new Item ("recycle", 1000, 1.06, 10000);
let factory = new Item ("factory", 3000, 1.08, 20000);
let politician = new Item ("politician", 10000, 1.1, 50000);

let items = [compost, tree, sunpanel, car, windturbine, recycle, factory, politician];


console.log(sunpanel.cost, windturbine.cost);

let degreeCount = 10000;
let moneyCount = 10;

function buyItems(){
    items.forEach((element, i) => {
        document.getElementById(`${element["name"]}`).addEventListener("click", () => {
            if (moneyCount >= element["cost"]) {
                element["quantity"]++;
                moneyCount -= element["cost"];
                degreeCount -= element["temperature"];
                document.getElementsByClassName("quantity")[i].innerHTML = element["quantity"];
            }
        })
    })
}
buyItems();

function totalMoney() {
    items.forEach(element => {
        moneyCount += element["inc"] * element["quantity"];
    })
}

function click() {
    document.getElementsByClassName("terre")[0].addEventListener("click", function(){
        degreeCount--;
        moneyCount++;
        document.getElementById("money").innerHTML = moneyCount;
    });
}
click();

function stopInterval(){
    if (degreeCount == 15)
    {
        console.log('the earth is now habitable');
        clearInterval(interval);
    }
}

function frame(){
    totalMoney();
    stopInterval();
    console.log(degreeCount, moneyCount);
}

setInterval(frame, 1000);