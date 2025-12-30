// ----------------------
// Mastering Functions in TypeScript – Final Project (Polished)
// ----------------------

// 1. Simple Declaration & Optional Parameter
function displayMember(id: number, name: string, email?: string): void {
  console.log(`ID: ${id}, Name: ${name}`);
  if (email) console.log(`Email: ${email}`);
}

// 2. Rest Parameters for Fines Tally
function calculateFines(...fines: number[]): number {
  let total = 0;
  for (let fine of fines) total += fine;
  return total;
}

// 3. Default Parameter for Discount
function membershipFee(price: number, discountRate: number = 0.1): number {
  return price - price * discountRate;
}

// 4. Anonymous Function & Callback
function greetVisitor(visitor: string, formatter: (name: string) => void): void {
  formatter(visitor);
}

const vipGreet = (name: string) => console.log(`Welcome VIP ${name}!`);
type VisitorFormatter = (name: string) => void;
let consoleGreet: VisitorFormatter = (n) => console.log(`Hello, ${n}!`);

// 5. Recursion: Factorial
function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// 6. Function Overloads for Report Generation
function generateReport(data: object[]): string;
function generateReport(data: object[], format: "json"): string;
function generateReport(data: any[], format?: string): string {
  if (format === "json") {
    return JSON.stringify(data, null, 2);
  }
  // Custom text formatting for readability
  return data.map(item => {
    if (item.title && item.author) {
      return `Title: ${item.title}, Author: ${item.author}`;
    }
    return item.toString();
  }).join("\n");
}

// ----------------------
// Demo Execution
// ----------------------
function runDemo(): void {
  console.log("=== Display Members ===");
  displayMember(1, "John Doe", "john@example.com");  // with email
  displayMember(2, "Jane Smith");                    // without email

  console.log("\n=== Calculate Fines ===");
  console.log("Total fines:", calculateFines(5, 10, 2.5));

  console.log("\n=== Membership Fees ===");
  console.log("Default 10% discount:", membershipFee(100));
  console.log("Custom 20% discount:", membershipFee(100, 0.2));

  console.log("\n=== Greetings ===");
  greetVisitor("Alice", vipGreet);
  greetVisitor("Bob", consoleGreet);

  console.log("\n=== Factorial ===");
  console.log("Factorial of 5:", factorial(5));

  console.log("\n=== Reports ===");
  const books = [
    { title: "1984", author: "George Orwell" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "Fahrenheit 451", author: "Ray Bradbury" }
  ];
  console.log("Text Report:\n", generateReport(books));
  console.log("JSON Report:\n", generateReport(books, "json"));
}

// Run everything
runDemo();

