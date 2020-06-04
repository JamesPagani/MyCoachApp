// User Model
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  id: String,
  name: String,
  email: String,
  password: String,
  mobile_phone: String,
  comments: String,
  role: String,
  customers: [String],
  measures: { age: Number, weight: Number, height: Number },
  objectives: String,
  parentId: String,
  active: Boolean
}, {
  timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
