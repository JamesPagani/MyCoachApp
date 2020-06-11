const express = require('express');
const router = express.Router();

const routines = require('../controllers/routine.controller.js');

// Create a new Routine
router.post('/routines', routines.create);

// Retrieve all routine
router.get('/routines', routines.findAll);

// Retrieve a Routine with id
router.get('/routines/:id', routines.findOne);

// Retrieve a Routine by UserId
router.get('/routines/users/:id', routines.findByUser);

// Update a Routine with id
router.put('/routines/:id', routines.update);

// Delete a Routine with id
router.delete('/routines/:id', routines.delete);

module.exports = router;
