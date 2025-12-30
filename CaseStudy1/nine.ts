// 1. Primitive alias
type CustomerID = string;

// 2. Object alias
type Customer = {
  id: CustomerID;
  name: string;
  email?: string;
};

// 3. Function type alias
type OrderStatus = "pending" | "shipped" | "returned";
type OrderCallback = (status: OrderStatus) => void;
type ProcessOrder = (orderId: number, callback: OrderCallback) => void;

// Example implementation
const processOrder: ProcessOrder = (orderId, callback) => {
  console.log(`Processing order ${orderId}...`);
  callback("pending");
};

// 4. Generic alias
type Container<T> = {
  value: T;
  timestamp: Date;
};

// Usage
let customer: Customer = { id: "C123", name: "Alice" };

let customerContainer: Container<Customer> = {
  value: customer,
  timestamp: new Date()
};

processOrder(101, status => console.log(`Order status: ${status}`));
console.log(customerContainer);

