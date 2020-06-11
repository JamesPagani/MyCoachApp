const express = require('express');
const router = express.Router();

const exercises = require('../controllers/exercise.controller.js');

// Create a new exercise
router.post('/exercises', exercises.create);

// Retrieve all exercises
router.get('/exercises', exercises.findAll);

// Retrieve an exercise by ID
router.get('/exercises/:id', exercises.findOne);

// Retrieve an exercise by user id
router.get('/exercises/users/:id', exercises.findByUser);

//  Update an exercise with ID
router.put('/exercises/:id', exercises.update);

// Delete an exercise with ID
router.delete('/exercises/:id', exercises.delete);

module.exports = router;
