// Concrete observers
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.update = function (msg) {
        console.log("Customer:", msg);
    };
    return Customer;
}());
var Inventory = /** @class */ (function () {
    function Inventory() {
    }
    Inventory.prototype.update = function (msg) {
        console.log("Inventory:", msg);
    };
    return Inventory;
}());
var PromotionSystem = /** @class */ (function () {
    function PromotionSystem() {
    }
    PromotionSystem.prototype.update = function (msg) {
        console.log("PromotionSystem: Special offer! Buy one get one free!");
    };
    return PromotionSystem;
}());
// Subject
var DrinkOrder = /** @class */ (function () {
    function DrinkOrder() {
        this.observers = [];
    }
    DrinkOrder.prototype.addObserver = function (obs) {
        this.observers.push(obs);
    };
    DrinkOrder.prototype.notifyAll = function (msg) {
        this.observers.forEach(function (obs) { return obs.update(msg); });
    };
    DrinkOrder.prototype.completeOrder = function () {
        this.notifyAll("Order complete!");
    };
    return DrinkOrder;
}());
// Usage
var order = new DrinkOrder();
order.addObserver(new Customer());
order.addObserver(new Inventory());
order.addObserver(new PromotionSystem());
order.completeOrder();
