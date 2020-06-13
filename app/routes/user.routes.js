const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const users = require('../controllers/user.controller.js');

// Create a new User
router.post('/users', users.create);

// Retrieve all Users
router.get('/users', users.findAll);

// Retrieve a User with id
router.get('/users/:id', users.findOne);

// Retrieve a Customers by Coach
router.get('/users/:id/customers', users.findCustomers);

// Retrieve a Routines by Customer
router.get('/users/:id/routines', users.findRoutinesByCustomer);

// Update a User with id
router.put('/users/:id', users.update);

// Delete a User with id
router.delete('/users/:id', users.delete);

router.post('/signup', users.signUp);

router.post('/signin', users.signIn);

module.exports = router;

// protects the routes. Only users with tokens (logged in)
// example use router.post('/users', veryfyToken, users.create);
function veryfyToken(req, res, next){
	if(!req.headers.authorization){
		return res.status(401).send('unauthorized request');
	}

	const token = req.headers.authorization.split(' ')[1];
	console.log(token);
	if (token === 'null')
	{
		return res.status(401).send('unauthorized request. (is null)');
	}
	
	// get the data of token
	const payload = jwt.verify(token, 'secretkey');
	console.log(payload);
	next();
}