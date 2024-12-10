const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const admissionSchema = new Schema({
    student: { type: Schema.Types.ObjectId, ref: 'Student', required: true }, // Reference to the student
    admissionDate: { type: Date, default: Date.now },
    status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
    grade: { type: String, required: true }, // e.g., 'Grade 1', 'Grade 10', etc.
    course: { type: Schema.Types.ObjectId, ref: 'Course' }, // Optional, if the admission is course-based
    admissionFeePaid: { type: Boolean, default: false }, // Admission fee status
    documentsSubmitted: [{
      documentType: { type: String },
      documentUrl: { type: String },
      submittedDate: { type: Date, default: Date.now }
    }],
    remarks: { type: String }
  });
  
  const Admission = mongoose.model('Admission', admissionSchema);
  module.exports = Admission;
  