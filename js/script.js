
class Item {
    constructor (name, nameFR, inc, cost) {
        this.name = name;
        this.nameFR = nameFR;
        this.inc = inc;
        this.quantity = 0;
        this.growth = 1.2;
        this.cost = cost;
        this.temperature = inc;
        this.level = 0;
    }
}

let compost = new Item ("compost", "Compost", 0.1, 10);
let tree = new Item ("tree", "Arbre", 1, 30);
let sunpanel = new Item ("sunpanel", "Panneau Solaire", 12, 250);
let car = new Item ("car", "Voiture électrique", 60, 1000);
let windturbine = new Item ("windturbine", "Éolienne", 300, 4500);
let recycle = new Item ("recycle", "Centre de tri", 1000, 10000);
let factory = new Item ("factory", "Usine verte", 3000, 20000);
let politician = new Item ("politician", "Politicien", 10000, 50000);

let items = [compost, tree, sunpanel, car, windturbine, recycle, factory, politician];

items.forEach((element, i) => {
    element["price"] = Math.round(element["cost"] * (element["growth"] ** element["quantity"]));
    document.getElementsByClassName("price")[i].innerHTML = element["price"];
    document.getElementsByClassName("lvl")[i].innerHTML = element["level"];
})

let degreeCount = 1000000;
let moneyCount = 1000000;

class Upgrade {
    constructor(name, nameFR, cost) {
        this.name = name;
        this.nameFR = nameFR;
        this.cost = cost;
    }
}

let currentUpgrades = [];

/*function pushUpgrade (name, nameFR, element, effect, cost) {
    let li = document.createElement("LI");
    document.getElementById("upgrades").appendChild(li);
    let upg = document.createElement("A");
    li.appendChild(upg);
    upg.setAttribute("id", name);
    upg.setAttribute("class", "upgrade");
    upg.innerHTML = `${nameFR} ${effect} (${cost}€)`
}*/

function checkUpgrade(element) {
    if ((element["quantity"] == 5) || (element["quantity"] == 15) || ((element["quantity"] % 25 == 0) && (element["quantity"] !== 0))) {
        currentUpgrades.push(new Upgrade (element.name, element.nameFR, element.price * 10));
        let li = document.createElement("LI");
        document.getElementById("upgrades").appendChild(li);
        let upg = document.createElement("A");
        li.appendChild(upg);
        upg.setAttribute("id", element.name);
        upg.setAttribute("class", "upgrade");
        upg.innerHTML = `${element.nameFR} lvl up ! (${element.price * 10}€)`
    }
}

currentUpgrades.forEach(element => {
    document.getElementById(element.name).addEventListener("click", () => {
        if (moneyCount >= element["cost"]) {
            element["quantity"]++;
            items.forEach(x => {
                if (x.name == element.name) {
                    x["level"]++;
                }
            })
            moneyCount -= element["cost"];
            document.getElementById(element.name).remove();
            currentUpgrades.pop(element);
        }
    })
})

items.forEach((element, i) => {
    document.getElementsByClassName("item")[i].addEventListener("click", () => {
        if (moneyCount >= element["price"]) {
            element["quantity"]++;
            moneyCount -= element["price"];
            degreeCount -= element["temperature"];
            document.getElementsByClassName("quantity")[i].innerHTML = element["quantity"];
            element["price"] = Math.round(element["cost"] * (element["growth"] ** element["quantity"]));
            document.getElementsByClassName("price")[i].innerHTML = element["price"];
            document.getElementsByClassName("lvl")[i].innerHTML = element["level"];
        }
        checkUpgrade(element);
    })
})

function totalMoney() {
    items.forEach(element => {
        moneyCount += element["inc"] * element["quantity"] * (2 ** element["level"]);
    })
}

function click() {
    document.getElementsByClassName("terre")[0].addEventListener("click", function(){
        degreeCount--;
        moneyCount++;
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

}

setInterval(frame, 1000);