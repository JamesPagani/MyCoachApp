// Routine Model
const mongoose = require('mongoose');
const { Schema } = mongoose;

const routineSchema = new Schema({
  name: { type: String, required: true },
  exercises: [
    { type: Schema.Types.ObjectId, ref: 'Exercise' }
  ],
  coach: { type: Schema.Types.ObjectId, ref: 'User' },
  days: {
    monday: Boolean,
    tuesday: Boolean,
    wednesday: Boolean,
    thursday: Boolean,
    friday: Boolean,
    saturday: Boolean,
    Sunday: Boolean
  },
  active: { type: String, required: true, default: 1 }
}, {
  timestamps: true
});

module.exports = mongoose.model('Routine', routineSchema);
