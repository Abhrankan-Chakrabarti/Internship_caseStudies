// Single-line comment: This program demonstrates basic TypeScript syntax

/* 
   Multi-line comment:
   We'll use variables, functions, and classes
   to practice TypeScript fundamentals.
*/

// 1. Variable for favorite fruit
let favoriteFruit: string = "Mango";
console.log("My favorite fruit is: " + favoriteFruit);

// 2. Function to double a number
function doubleValue(num: number): void {
  console.log("Double of " + num + " is: " + (num * 2));
}
doubleValue(7);

// 3. Class with a method
class Person {
  sayHello(): void {
    console.log("Hello, nice to meet you!");
  }
}

let user = new Person();
user.sayHello();

