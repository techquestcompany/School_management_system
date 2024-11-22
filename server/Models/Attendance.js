const attendanceSchema = new Schema({
    student: { type: Schema.Types.ObjectId, ref: 'Student', required: true }, // reference to the student
    course: { type: Schema.Types.ObjectId, ref: 'Course', required: true }, // reference to the course
    date: { type: Date, required: true },
    status: { type: String, enum: ['Present', 'Absent', 'Late'], default: 'Absent' }, // Attendance status
    remarks: { type: String },
  });
  
  const Attendance = mongoose.model('Attendance', attendanceSchema);
  module.exports = Attendance;
  