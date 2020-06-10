// User Model
const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true, trim: true },
  mobile_phone: { type: String, unique: true, trim: true },
  comments: { type: String, trim: true },
  role: { type: String, required: true },
  customers: [String],
  measures: {
    age: Number,
    weight: Number,
    height: Number
  },
  objectives: { type: String, trim: true },
  parentId: String,
  active: { type: String, required: true, default: 1 }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
