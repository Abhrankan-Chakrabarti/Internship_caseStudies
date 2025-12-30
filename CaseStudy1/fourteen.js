// ----------------------
// Generics in TypeScript – Demo
// ----------------------
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 1. Generic Class: FeedbackBox<T>
var FeedbackBox = /** @class */ (function () {
    function FeedbackBox() {
        this.feedbacks = [];
    }
    FeedbackBox.prototype.addFeedback = function (feedback) {
        this.feedbacks.push(feedback);
    };
    FeedbackBox.prototype.getAllFeedback = function () {
        return __spreadArray([], this.feedbacks, true);
    };
    return FeedbackBox;
}());
// 2. Generic Function: getFirstItem<T>
function getFirstItem(items) {
    return items[0];
}
// ----------------------
// Demo Execution
// ----------------------
function runDemo() {
    console.log("=== FeedbackBox Demo ===");
    // String feedback
    var quizFeedback = new FeedbackBox();
    quizFeedback.addFeedback("Great quiz!");
    quizFeedback.addFeedback("Too hard!");
    console.log("Quiz Feedback:", quizFeedback.getAllFeedback());
    var lessonFeedback = new FeedbackBox();
    lessonFeedback.addFeedback({ rating: 5, comment: "Loved it!" });
    lessonFeedback.addFeedback({ rating: 3, comment: "Could be clearer." });
    console.log("Lesson Feedback:", lessonFeedback.getAllFeedback());
    console.log("\n=== getFirstItem Demo ===");
    var firstQuiz = getFirstItem(quizFeedback.getAllFeedback());
    console.log("First quiz feedback:", firstQuiz);
    var firstLesson = getFirstItem(lessonFeedback.getAllFeedback());
    console.log("First lesson feedback:", firstLesson);
}
// Run everything
runDemo();
