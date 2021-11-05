const mongoose = require("mongoose")

const ToDoListSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        required: isMyFieldNotEmpty,
    },
});
function isMyFieldNotEmpty () {
    return this.text.length > 1? false: true
}

module.exports = mongoose.model("ToDoList",ToDoListSchema)