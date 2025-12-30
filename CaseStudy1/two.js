// Single-line comment: This program demonstrates basic TypeScript syntax
/*
   Multi-line comment:
   We'll use variables, functions, and classes
   to practice TypeScript fundamentals.
*/
// 1. Variable for favorite fruit
var favoriteFruit = "Mango";
console.log("My favorite fruit is: " + favoriteFruit);
// 2. Function to double a number
function doubleValue(num) {
    console.log("Double of " + num + " is: " + (num * 2));
}
doubleValue(7);
// 3. Class with a method
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.sayHello = function () {
        console.log("Hello, nice to meet you!");
    };
    return Person;
}());
var user = new Person();
user.sayHello();
