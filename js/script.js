
class Item {
    constructor (inc, quantity, growth, cost, temperature) {
        this.inc = inc;
        this.quantity = quantity;
        this.growth = growth;
        this.cost = cost * (growth ** quantity);
        this.temperature = temperature;
        this.level = 0;
    }
}

let sunpanel = new Item (1, 100, 1.04, 10, 1);

let windturbine = new Item (10, 100, 1.05, 100, 1);

console.log(sunpanel.cost, windturbine.cost);

function frame(){}

setInterval(frame, 1000 / 60);