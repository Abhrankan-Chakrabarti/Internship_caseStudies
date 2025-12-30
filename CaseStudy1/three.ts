// Challenge 3: Weather report with typed variables and a function

// Variable declarations
let city: string = "Mumbai";
let temperature: number = 28;
let isRaining = true; // inferred as boolean

// Function to print weather report
function weatherReport(city: string, temperature: number, isRaining: boolean): void {
  console.log(`In ${city}, it is ${temperature}°C. Is it raining? ${isRaining}`);
}

// Call the function with variables
weatherReport(city, temperature, isRaining);

