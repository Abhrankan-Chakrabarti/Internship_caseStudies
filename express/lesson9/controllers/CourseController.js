// controllers/CourseController.js
class CourseController {
  constructor(courseService) {
    this.courseService = courseService;
  }

  async enroll(req, res) {
    try {
      const result = await this.courseService.enroll(req.params.id, req.body.studentId);
      res.json(result);
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  }

  async getStudentCourses(req, res) {
    try {
      const courses = await this.courseService.getStudentCourses(req.params.id);
      res.json(courses);
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  }

  async deleteCourse(req, res) {
    try {
      const result = await this.courseService.deleteCourse(req.params.id);
      res.json(result);
    } catch (e) {
      res.status(404).json({ error: e.message });
    }
  }
}

module.exports = CourseController;
