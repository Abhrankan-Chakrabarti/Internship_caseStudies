// app.js
const express = require('express');
const InMemoryCourseRepository = require('./repositories/InMemoryCourseRepository');
const CourseService = require('./services/CourseService');
const CourseController = require('./controllers/CourseController');

const app = express();
app.use(express.json());

// Dependency injection
const courseRepo = new InMemoryCourseRepository();
const courseService = new CourseService(courseRepo);
const courseController = new CourseController(courseService);

// Routes
app.post('/courses/:id/enroll', (req, res) => courseController.enroll(req, res));
app.get('/students/:id/courses', (req, res) => courseController.getStudentCourses(req, res));
app.delete('/courses/:id', (req, res) => courseController.deleteCourse(req, res)); // NEW

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
