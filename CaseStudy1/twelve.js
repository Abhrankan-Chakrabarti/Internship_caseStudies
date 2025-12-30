// ----------------------
// Mastering Functions in TypeScript – Final Project (Polished)
// ----------------------
// 1. Simple Declaration & Optional Parameter
function displayMember(id, name, email) {
    console.log("ID: ".concat(id, ", Name: ").concat(name));
    if (email)
        console.log("Email: ".concat(email));
}
// 2. Rest Parameters for Fines Tally
function calculateFines() {
    var fines = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fines[_i] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, fines_1 = fines; _a < fines_1.length; _a++) {
        var fine = fines_1[_a];
        total += fine;
    }
    return total;
}
// 3. Default Parameter for Discount
function membershipFee(price, discountRate) {
    if (discountRate === void 0) { discountRate = 0.1; }
    return price - price * discountRate;
}
// 4. Anonymous Function & Callback
function greetVisitor(visitor, formatter) {
    formatter(visitor);
}
var vipGreet = function (name) { return console.log("Welcome VIP ".concat(name, "!")); };
var consoleGreet = function (n) { return console.log("Hello, ".concat(n, "!")); };
// 5. Recursion: Factorial
function factorial(n) {
    if (n <= 1)
        return 1;
    return n * factorial(n - 1);
}
function generateReport(data, format) {
    if (format === "json") {
        return JSON.stringify(data, null, 2);
    }
    // Custom text formatting for readability
    return data.map(function (item) {
        if (item.title && item.author) {
            return "Title: ".concat(item.title, ", Author: ").concat(item.author);
        }
        return item.toString();
    }).join("\n");
}
// ----------------------
// Demo Execution
// ----------------------
function runDemo() {
    console.log("=== Display Members ===");
    displayMember(1, "John Doe", "john@example.com"); // with email
    displayMember(2, "Jane Smith"); // without email
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
    var books = [
        { title: "1984", author: "George Orwell" },
        { title: "Brave New World", author: "Aldous Huxley" },
        { title: "Fahrenheit 451", author: "Ray Bradbury" }
    ];
    console.log("Text Report:\n", generateReport(books));
    console.log("JSON Report:\n", generateReport(books, "json"));
}
// Run everything
runDemo();
