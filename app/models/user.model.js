// User Model
const mongoose = require('mongoose');
const { Schema} = mongoose;
const UserSchema = new Schema({
  id: String,
  name: { type: String, required: true },
  email: { type: String, required: true},
  password: { type: String, required: true},
  mobile_phone: String,
  comments: String,
  role: { type: String, required: true},
  customers: [String],
  measures: {
    age: Number,
    weight: Number,
    height: Number},
  objectives: String,
  parentId: String,
  active: Boolean
}, {
  timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
