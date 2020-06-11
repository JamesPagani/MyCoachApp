const User = require('../models/user.model');
// const uuid = require('uuid');

// Create a new User
exports.create = async (req, res) => {
  // Validate request
  /* if (!req.body.name) {
    return res.status(400).send({
      message: 'User name can not be empty'
    });
  } */

  const user = new User(req.body);

  await user.save()
    .then(data => {
      // console.log(data);
      res.send(data);
    })
    .catch(err => {
      // console.log(req.body);
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the User'
      });
    });
};

// Retrieve all the users
exports.findAll = async (req, res) => {
  await User.find()
    .populate({ path: 'customers', select: 'name' })
    .populate({ path: 'parentId', select: 'name' })
    .populate({ path: 'routines', select: 'name' })
    .select('-createdAt -updatedAt -__v')
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users'
      });
    });
};

// Retrieve a user by id
exports.findOne = async (req, res) => {
  await User.findById(req.params.id)
    .populate({ path: 'customers', select: 'name' })
    .populate({ path: 'parentId', select: 'name' })
    .populate({ path: 'routines', select: 'name' })
    .select('-createdAt -updatedAt -__v')
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.id
        });
      }
      res.send(user);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.id
        });
      }
      return res.status(500).send({
        message: 'Error retrieving user with id ' + req.params.id
      });
    });
};

// Update a user by id
exports.update = async (req, res) => {
  // Need validate the request data here!!
  const { id } = req.params;
  const user = req.body;
  // res.json({status: 'User Updated'});
  await User.findByIdAndUpdate(id, { $set: user }, { new: true, omitUndefined: true })
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.id
        });
      }
      res.send(user);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.id
        });
      }
      return res.status(500).send({
        message: 'Error updating user with id ' + req.params.id
      });
    });
};

// Delete a user by id
exports.delete = async (req, res) => {
  await User.findByIdAndRemove(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.id
        });
      }
      res.send({ message: 'User deleted successfully' });
    }).catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.id
        });
      }
      return res.status(500).send({
        message: 'Could not delete user with id ' + req.params.id
      });
    });
};
