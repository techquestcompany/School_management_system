const Student = require('../models/student'); // Import the Student model
const Course = require('../models/course'); // Import the Course model (if you're working with course enrollments)
const Attendance = require('../models/attendance'); // Import the Attendance model (if applicable)
const Grade = require('../models/grade'); // Import the Grade model (if applicable)

// Create a new student
exports.createStudent = async (req, res) => {
  try {
    const studentData = req.body;

    // Create a new student record
    const newStudent = new Student(studentData);

    // Save the student to the database
    await newStudent.save();

    // Respond with the created student data
    res.status(201).json({ success: true, student: newStudent });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Get all students
exports.getAllStudents = async (req, res) => {
  try {
    // Fetch all students from the database
    const students = await Student.find().populate('courses').populate('attendance');

    // Respond with the list of students
    res.status(200).json({ success: true, students });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Get a single student by ID
exports.getStudentById = async (req, res) => {
  try {
    const { studentId } = req.params;

    // Fetch the student by ID
    const student = await Student.findById(studentId).populate('courses').populate('attendance');

    if (!student) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }

    // Respond with the student data
    res.status(200).json({ success: true, student });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Update a student record
exports.updateStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    const updatedData = req.body;

    // Find the student by ID and update the record
    const updatedStudent = await Student.findByIdAndUpdate(studentId, updatedData, { new: true });

    if (!updatedStudent) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }

    // Respond with the updated student data
    res.status(200).json({ success: true, student: updatedStudent });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Delete a student
exports.deleteStudent = async (req, res) => {
  try {
    const { studentId } = req.params;

    // Find and delete the student by ID
    const deletedStudent = await Student.findByIdAndDelete(studentId);

    if (!deletedStudent) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }

    // Respond with success message
    res.status(200).json({ success: true, message: 'Student deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Enroll a student in a course
exports.enrollInCourse = async (req, res) => {
  try {
    const { studentId } = req.params;
    const { courseId } = req.body;

    // Find the student and course
    const student = await Student.findById(studentId);
    const course = await Course.findById(courseId);

    if (!student || !course) {
      return res.status(404).json({ success: false, message: 'Student or Course not found' });
    }

    // Add the course to the student's courses array
    student.courses.push(course);

    // Save the updated student record
    await student.save();

    // Respond with the updated student data
    res.status(200).json({ success: true, student });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Record attendance for a student in a course
exports.recordAttendance = async (req, res) => {
  try {
    const { studentId, courseId } = req.params;
    const { status, remarks } = req.body;

    // Create a new attendance record
    const newAttendance = new Attendance({
      student: studentId,
      course: courseId,
      status,
      remarks,
    });

    // Save the attendance record to the database
    await newAttendance.save();

    // Add the attendance record to the student's attendance array
    const student = await Student.findById(studentId);
    student.attendance.push(newAttendance);

    // Save the student with the updated attendance record
    await student.save();

    // Respond with the updated attendance data
    res.status(200).json({ success: true, attendance: newAttendance });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Assign a grade to a student for a specific course
exports.assignGrade = async (req, res) => {
  try {
    const { studentId, courseId } = req.params;
    const { grade, comments } = req.body;

    // Create a new grade record
    const newGrade = new Grade({
      student: studentId,
      course: courseId,
      grade,
      comments,
    });

    // Save the grade record to the database
    await newGrade.save();

    // Add the grade record to the student's grade array
    const student = await Student.findById(studentId);
    student.grades.push(newGrade);

    // Save the student with the updated grade record
    await student.save();

    // Respond with the updated grade data
    res.status(200).json({ success: true, grade: newGrade });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
