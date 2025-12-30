// ----------------------
// Optional & Default Parameters Demo
// ----------------------

// 1. Optional Parameter Example
function describePerson(name: string, age?: number): void {
  if (age !== undefined) {
    console.log(`Name: ${name}, Age: ${age}`);
  } else {
    console.log(`Name: ${name}, Age: Unknown`);
  }
}

// 2. Default Parameter Example
function calculatePrice(basePrice: number, discount: number = 0.1): number {
  return basePrice - basePrice * discount;
}

// ----------------------
// Demo Execution
// ----------------------
function runDemo(): void {
  console.log("=== describePerson ===");
  describePerson("Eve");          // Age omitted → Unknown
  describePerson("Frank", 28);    // Age provided → 28

  console.log("\n=== calculatePrice ===");
  console.log(calculatePrice(100));       // Default 10% discount → 90
  console.log(calculatePrice(100, 0.2));  // Custom 20% discount → 80
}

// Run everything
runDemo();

