// repositories/InMemoryCourseRepository.js
const ICourseRepository = require('./interfaces/ICourseRepository');
const Course = require('../models/Course');

class InMemoryCourseRepository extends ICourseRepository {
  constructor() {
    super();
    this.courses = [
      new Course("101", "Physics 101", 30),
      new Course("102", "Chemistry 101", 25)
    ];
  }

  async findAll() {
    return this.courses;
  }

  async findById(id) {
    return this.courses.find(c => c.id === id) || null;
  }

  async save(course) {
    const idx = this.courses.findIndex(c => c.id === course.id);
    if (idx >= 0) {
      this.courses[idx] = course;
    } else {
      this.courses.push(course);
    }
  }

  async enrollStudent(courseId, studentId) {
    const course = await this.findById(courseId);
    if (course && !course.students.includes(studentId)) {
      course.students.push(studentId);
      await this.save(course);
    }
  }

  async findByStudentId(studentId) {
    return this.courses.filter(c => c.students.includes(studentId));
  }

  async delete(courseId) {
    const idx = this.courses.findIndex(c => c.id === courseId);
    if (idx === -1) return false;
    this.courses.splice(idx, 1);
    return true;
  }
}

module.exports = InMemoryCourseRepository;
