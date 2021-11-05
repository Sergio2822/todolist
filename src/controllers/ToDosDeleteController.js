const ToDoListSchema  = require('../models/ToDoList');

const deleteToDo = async (req, res) => {
    const{ id } = req.params;
    try{
        const todo = await ToDoListSchema.deleteOne({_id : id});
        res.json(todo);
    }    
    catch (err){
        res.json({message : err})
    }
};

module.exports = {deleteToDo} ;