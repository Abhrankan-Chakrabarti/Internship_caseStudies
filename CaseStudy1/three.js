// Challenge 3: Weather report with typed variables and a function
// Variable declarations
var city = "Mumbai";
var temperature = 28;
var isRaining = true; // inferred as boolean
// Function to print weather report
function weatherReport(city, temperature, isRaining) {
    console.log("In ".concat(city, ", it is ").concat(temperature, "\u00B0C. Is it raining? ").concat(isRaining));
}
// Call the function with variables
weatherReport(city, temperature, isRaining);
