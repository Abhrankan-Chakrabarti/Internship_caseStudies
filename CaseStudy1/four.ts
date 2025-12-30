// Challenge 4: Exploring let and const behavior

// Declare a variable score with let
let score: number = 50;
console.log("Outer score:", score); // Output: 50

// Inside a block, declare another score variable
if (true) {
  let score: number = 100;
  console.log("Inner score:", score); // Output: 100
}

// Outer score remains unchanged
console.log("Outer score after block:", score); // Output: 50

// Declare a constant COUNTRY
const COUNTRY: string = "India";
console.log("Country:", COUNTRY); // Output: India

// Try to change the value of COUNTRY
// COUNTRY = "Japan"; // ❌ Error: Cannot assign to 'COUNTRY' because it is a constant.

// Try to re-declare score in the same block
// let score: number = 60; // ❌ Error: Cannot redeclare block-scoped variable 'score'.

