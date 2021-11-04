// Modules
const express = require('express');
const router = express.Router();

// Resources
const { ToDoResources } = require('../resources');

// All routes
router.use('/todos', ToDoResources);

module.exports = router;