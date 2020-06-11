const Routine = require('../models/routine.model');

exports.create = async (req, res) => {
  const routine = new Routine(req.body);
  await routine.save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Routine'
      });
    });
};

// Retrieve all the routines
exports.findAll = async (req, res) => {
  await Routine.find()
    .populate({ path: 'exercises', select: 'name description quantity repetitions' })
    .populate({ path: 'coach', select: 'name' })
    .select('name exercises coach days active')
    .then(routines => {
      res.send(routines);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving routines'
      });
    });
};

// Retrieve a routine by id
exports.findOne = async (req, res) => {
  await Routine.findById(req.params.id)
    .populate({ path: 'exercises', select: 'name description quantity repetitions' })
    .populate({ path: 'coach', select: 'name' })
    .select('name exercises coach days active')
    .then(routine => {
      if (!routine) {
        return res.status(404).send({
          message: 'Routine not found with id ' + req.params.id
        });
      }
      res.send(routine);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Routine not found with id ' + req.params.id
        });
      }
      return res.status(500).send({
        message: 'Error retrieving routine with id ' + req.params.id
      });
    });
};

// Update a routine by id
exports.update = async (req, res) => {
  const { id } = req.params;
  const routine = req.body;
  console.log(routine);

  await Routine.findByIdAndUpdate(id, { $set: routine }, { new: true, omitUndefined: true })
    .then(routine => {
      if (!routine) {
        return res.status(404).send({
          message: 'Routine not found with id ' + req.params.id
        });
      }
      res.send(routine);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Routine not found with id ' + req.params.id
        });
      }
      return res.status(500).send({
        message: 'Error updating routine with id ' + req.params.id
      });
    });
};

// Delete a routine by id
exports.delete = async (req, res) => {
  await Routine.findByIdAndRemove(req.params.id)
    .then(routine => {
      if (!routine) {
        return res.status(404).send({
          message: 'Routine not found with id ' + req.params.id
        });
      }
      res.send({ message: 'Routine deleted successfully' });
    }).catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Routine not found with id ' + req.params.id
        });
      }
      return res.status(500).send({
        message: 'Could not delete routine with id ' + req.params.routineId
      });
    });
};
