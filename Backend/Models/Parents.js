const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const parentSchema = new Schema({
  student: { type: Schema.Types.ObjectId, ref: 'Student', required: true }, // Reference to the associated student
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  relationship: { 
    type: String, 
    enum: ['Father', 'Mother', 'Guardian', 'Other'], 
    required: true 
  },
  contactInfo: {
    phoneNumber: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    alternatePhoneNumber: { type: String },
  },
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    country: { type: String },
  },
  occupation: { type: String }, // Optional: Occupation of the parent/guardian
  employer: { type: String }, // Optional: Employer details
  isEmergencyContact: { type: Boolean, default: false }, // Whether the parent is listed as an emergency contact
  communicationPreferences: {
    preferredMethod: { type: String, enum: ['Email', 'Phone', 'SMS', 'In-person'], default: 'Phone' },
    receiveUpdates: { type: Boolean, default: true } // Whether the parent/guardian wants to receive school updates
  },
  notes: { type: String }, // Optional: Additional notes (e.g., medical history, concerns, etc.)
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

parentSchema.pre('save', function(next) {
  this.updatedAt = Date.now(); // Update the updatedAt field before saving
  next();
});

const Parent = mongoose.model('Parent', parentSchema);
module.exports = Parent;
