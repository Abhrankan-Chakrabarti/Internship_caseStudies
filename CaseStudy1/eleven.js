// Challenge 11: Practicing multiple loop constructs in TypeScript
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var transactions = [
    { id: 1, type: "checkout" },
    { id: 2, type: "return" },
    { id: 3, type: "cancelled" },
    { id: 4, type: "priority" },
    { id: 5, type: "checkout" }
];
var inventory = {
    "The Hobbit": 3,
    "1984": 5,
    "TypeScript Guide": 2
};
var visitors = ["Alice", "Bob", "Carol"];
// 1. Counter for each transaction type using a for loop
var counters = {
    checkout: 0,
    return: 0,
    priority: 0,
    cancelled: 0
};
for (var i = 0; i < transactions.length; i++) {
    var tx = transactions[i];
    counters[tx.type]++; // increment the right counter
}
console.log("Transaction counters:", counters);
// 2. while(true) infinite loop with break on priority
var queue = __spreadArray([], transactions, true);
while (true) {
    if (queue.length === 0)
        break;
    var tx = queue.shift();
    console.log("Processing:", tx.id, tx.type);
    if (tx.type === "priority") {
        console.log("Priority transaction arrived! Breaking loop.");
        break;
    }
}
// 3. do…while loop with dynamic queue (push new returns)
var dynamicQueue = [{ id: 6, type: "return" }];
var idx = 0;
do {
    var tx = dynamicQueue[idx];
    if (tx.type === "return") {
        console.log("Handling return transaction ".concat(tx.id));
        // simulate adding a new return dynamically
        if (tx.id === 6) {
            dynamicQueue.push({ id: 7, type: "return" });
        }
    }
    idx++;
} while (idx < dynamicQueue.length);
// 4. Use for…in to reset inventory counts to zero
for (var title in inventory) {
    inventory[title] = 0;
}
console.log("Inventory reset:", inventory);
// 5. Display visitor names in reverse order
for (var i = visitors.length - 1; i >= 0; i--) {
    console.log("Visitor:", visitors[i]);
}
