// repositories/interfaces/ICourseRepository.js
class ICourseRepository {
  async findAll() { throw new Error("Not implemented"); }
  async findById(id) { throw new Error("Not implemented"); }
  async save(course) { throw new Error("Not implemented"); }
  async enrollStudent(courseId, studentId) { throw new Error("Not implemented"); }
  async findByStudentId(studentId) { throw new Error("Not implemented"); }
  async delete(courseId) { throw new Error("Not implemented"); } // NEW
}

module.exports = ICourseRepository;
