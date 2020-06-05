const User = require('../models/user.model');
const uuid = require('uuid');

// Create a new User
exports.create = async (req, res) => {
  // Validate request
  /* if (!req.body.name) {
    return res.status(400).send({
      message: 'User name can not be empty'
    });
  } */

  const user = new User(req.body);

  await user.save();
  res.json({
    'status': 'Emplayee Saved'
  });

  /*
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the User'
      });
    });*/
};

// Retrieve all the users
exports.findAll = async (req, res) => {
  const users = await User.find();
  res.json(users);
  /*
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users'
      });
    });*/
};

// Retrieve a user by id
exports.findOne = async (req, res) => {
  const users = await User.findById( req.params.id);
  res.json(users);
  /*
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
    });*/
};

// Update a user by id
exports.update = async (req, res) => {
  // Need validate the request data here!!
  const {id} = req.params;
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    mobile_phone: req.body.mobile_phone,
    comments: req.body.comments,
    role: req.body.role,
    customers: [req.body.customers],
    measures: { age: req.body.age, weight: req.body.weight, height: req.body.height },
    objectives: req.body.objectives,
    parentId: req.body.parentId,
    active: req.body.active
  }
  await User.findByIdAndUpdate(id, { $set: user }, { new: true });
  res.json({status: 'User Updated'});
  /*
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.userId
        });
      }
      res.send(user);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.userId
        });
      }
      return res.status(500).send({
        message: 'Error updating user with id ' + req.params.userId
      });
    });*/
};

// Delete a user by id
exports.delete = async (req, res) => {
  await User.findByIdAndRemove(req.params.id);
  res.json({status: 'User Deleted'});
    /*.then(note => {
      if (!note) {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.userId
        });
      }
      res.send({ message: 'User deleted successfully' });
    }).catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Note not found with id ' + req.params.userId
        });
      }
      return res.status(500).send({
        message: 'Could not delete note with id ' + req.params.userId
      });
    });*/
};
