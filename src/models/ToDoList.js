const mongoose = require("mongoose")

const ToDoListSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
});


module.exports = mongoose.model("ToDoList",ToDoListSchema)