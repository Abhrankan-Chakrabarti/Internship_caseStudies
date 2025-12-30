// Challenge 5: Using the 'any' type to store flexible answers

// Object to hold answers keyed by question ID
let answers: { [key: string]: any } = {};

// Function to record an answer of any type
function recordAnswer(questionId: string, answer: any): void {
  answers[questionId] = answer;
}

// Add at least three answers of different types
recordAnswer("Q1", "Yes");              // string
recordAnswer("Q2", 42);                 // number
recordAnswer("Q3", ["Option A", "Option B"]); // array

// Print all recorded answers
for (let id in answers) {
  console.log(`Question ${id}:`, answers[id]);
}

