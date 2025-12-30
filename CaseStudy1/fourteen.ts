// ----------------------
// Generics in TypeScript – Demo
// ----------------------

// 1. Generic Class: FeedbackBox<T>
class FeedbackBox<T> {
  private feedbacks: T[] = [];

  addFeedback(feedback: T): void {
    this.feedbacks.push(feedback);
  }

  getAllFeedback(): T[] {
    return [...this.feedbacks];
  }
}

// 2. Generic Function: getFirstItem<T>
function getFirstItem<T>(items: T[]): T | undefined {
  return items[0];
}

// ----------------------
// Demo Execution
// ----------------------
function runDemo(): void {
  console.log("=== FeedbackBox Demo ===");

  // String feedback
  const quizFeedback = new FeedbackBox<string>();
  quizFeedback.addFeedback("Great quiz!");
  quizFeedback.addFeedback("Too hard!");
  console.log("Quiz Feedback:", quizFeedback.getAllFeedback());

  // Object feedback
  type LessonFeedback = { rating: number; comment: string };
  const lessonFeedback = new FeedbackBox<LessonFeedback>();
  lessonFeedback.addFeedback({ rating: 5, comment: "Loved it!" });
  lessonFeedback.addFeedback({ rating: 3, comment: "Could be clearer." });
  console.log("Lesson Feedback:", lessonFeedback.getAllFeedback());

  console.log("\n=== getFirstItem Demo ===");
  const firstQuiz = getFirstItem(quizFeedback.getAllFeedback());
  console.log("First quiz feedback:", firstQuiz);

  const firstLesson = getFirstItem(lessonFeedback.getAllFeedback());
  console.log("First lesson feedback:", firstLesson);
}

// Run everything
runDemo();

