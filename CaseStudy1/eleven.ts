// Challenge 11: Practicing multiple loop constructs in TypeScript

// Sample data
type Transaction = { id: number; type: "checkout" | "return" | "priority" | "cancelled" };

const transactions: Transaction[] = [
  { id: 1, type: "checkout" },
  { id: 2, type: "return" },
  { id: 3, type: "cancelled" },
  { id: 4, type: "priority" },
  { id: 5, type: "checkout" }
];

let inventory: { [title: string]: number } = {
  "The Hobbit": 3,
  "1984": 5,
  "TypeScript Guide": 2
};

let visitors: string[] = ["Alice", "Bob", "Carol"];

// 1. Counter for each transaction type using a for loop
let counters: { [key: string]: number } = {
  checkout: 0,
  return: 0,
  priority: 0,
  cancelled: 0
};

for (let i = 0; i < transactions.length; i++) {
  const tx = transactions[i];
  counters[tx.type]++; // increment the right counter
}
console.log("Transaction counters:", counters);

// 2. while(true) infinite loop with break on priority
let queue = [...transactions];
while (true) {
  if (queue.length === 0) break;
  const tx = queue.shift()!;
  console.log("Processing:", tx.id, tx.type);
  if (tx.type === "priority") {
    console.log("Priority transaction arrived! Breaking loop.");
    break;
  }
}

// 3. do…while loop with dynamic queue (push new returns)
let dynamicQueue: Transaction[] = [{ id: 6, type: "return" }];
let idx = 0;
do {
  const tx = dynamicQueue[idx];
  if (tx.type === "return") {
    console.log(`Handling return transaction ${tx.id}`);
    // simulate adding a new return dynamically
    if (tx.id === 6) {
      dynamicQueue.push({ id: 7, type: "return" });
    }
  }
  idx++;
} while (idx < dynamicQueue.length);

// 4. Use for…in to reset inventory counts to zero
for (let title in inventory) {
  inventory[title] = 0;
}
console.log("Inventory reset:", inventory);

// 5. Display visitor names in reverse order
for (let i = visitors.length - 1; i >= 0; i--) {
  console.log("Visitor:", visitors[i]);
}

