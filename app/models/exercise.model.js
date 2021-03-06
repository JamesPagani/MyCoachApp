// Exercises Model
const mongoose = require('mongoose');
const { Schema } = mongoose;
const exerciseSchema = new Schema({
  name: { type: String, trim: true, required: true },
  description: { type: String, trim: true },
  url: { type: String, trim: true },
  quantity: { type: Number, required: true },
  repetitions: { type: Number, required: true },
  coach: { type: Schema.Types.ObjectId, ref: 'User' },
  active: { type: Boolean, required: true, default: 1 }
}, {
  timestamps: true
});

module.exports = mongoose.model('Exercise', exerciseSchema);
