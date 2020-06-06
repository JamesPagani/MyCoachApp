// User Model
const mongoose = require('mongoose');
const { Schema } = mongoose;
const routineSchema = new Schema({
  name: { type: String, required: true },
  exercise: [String],
  coachId: { type: String, required: true},
  active: { type: String, required: true, default: 1 },
  days: {
    monday: Boolean,
    tuesday: Boolean,
    wednesday: Boolean,
    thursday: Boolean,
    friday: Boolean,
    saturday: Boolean,
    Sunday: Boolean
  },
  trainees: [String]
}, {
  timestamps: true
});

module.exports = mongoose.model('Routine', routineSchema);
