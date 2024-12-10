const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  enrollmentDate: { type: Date, default: Date.now },
  grade: { type: String, required: true },
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    country: { type: String },
  },
  phoneNumber: { type: String },
  email: { type: String, unique: true, required: true },
  emergencyContact: {
    name: { type: String },
    relationship: { type: String },
    phoneNumber: { type: String },
  },
  courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }], // reference to courses the student is enrolled in
  attendance: [{ type: Schema.Types.ObjectId, ref: 'Attendance' }] // reference to attendance records
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
