const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const feeSchema = new Schema({
    student: { type: Schema.Types.ObjectId, ref: 'Student', required: true }, // Reference to the student
    academicYear: { type: String, required: true }, // e.g., "2024-2025"
    tuitionFees: { type: Number, required: true },
    otherFees: { type: Number, default: 0 }, // Other possible fees like library fees, activity fees
    totalFees: { type: Number, required: true }, // Tuition + other fees
    paidAmount: { type: Number, default: 0 }, // Amount paid so far
    remainingAmount: { type: Number, default: function() { return this.totalFees - this.paidAmount; } }, // Remaining amount
    paymentStatus: { type: String, enum: ['Paid', 'Pending', 'Partially Paid'], default: 'Pending' },
    paymentHistory: [{
      amount: { type: Number },
      datePaid: { type: Date },
      paymentMethod: { type: String, enum: ['Cash', 'Bank Transfer', 'Online'], default: 'Online' },
      transactionReference: { type: String }
    }],
    dueDate: { type: Date, required: true },
    feeReminderSent: { type: Boolean, default: false } // Whether the reminder has been sent for pending fees
  });
  
  const Fee = mongoose.model('Fee', feeSchema);
  module.exports = Fee;
  