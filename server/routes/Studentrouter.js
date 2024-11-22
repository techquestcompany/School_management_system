const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Student Routes
router.post('/students', studentController.createStudent); // Create a student
router.get('/students', studentController.getAllStudents); // Get all students
router.get('/students/:studentId', studentController.getStudentById); // Get a student by ID
router.put('/students/:studentId', studentController.updateStudent); // Update a student
router.delete('/students/:studentId', studentController.deleteStudent); // Delete a student

// Enroll a student in a course
router.post('/students/:studentId/courses', studentController.enrollInCourse);

// Record attendance for a student in a course
router.post('/students/:studentId/courses/:courseId/attendance', studentController.recordAttendance);

// Assign a grade to a student for a specific course
router.post('/students/:studentId/courses/:courseId/grades', studentController.assignGrade);

module.exports = router;
