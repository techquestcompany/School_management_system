const courseSchema = new Schema({
    courseName: { type: String, required: true },
    courseCode: { type: String, unique: true, required: true },
    description: { type: String },
    teacher: { type: Schema.Types.ObjectId, ref: 'Teacher', required: true }, // reference to the teacher teaching the course
    students: [{ type: Schema.Types.ObjectId, ref: 'Student' }], // reference to students enrolled in the course
    schedule: {
      days: [String], // e.g., ['Monday', 'Wednesday', 'Friday']
      time: { type: String }, // e.g., '10:00 AM - 12:00 PM'
    },
  });
  
  const Course = mongoose.model('Course', courseSchema);
  module.exports = Course;
  