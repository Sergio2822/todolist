const ToDoListSchema  = require('../models/ToDoList');

const addToDo = async (req, res) => {
    try{
        const ToDo =  ToDoListSchema(req.body);
        const todo = await ToDo.save();
        res.json(todo);
    }    
    catch (err){
        res.json({message : err})
    }
};

module.exports = {addToDo} ;