// ----------------------
// Advanced Types in TypeScript – Demo
// ----------------------

// Base types from the tutorial
type Instructor = { id: string; coursesTaught: number };
type Admin = { id: string; accessLevel: "basic" | "super" };

// 1. Union Type: InstructorOrAdmin
type InstructorOrAdmin = Instructor | Admin;

// 2. Utility Type: ReadonlyAssignment
type Assignment = { title: string; dueDate: Date; points: number };
type ReadonlyAssignment = Readonly<Assignment>;

// 3. Mapped Type: StatsAsStrings
type LearnerStats = { quizzes: number; videos: number; assignments: number };
type StatsAsStrings = { [K in keyof LearnerStats]: string };

// ----------------------
// Demo Execution
// ----------------------
function runDemo(): void {
  console.log("=== InstructorOrAdmin Demo ===");
  const prof: InstructorOrAdmin = { id: "inst123", coursesTaught: 3 };
  const sysAdmin: InstructorOrAdmin = { id: "admin456", accessLevel: "super" };
  console.log("Instructor:", prof);
  console.log("Admin:", sysAdmin);

  console.log("\n=== ReadonlyAssignment Demo ===");
  const hw: ReadonlyAssignment = {
    title: "Project Report",
    dueDate: new Date("2025-01-15"),
    points: 100
  };
  console.log("Assignment:", hw);
  // hw.title = "New Title"; // ❌ Error: Cannot assign to 'title' because it is a read-only property

  console.log("\n=== StatsAsStrings Demo ===");
  const stats: StatsAsStrings = {
    quizzes: "10",
    videos: "5",
    assignments: "3"
  };
  console.log("Learner Stats (as strings):", stats);
}

// Run everything
runDemo();

