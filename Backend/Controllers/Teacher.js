// controllers/teacherController.js
const Teacher = require('../models/teacher');

// Create a new teacher (Only Admin can create new teachers)
exports.createTeacher = async (req, res) => {
  if (req.teacher.role !== 'Admin') {
    return res.status(403).json({ success: false, message: 'Permission denied' });
  }

  const { firstName, lastName, email, password } = req.body;

  try {
    const existingTeacher = await Teacher.findOne({ email });
    if (existingTeacher) {
      return res.status(400).json({ success: false, message: 'Teacher already exists' });
    }

    const newTeacher = new Teacher({ firstName, lastName, email, password });
    await newTeacher.save();

    res.status(201).json({ success: true, teacher: newTeacher });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Get all teachers (Only Admin can access this)
exports.getAllTeachers = async (req, res) => {
  if (req.teacher.role !== 'Admin') {
    return res.status(403).json({ success: false, message: 'Permission denied' });
  }

  try {
    const teachers = await Teacher.find();
    res.status(200).json({ success: true, teachers });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Get a single teacher by ID
exports.getTeacherById = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.teacherId);
    if (!teacher) {
      return res.status(404).json({ success: false, message: 'Teacher not found' });
    }

    res.status(200).json({ success: true, teacher });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Update a teacher's information
exports.updateTeacher = async (req, res) => {
  try {
    const updatedTeacher = await Teacher.findByIdAndUpdate(req.params.teacherId, req.body, { new: true });
    if (!updatedTeacher) {
      return res.status(404).json({ success: false, message: 'Teacher not found' });
    }

    res.status(200).json({ success: true, teacher: updatedTeacher });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Delete a teacher's record
exports.deleteTeacher = async (req, res) => {
  try {
    const deletedTeacher = await Teacher.findByIdAndDelete(req.params.teacherId);
    if (!deletedTeacher) {
      return res.status(404).json({ success: false, message: 'Teacher not found' });
    }

    res.status(200).json({ success: true, message: 'Teacher deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
