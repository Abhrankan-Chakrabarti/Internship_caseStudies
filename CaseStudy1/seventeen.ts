// Abstract base class from the page
abstract class Content {
  public readonly title: string;
  public readonly author: string;
  private published: boolean = false;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  public publish() {
    this.published = true;
  }

  protected isPublished(): boolean {
    return this.published;
  }

  abstract getType(): string;
}

// Assignment subclass
class Assignment extends Content {
  private dueDate: Date | null = null;

  constructor(title: string, author: string) {
    super(title, author);
  }

  public setDueDate(date: Date, isInstructor: boolean) {
    if (!this.isPublished() && isInstructor) {
      this.dueDate = date;
    } else {
      throw new Error("Cannot set due date after publishing or if not an instructor.");
    }
  }

  public getDueDate(): Date | null {
    return this.dueDate;
  }

  getType(): string {
    return "Assignment";
  }
}

// Usage
const assignment = new Assignment("Case Study", "Prof. Rao");
assignment.setDueDate(new Date("2025-01-15"), true); // allowed
assignment.publish();
// assignment.setDueDate(new Date("2025-01-20"), true); // ❌ Error
console.log(assignment.getType()); // "Assignment"

