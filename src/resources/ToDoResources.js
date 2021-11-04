// Modules
const express = require('express');
const ToDoResources = express.Router();
//const { body} = require('express-validator');
// Controllers
const { ToDosGetController, ToDosPostController, ToDosPutController,ToDosDeleteController } = require('../controllers');

// All user resources
ToDoResources.get('/', ToDosGetController.getAll);
ToDoResources.post('/', ToDosPostController.addToDo);
ToDoResources.put('/:id', ToDosPutController.updateToDo);
ToDoResources.delete('/:id', ToDosDeleteController.deleteToDo);

module.exports = ToDoResources;