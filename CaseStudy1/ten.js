// Challenge 10: Practicing conditional logic in TypeScript
// 1. Use an if statement to check sign
function checkSign(num) {
    if (num > 0) {
        console.log("".concat(num, " is positive"));
    }
}
// 2. Use an if…else to check even or odd
function evenOrOdd(num) {
    if (num % 2 === 0) {
        console.log("".concat(num, " is even"));
    }
    else {
        console.log("".concat(num, " is odd"));
    }
}
// 3. Use an if…else if…else ladder to assign grade
function getGrade(score) {
    if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    else if (score >= 70) {
        return "C";
    }
    else if (score >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}
// 4. Use a switch to provide feedback based on grade
function provideFeedback(grade) {
    switch (grade) {
        case "A":
            console.log("Excellent performance!");
            break;
        case "B":
            console.log("Great job! Keep it up.");
            break;
        case "C":
            console.log("Good effort; aim higher next time.");
            break;
        case "D":
            console.log("Needs improvement; review your work.");
            break;
        case "F":
            console.log("Unsatisfactory; please seek help.");
            break;
        default:
            console.log("Invalid grade provided.");
            break;
    }
}
// --- Example Runs ---
checkSign(5); // positive
checkSign(-3); // no output (not positive)
evenOrOdd(10); // even
evenOrOdd(7); // odd
var grade1 = getGrade(85); // "B"
console.log("Grade:", grade1);
provideFeedback(grade1);
var grade2 = getGrade(55); // "F"
console.log("Grade:", grade2);
provideFeedback(grade2);
