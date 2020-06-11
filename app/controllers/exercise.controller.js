const Exercise = require('../models/exercise.model');

// Create a new exercise
exports.create = async (req, res) => {
  const exercise = new Exercise(req.body);

  await exercise.save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.mesage || 'Some error occured while creating the exercise'
      });
    });
};

// Retrieve all exercises
exports.findAll = async (req, res) => {
  await Exercise.find()
    .populate({ path: 'coach', select: 'name' })
    .select('name description coach quantity repetitions url active')
    .then(exercises => {
      res.send(exercises);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving exercises'
      });
    });
};

// Retrieve an exercise by ID
exports.findOne = async (req, res) => {
  await Exercise.findById(req.params.id)
    .populate({ path: 'coach', select: 'name' })
    .select('name description coach quantity repetitions url active')
    .then(exercise => {
      if (!exercise) {
        return res.status(404).send({
          message: 'Exercise not found with id ' + req.params.id
        });
      }
      res.send(exercise);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Exercise not found with id ' + req.params.id
        });
      }
      return res.status(500).send({
        message: 'Error retrieving routine with id ' + req.params.id
      });
    });
};

/*
  findByUser: method to retrieve exercises by userId
  Params: id (UserId String)
*/
exports.findByUser = async (req, res) => {
  console.log(req.params);
  await Exercise.find({ coach: req.params.id })
    .populate({ path: 'coach', select: 'name' })
    .select('name description coach quantity repetitions url active')
    .then(exercise => {
      if (!exercise) {
        return res.status(404).send({
          message: 'Exercises not found with UserId ' + req.params.id
        });
      }
      res.send(exercise);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Exercises not found with UserId ' + req.params.id
        });
      }
      return res.status(500).send({
        message: 'Error retrieving exercises with UserId ' + req.params.id
      });
    });
};

// Update exercise by ID
exports.update = async (req, res) => {
  const { id } = req.params;
  const exercise = req.body;
  // console.log(exercise)

  await Exercise.findByIdAndUpdate(id, { $set: exercise }, { new: true, omitUndefined: true })
    .then(exercise => {
      if (!exercise) {
        return res.status(404).send({
          message: 'Exercise not found with id ' + req.params.id
        });
      }
      res.send(exercise);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Exercise not found with id ' + req.params.id
        });
      }
      return res.status(500).send({
        message: 'Error updating exercise with id ' + req.params.id
      });
    });
};

// Delete an exercise by ID
exports.delete = async (req, res) => {
  await Exercise.findByIdAndRemove(req.params.id)
    .then(exercise => {
      if (!exercise) {
        return res.status(404).send({
          message: 'Exercise not found with id ' + req.params.id
        });
      }
      res.send({ message: 'Exercise deleted successfully' });
    }).catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Exercise not foudn with id ' + req.params.id
        });
      }
      return res.status(500).send({
        message: 'Could not delete exercise with id ' + req.params.id
      });
    });
};
