
class Item {
    constructor (name, inc, cost) {
        this.name = name;
        this.inc = inc;
        this.quantity = 0;
        this.growth = 1.05;
        this.cost = cost;
        this.temperature = inc;
        this.level = 0;
    }
}

let compost = new Item ("compost", 0.1, 10);
let tree = new Item ("tree", 1, 30);
let sunpanel = new Item ("sunpanel", 10, 300);
let car = new Item ("car", 50, 1000);
let windturbine = new Item ("windturbine", 300, 4500);
let recycle = new Item ("recycle", 1000, 10000);
let factory = new Item ("factory", 3000, 20000);
let politician = new Item ("politician", 10000, 50000);

let items = [compost, tree, sunpanel, car, windturbine, recycle, factory, politician];

console.log(sunpanel.cost, windturbine.cost);



let degreeCount = 10000;
let moneyCount = 10;

function buyItems(){
    items.forEach((element, i) => {
        document.getElementById(`${element["name"]}`).addEventListener("click", () => {
            if (moneyCount >= element["price"]) {
                element["quantity"]++;
                moneyCount -= element["price"];
                degreeCount -= element["temperature"];
                document.getElementsByClassName("quantity")[i].innerHTML = element["quantity"];
                document.getElementsByClassName("price")[i].innerHTML = element["price"];

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
    document.getElementById("money").innerHTML = Math.round(moneyCount);
    console.log(degreeCount, moneyCount);
    items.forEach((element, i) => {
        element["price"] = Math.round(element["cost"] * (element["growth"] ** element["quantity"]));
        document.getElementsByClassName("price")[i].innerHTML = element["price"];
        document.getElementsByClassName("lvl")[i].innerHTML = element["level"];
        
    })
}

setInterval(frame, 1000);