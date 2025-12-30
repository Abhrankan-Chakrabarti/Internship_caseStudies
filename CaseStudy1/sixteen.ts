// Observer interface
interface Observer {
  update(msg: string): void;
}

// Concrete observers
class Customer implements Observer {
  update(msg: string) {
    console.log("Customer:", msg);
  }
}

class Inventory implements Observer {
  update(msg: string) {
    console.log("Inventory:", msg);
  }
}

class PromotionSystem implements Observer {
  update(msg: string) {
    console.log("PromotionSystem: Special offer! Buy one get one free!");
  }
}

// Subject
class DrinkOrder {
  private observers: Observer[] = [];

  addObserver(obs: Observer) {
    this.observers.push(obs);
  }

  notifyAll(msg: string) {
    this.observers.forEach(obs => obs.update(msg));
  }

  completeOrder() {
    this.notifyAll("Order complete!");
  }
}

// Usage
const order = new DrinkOrder();
order.addObserver(new Customer());
order.addObserver(new Inventory());
order.addObserver(new PromotionSystem());
order.completeOrder();

