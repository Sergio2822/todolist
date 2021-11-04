const ToDoListSchema  = require('../models/ToDoList');

const updateToDo = async (req, res) => {
    const{ id } = req.params;
    const{ text } = req.body;
    try{
        const todo = await ToDoListSchema.updateOne({_id : id} ,{$set:{text}});
        res.json(todo);
    }    
    catch (err){
        res.json({message : err})
    }
};

module.exports = {updateToDo} ;