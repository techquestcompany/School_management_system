const gradeSchema = new Schema({
    student: { type: Schema.Types.ObjectId, ref: 'Student', required: true }, // reference to the student
    course: { type: Schema.Types.ObjectId, ref: 'Course', required: true }, // reference to the course
    grade: { type: String, required: true }, // e.g., 'A', 'B+', 'C', etc.
    comments: { type: String }, // Optional comments from the teacher
    dateAssigned: { type: Date, default: Date.now },
  });
  
  const Grade = mongoose.model('Grade', gradeSchema);
  module.exports = Grade;
  