const financeSchema = new Schema({
    transactionType: { type: String, enum: ['Income', 'Expense'], required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    category: { 
      type: String, 
      enum: ['Tuition Fees', 'Salaries', 'Maintenance', 'Donations', 'Other'], 
      required: true 
    },
    description: { type: String }, // Description of the transaction (e.g., "Salary payment for teacher X")
    paymentMethod: { type: String, enum: ['Cash', 'Bank Transfer', 'Cheque', 'Online'], default: 'Online' },
    referenceNumber: { type: String }, // Reference number for bank transfers or cheque payments
    associatedFee: { type: Schema.Types.ObjectId, ref: 'Fee' }, // Link to the fee if this is an income transaction
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' }, // Reference to the admin or financial officer
    createdAt: { type: Date, default: Date.now }
  });
  
  const Finance = mongoose.model('Finance', financeSchema);
  module.exports = Finance;
  