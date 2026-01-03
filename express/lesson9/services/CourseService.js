// services/CourseService.js
class CourseService {
  constructor(courseRepo) {
    this.courseRepo = courseRepo;
  }

  async enroll(courseId, studentId) {
    const course = await this.courseRepo.findById(courseId);
    if (!course) throw new Error("Course not found");
    if (course.students.length >= course.capacity) throw new Error("Course full");

    await this.courseRepo.enrollStudent(courseId, studentId);
    return { message: "Enrolled successfully" };
  }

  async getStudentCourses(studentId) {
    return this.courseRepo.findByStudentId(studentId);
  }

  async deleteCourse(courseId) {
    const deleted = await this.courseRepo.delete(courseId);
    if (!deleted) throw new Error("Course not found");
    return { message: "Course deleted successfully" };
  }
}

module.exports = CourseService;
