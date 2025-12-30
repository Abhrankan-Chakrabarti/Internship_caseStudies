// Challenge 5: Using the 'any' type to store flexible answers
// Object to hold answers keyed by question ID
var answers = {};
// Function to record an answer of any type
function recordAnswer(questionId, answer) {
    answers[questionId] = answer;
}
// Add at least three answers of different types
recordAnswer("Q1", "Yes"); // string
recordAnswer("Q2", 42); // number
recordAnswer("Q3", ["Option A", "Option B"]); // array
// Print all recorded answers
for (var id in answers) {
    console.log("Question ".concat(id, ":"), answers[id]);
}
