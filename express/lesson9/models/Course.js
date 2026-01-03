// models/Course.js
class Course {
  constructor(id, name, capacity, students = []) {
    this.id = id;
    this.name = name;
    this.capacity = capacity;
    this.students = students;
  }
}

module.exports = Course;
