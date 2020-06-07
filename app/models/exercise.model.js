const mongoose = require('mongoose');
const { Schema } = mongoose;
const ExerciseSchema = new Schema({
  name: { type: String , required: true},
  description: [String],
  quantity: {type: Number, required: true},
  repetitions: {type: Number, required: true}
}, {
  timestams: true
});

module.exports = mongoose.model('Exercise', ExerciseSchema);
