const  ToDoListSchema = require('../models/ToDoList');

const getAll = async (req, res) => {
    try{
        const todo = await ToDoListSchema.find();
        res.json(todo);
    }
    catch (err){
        res.json({message : err})
    }
    
};

module.exports = {getAll}



