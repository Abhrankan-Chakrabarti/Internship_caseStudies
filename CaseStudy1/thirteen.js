// ----------------------
// Optional & Default Parameters Demo
// ----------------------
// 1. Optional Parameter Example
function describePerson(name, age) {
    if (age !== undefined) {
        console.log("Name: ".concat(name, ", Age: ").concat(age));
    }
    else {
        console.log("Name: ".concat(name, ", Age: Unknown"));
    }
}
// 2. Default Parameter Example
function calculatePrice(basePrice, discount) {
    if (discount === void 0) { discount = 0.1; }
    return basePrice - basePrice * discount;
}
// ----------------------
// Demo Execution
// ----------------------
function runDemo() {
    console.log("=== describePerson ===");
    describePerson("Eve"); // Age omitted → Unknown
    describePerson("Frank", 28); // Age provided → 28
    console.log("\n=== calculatePrice ===");
    console.log(calculatePrice(100)); // Default 10% discount → 90
    console.log(calculatePrice(100, 0.2)); // Custom 20% discount → 80
}
// Run everything
runDemo();
