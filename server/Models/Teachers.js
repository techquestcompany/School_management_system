const teacherSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    hireDate: { type: Date, default: Date.now },
    subjectSpecialization: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    phoneNumber: { type: String },
    coursesTeaching: [{ type: Schema.Types.ObjectId, ref: 'Course' }], // reference to the courses the teacher is teaching
  });
  // Hash password before saving the teacher document
teacherSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
      return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
  });
  
  // Compare password function
  teacherSchema.methods.comparePassword = function(password) {
    return bcrypt.compare(password, this.password);
  };
  
  
  const Teacher = mongoose.model('Teacher', teacherSchema);
  module.exports = Teacher;
  