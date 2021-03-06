const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
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

/*
  findCustomers: method to retrieve customer by coach
  Params: id (UserId String)
*/
exports.findCustomers = async (req, res) => {
  await User.find({ parentId: req.params.id })
    .populate({ path: 'parentId', select: 'name' })
    .populate({ path: 'routines', select: 'name' })
    .select('-createdAt -updatedAt -__v -customers ')
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'Customers not found with id ' + req.params.id
        });
      }
      res.send(user);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Customers not found with id ' + req.params.id
        });
      }
      return res.status(500).send({
        message: 'Error retrieving customers with id ' + req.params.id
      });
    });
};

/*
  findRoutinesByCustomer: method to retrieve customer by coach
  Params: id (UserId String)
*/
exports.findRoutinesByCustomer = async (req, res) => {
  await User.findById(req.params.id)
    .populate({
      path: 'routines',
      select: '-createdAt -updatedAt -__v -coach',
      populate: {
        path: 'exercises',
        select: '-__v -coach'
      }
    })
    .select('routines -_id')
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'Routines not found with UserId ' + req.params.id
        });
      }
      res.send(user.routines);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Routines not found with UserId ' + req.params.id
        });
      }
      return res.status(500).send({
        message: 'Error retrieving routines with UserId ' + req.params.id
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

// Create a new User but with Token
exports.signUp = async (req, res) => {
  const user = new User(req.body);
  console.log(user);
  console.log("try signUp ");
  await user.save()
    .then(data => {

      // generate a token with the info
      const token = jwt.sign(
        {_id: user._id, username: user.email, name: user.name, role: user.role},
        'secretkey'
        );
      res.status(200).json({token});
    })
    .catch(err => {
      // console.log(req.body);
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the User'
      });
    });
};

// get token for login
exports.signIn = async (req, res) => {

  const {email, password} = req.body;
  const user = await User.findOne({ email: email });

  if (!user) return res.status(401).send("The email doesn't exist");
  if (user.password !== password) return res.status(401).send('wrong Password');

  // generate a token with the info
  const token = jwt.sign({_id: user._id, username: user.email, name: user.name,
    role: user.role}, 'secretkey');
  
  return res.status(200).json({token});
};