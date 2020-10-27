
class Item {
    constructor (name, inc, cost) {
        this.name = name;
        this.inc = inc;
        this.quantity = 0;
        this.growth = 1.2;
        this.cost = cost;
        this.temperature = inc;
        this.level = 0;
    }
}

let compost = new Item ("compost", 0.1, 10);
let tree = new Item ("tree", 1, 30);
let sunpanel = new Item ("sunpanel", 12, 250);
let car = new Item ("car", 60, 1000);
let windturbine = new Item ("windturbine", 300, 4500);
let recycle = new Item ("recycle", 1000, 10000);
let factory = new Item ("factory", 3000, 20000);
let politician = new Item ("politician", 10000, 50000);

let items = [compost, tree, sunpanel, car, windturbine, recycle, factory, politician];


class Upgrade {
    constructor (name, cost) {
        this.name = name;
        this.cost = cost;
    }
}


items.forEach((element, i) => {
    element["price"] = Math.round(element["cost"] * (element["growth"] ** element["quantity"]));
    document.getElementsByClassName("price")[i].innerHTML = element["price"];
    document.getElementsByClassName("lvl")[i].innerHTML = element["level"];
})

let degreeCount = 1000000;
let moneyCount = 10;
let clickCount = 0;

items.forEach((element, i) => {
    document.getElementById(`${element["name"]}`).addEventListener("click", () => {
        if (moneyCount >= element["price"]) {
            element["quantity"]++;
            moneyCount -= element["price"];
            degreeCount -= element["temperature"];
            document.getElementsByClassName("quantity")[i].innerHTML = element["quantity"];
            element["price"] = Math.round(element["cost"] * (element["growth"] ** element["quantity"]));
            document.getElementsByClassName("price")[i].innerHTML = element["price"];
        }
    })
})


function totalMoney() {
    items.forEach(element => {
        moneyCount += element["inc"] * element["quantity"] * (2 ** level);
    })
}

function click() {
    document.getElementsByClassName("terre")[0].addEventListener("click", function(){
        degreeCount--;
        moneyCount++;
        clickCount++;
        document.getElementById("money").innerHTML = Math.round(moneyCount);
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
    document.getElementsByTagName("H2")[0].innerHTML = `${Math.round(degreeCount)}°C`;
    console.log(degreeCount, moneyCount);
}

setInterval(frame, 1000);