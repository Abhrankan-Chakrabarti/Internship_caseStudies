// ----------------------
// Advanced Types in TypeScript – Demo
// ----------------------
// ----------------------
// Demo Execution
// ----------------------
function runDemo() {
    console.log("=== InstructorOrAdmin Demo ===");
    var prof = { id: "inst123", coursesTaught: 3 };
    var sysAdmin = { id: "admin456", accessLevel: "super" };
    console.log("Instructor:", prof);
    console.log("Admin:", sysAdmin);
    console.log("\n=== ReadonlyAssignment Demo ===");
    var hw = {
        title: "Project Report",
        dueDate: new Date("2025-01-15"),
        points: 100
    };
    console.log("Assignment:", hw);
    // hw.title = "New Title"; // ❌ Error: Cannot assign to 'title' because it is a read-only property
    console.log("\n=== StatsAsStrings Demo ===");
    var stats = {
        quizzes: "10",
        videos: "5",
        assignments: "3"
    };
    console.log("Learner Stats (as strings):", stats);
}
// Run everything
runDemo();
